import styles from "./Card.module.css"
export const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.personalData}>
				<div className={styles.photo}>
					<img src="https://pm1.aminoapps.com/7563/896932e3fcd3fe7849f7256a024449829dd2add5r1-300-300v2_uhq.jpg" alt="image"/>
				</div>
				<div className={styles.nameAndMail}>
					<div className={styles.name}>Name Surname</div>
					<div className={styles.email}>test.mail@gmail.com</div>
				</div>
			</div>
			<div className={styles.additionalData}>
				<div className={styles.additionalDataContainer}>
					<div className={styles.phone}>Phone No</div>
					<div>PhoneInfo</div>
				</div>
				<div className={styles.additionalDataContainer}>
					<div className={styles.birthday}>Birthday</div>
					<div>BirthdayInfo</div>
				</div>
				<div className={styles.additionalDataContainer}>
					<div className={styles.address}>Address</div>
					<div>AddressInfo</div>
				</div>
			</div>

		</div>
	);
};