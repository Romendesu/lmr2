import styles from './styles/ButtonLink.module.css'

function ButtonLink({ name, link, color, size }) {
    // Prop del color
    const colorClass = color === 'green' ? styles.green : color === 'red' ? styles.red : styles.grey;
    const sizeClass = size === 'small' ? styles.small : color === 'medium'? styles.medium : styles.large
    return (
        <a href={link} className={`${styles.buttonLink} ${colorClass} ${sizeClass}`}>
            <p>{name}</p>
        </a>
    )
}

export default ButtonLink
