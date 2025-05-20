import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, set } from "firebase/database";
import { app } from "../store/firebase";

const db = getDatabase(app);

function View() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let intervalId;

		const fetchCount = async () => {
			const countRef = ref(db, "viewCount");

			const formatter = new Intl.NumberFormat("en", {
				notation: "compact",
				compactDisplay: "short",
			});

			try {
				const snapshot = await get(countRef);
				const data = snapshot.val();
				const currentCount = data?.count || 0;

				// Update UI
				setCount(formatter.format(currentCount));
			} catch (error) {
				console.error("Error fetching view count:", error);
			}
		};

		const incrementIfFirstVisit = async () => {
			const hasViewed = localStorage.getItem("hasViewed");
			const countRef = ref(db, "viewCount");

			try {
				const snapshot = await get(countRef);
				const data = snapshot.val();
				const currentCount = data?.count || 0;

				if (!hasViewed) {
					const newCount = currentCount + 1;
					await set(countRef, { count: newCount });
					localStorage.setItem("hasViewed", "true");

					setCount(
						new Intl.NumberFormat("en", {
							notation: "compact",
							compactDisplay: "short",
						}).format(newCount)
					);
				}
			} catch (error) {
				console.error("Error incrementing view count:", error);
			}
		};

		incrementIfFirstVisit();
		fetchCount();

		// Poll every 10 seconds to update the count
		intervalId = setInterval(() => {
			fetchCount();
		}, 100); // every 100 milliseconds

		// Clear interval when component unmounts
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="view">
			<img src="view.png" alt="view" />
			<span>{count}</span>
		</div>
	);
}

export default View;
