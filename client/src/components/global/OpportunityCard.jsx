import styles from './styles/OpportunityCard.module.css';
export default function AdministrationCard ({state, imgUrl, name, location, anualSales, price}) {

    const stateColor = state === "disponible" ? "avaiable" : "not_avaiable";    // O disponible, o no disponible

    return (
        <div className={styles.card}>
            {/*PRIMERA PARTE: FOTO + TEXTO + UBICACIÓN*/}
            <div className={styles.card_image}>
            <span className={`${styles.badge} ${styles[stateColor]}`}>
                {state}
            </span>               
                <img 
                    src={imgUrl}
                    alt={name}
                />
                <div className={styles.location}>
                    {`📍 ${location}`}
                </div>
            </div>

            {/*SEGUNDA PARTE: NOMBRE + VENTAS ANUALES (SI PROCEDE) + PRECIO DE TRASPASO*/}
            <div className={styles.card_content}>
                <h2>{name}</h2>
                <div className={styles.sales}>
                    <span className={styles.icon}>↗</span>
                    {`Ventas anuales: ${anualSales} €`}
                </div>
                <hr />
            </div>
            <div className={styles.price_section}>
                <div>
                    <p className={styles.label}>Precio traspaso</p>
                    <p className={styles.price}>{`${price} €`}</p>
                </div>
                <div className={styles.arrow}>→</div>
            </div>
        </div>
    );
}