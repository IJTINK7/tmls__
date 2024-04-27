import styles from "./AgeGroups.module.css"
export const AgeGroups = () => {
	return (
		<div className={styles.ageInfo}>
			<h4>Age Groups</h4>
			<div>
				<p>11 to 20</p>
				<p>count</p>
			</div>
			<div>
				<p>21 to 30</p>
				<p>count</p>
			</div>
			<div>
				<p>31 to 40</p>
				<p>count</p>
			</div>
			<div>
				<p>41 to 50</p>
				<p>count</p>
			</div>
			<div>
				<p>51+</p>
				<p>count</p>
			</div>
		</div>
	);
};

