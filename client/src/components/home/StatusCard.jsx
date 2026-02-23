import styles from "./styles/StatusCard.module.css";

export default function StatusCard({ icon, quantity, text }) {
  return (
    <div className={styles.status_card}>
      <div className={styles.icon_container}>
        <img src={icon} alt="icon" className={styles.icon_img} />
      </div>
      <div className={styles.text_content}>
        <span className={styles.quantity}>{quantity}</span>
        <span className={styles.description}>{text}</span>
      </div>
    </div>
  );
}