import styles from "./styles/Card.module.css"

export default function Card({ title, subtitle, type, icon }) {
    // Objeto con las clases del color
    const typeClasses = {
        sales: styles.green,
        surface: styles.blue,
        administration: styles.yellow,
        community: styles.purple
    };

    const getType = typeClasses[type] || styles.purple;

    return (
        <div className={`${styles.container} ${getType}`}>
            <img src={icon} className={`${styles.icon} ${getType}`}/>
            <div className={styles.information}>
                <p className={styles.title}>{title}</p>
                <h1 className={styles.subtitle}>{subtitle}</h1>
            </div>
        </div>
    );
}