import styles from "./styles/Header.module.css"
import ButtonLink from "../home/ButtonLink.jsx"


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logotype_header}>
                <h1>LMR Abogados</h1>
            </div>
            <div className={styles.navegation_bar}>
                <a href="/" className={styles.header_link}><h2>Inicio</h2></a>
                <a href="/catalog" className={styles.header_link}><h2>Catálogo</h2></a>
                <a href="/" className={styles.header_link}><h2>Contáctanos</h2></a>
            </div>
            <ButtonLink className={styles.buttonlink} name="Ver Traspasos" link="/catalog" color="green" size="small"/>
        </header>
    )
}
