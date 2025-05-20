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
			console.log(hasViewed);

			try {
				const snapshot = await get(countRef);
				const data = snapshot.val();
				console.log(data, "data");
				const currentCount = data?.count || 0;

				// Update UI
				setCount(currentCount);
				console.log("Fetched count:", currentCount);

				// Increment only if user hasn't viewed yet
				if (!hasViewed) {
					const newCount = currentCount + 1;
					await set(countRef, { count: newCount });
					localStorage.setItem("hasViewed", "true");
					setCount(newCount);
					console.log(count);
					console.log("Updated count:", newCount);
				}
			} catch (error) {
				console.error("Error fetching or updating view count:", error);
			}
		};

		fetchCount();
	}, []);

	return (
		<div className="view">
			<img src="view.png" alt="view" />
			<span>{count}</span>
		</div>
	);
}

export default View;
