import styles from "./ScrollContainer.module.css";
import { useState, useEffect } from "react";

export const ScrollContainer = () => {
	const [isScrollActive, setIsScrollActive] = useState(false);

	useEffect(() => {
		const container = document.querySelector(`.${styles.scrollContainer}`);
		if (container) {
			setIsScrollActive(container.scrollHeight > container.clientHeight);
		}
	}, []);

	return (
		<>
			{isScrollActive ? (
				<div className={styles.scrollContainer}>S</div>
			) : null}
		</>
	);
};