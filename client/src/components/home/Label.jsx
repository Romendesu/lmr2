import styles from "./styles/Label.module.css";

export default function Label ({name, color}) {
    const colorClass = color === "green" ? styles.green : color === "red" ? styles.red : styles.grey;

    return (
        <div className = {`${styles.label} ${colorClass}`}>
            <p>{name}</p>
        </div>
    )
}