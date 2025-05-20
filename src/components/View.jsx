import React, { useEffect, useState, useCallback } from "react";
import { getDatabase, ref, get, set } from "firebase/database";
import { app } from "../store/firebase";

const db = getDatabase(app);

function View() {
	const [count, setCount] = useState(0);

	const formatter = new Intl.NumberFormat("en", {
		notation: "compact",
		compactDisplay: "short",
	});

	const fetchCount = useCallback(async () => {
		const countRef = ref(db, "viewCount");
		try {
			const snapshot = await get(countRef);
			const data = snapshot.val();
			const currentCount = data?.count || 0;

			setCount(formatter.format(currentCount));
		} catch (error) {
			console.error("Error fetching view count:", error);
		}
	}, [formatter]);

	const incrementIfFirstVisit = useCallback(async () => {
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

				setCount(formatter.format(newCount));
			}
		} catch (error) {
			console.error("Error incrementing view count:", error);
		}
	}, [formatter]);

	useEffect(() => {
		incrementIfFirstVisit();
		fetchCount();

		const intervalId = setInterval(fetchCount, 10000); // every 10 seconds

		return () => clearInterval(intervalId);
	}, [fetchCount, incrementIfFirstVisit]);

	return (
		<div className="view">
			<img src="view.png" alt="view" />
			<span>{count}</span>
		</div>
	);
}

export default View;
