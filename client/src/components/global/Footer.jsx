import styles from "./styles/Footer.module.css";
import Whatsapp from '../../assets/icons/social-media/whatsapp.svg';
import Instagram from '../../assets/icons/social-media/instagram.svg';
import Facebook from '../../assets/icons/social-media/facebook.svg';
import Twitter from '../../assets/icons/social-media/twitter.svg';

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                {/* Columna 1 */}
                <div className={styles.brandSection}>
                <div className={styles.logoRow}>
                    <div className={styles.logo}>L</div> {/*CAMBIAR A LA IMAGEN DE LMR A POSTERIORI*/}
                    <h2>LMR Abogados</h2>
                </div>

                <p className={styles.description}>
                    LMR es un despacho especializado en la compra y venta de administraciones de loterías integrales. Contamos con una sólida y acreditada experiencia en el sector, ofrecemos un servicio integral que acompaña a nuestros clientes en todo el proceso de transmisión, desde la valoración del punto de venta hasta la formalización de la cesión ante los organismos competentes.
                    Nuestro objetivo es garantizar operaciones seguras, transparentes y adaptadas a las necesidades específicas de cada cliente, tanto compradores como vendedores.
                </p>

                <div className={styles.socials}>
                    <div className={styles.socialIcon}>
                        <img 
                            src={Whatsapp}
                            alt="Whatsapp"
                        />
                    </div>
                    <div className={styles.socialIcon}>
                        <img 
                            src={Instagram} 
                            alt="Instagram"
                        />
                    </div>
                    <div className={styles.socialIcon}>
                        <img 
                            src={Facebook} 
                            alt="Facebook"
                        />
                    </div>
                    <div className={styles.socialIcon}>
                        <img 
                            src={Twitter} 
                            alt="Twitter"
                        />
                    </div>
                </div>
                </div>

                {/* Columna 2 */}
                <div className={styles.linksSection}>
                <h4>Enlaces</h4>
                <ul>
                    <li>Inicio</li>
                    <li>Catálogo</li>
                    <li>Cómo funciona</li>
                    <li>Contacto</li>
                </ul>
                </div>

                {/* Columna 3 */}
                <div className={styles.contactSection}>
                <h4>Contacto</h4>
                <p>info@lmr-abogados.com</p>
                <p>+34 687 48 29 39</p>
                <p>
                    Ingresar dias <br />
                    Ingresar horas
                </p>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© 2026 LoteriasTraspaso. Todos los derechos reservados.</p>
                <div className={styles.legalLinks}>
                <span>Política de privacidad</span>
                <span>Términos de uso</span>
                </div>
            </div>
        </footer>
    );
}