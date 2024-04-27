import styles from "../AgeGroups/AgeGroups.module.css";

export const GenderGroups = () => {
	return (
		<div className={styles.ageInfo}>
			<h4>Gender Groups</h4>
			<div>
				<p>Male</p>
				<p>count users</p>
			</div>
			<div>
				<p>Female</p>
				<p>count users</p>
			</div>
		</div>

	);
};