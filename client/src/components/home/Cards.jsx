import styles from "./styles/Cards.module.css";

export default function StepCard({ id, title, description, icon }) {
  return (
    <div className={styles.card}>

      {/* NÚMERO DE FONDO */}
      <span className={styles.stepId}>{id}</span>

      <div className={styles.iconContainer}>
        <img src={icon} alt="" className={styles.icon} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

    </div>
  );
}
