import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, set } from "firebase/database";
import { app } from "../store/firebase";

const db = getDatabase(app);

function View() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const fetchCount = async () => {
			const hasViewed = localStorage.getItem("hasViewed");
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

				// Increment only if user hasn't viewed yet
				if (!hasViewed) {
					const newCount = currentCount + 1;
					await set(countRef, { count: newCount });
					localStorage.setItem("hasViewed", "true");

					setCount(formatter.format(newCount));
				}
			} catch (error) {
				console.error("Error fetching or updating view count:", error);
			}
		};

		fetchCount();
	}, []);

	useEffect(() => {
		const flag = localStorage.getItem("hasViewed");
		if (flag) {
			const interval = setInterval(async () => {
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
					console.error("Error fetching or updating view count:", error);
				}
			}, 1000);

			return () => clearInterval(interval);
		}
	});
	return (
		<>
			{count ? (
				<div className="view">
					<img src="view.png" alt="view" />
					<span>{count}</span>
				</div>
			) : null}
		</>
	);
}

export default View;
