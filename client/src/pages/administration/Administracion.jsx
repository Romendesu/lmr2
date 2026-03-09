// Componentes a emplear
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import Card from "../../components/administration/Card";

// Assets a emplear
import "./index.css"
import leftArrow from "../../assets/icons/arrows/leftArrow.svg"
import example from "../../assets/img/example.jpg"
import ping from "../../assets/icons/ping.svg"
import trendArrow from "../../assets/icons/arrows/trend.svg"
import ruler from "../../assets/icons/ruler.svg"
import shop from "../../assets/icons/shop.svg"
import mapPin from "../../assets/icons/mapPin.svg"


export default function Administracion () {
    return (
    <>
        <Header />
        <main className="main-container">
            {/* Primer elemento -> Mensaje para volver al catalogo*/}
            <section className="section-container">
                <a className="section-text" href="/catalog">
                    <img className="left-arrow" src={leftArrow} />
                    <p> Volver al catálogo</p>
                </a>
            </section>
            
            <section className="body">
                {/* Segundo elemento -> Fotografia*/}
                <article className="item1 administration-photo">
                    <img className="main-img" alt="Imagen de la loteria" src={example}/>
                    <div className="information-container">
                        <div className="information-text">
                            {/* Campo de texto izquierdo */}
                            <div className="information-left">
                                <h1>Administración de prueba</h1>
                                <div className="ubi">
                                    <img className="ubi-img" src={ping}/>
                                    <p> Calle de prueba</p>
                                </div>
                            </div>
                            <div className="information-right">
                                <p>Precio del traspaso</p>
                                <h1> 175.000 €</h1>
                            </div>
                        </div>
                        {/* Contenedor con las cards de estado */}
                        <div class="cards">
                            <Card 
                                title="Ventas anuales" 
                                subtitle="1.050.000 €" 
                                type="sales"
                                icon={trendArrow}
                            />

                            <Card 
                                title="Superficie" 
                                subtitle="40 m²" 
                                type="surface" 
                                icon={ruler}
                            />

                            <Card 
                                title="Nº Administración" 
                                subtitle="11" 
                                type="administration"
                                icon={shop}
                            />
                            <Card 
                                title="Comunidad" 
                                subtitle="Castilla y León" 
                                type="community" 
                                icon={mapPin}
                            />
                        </div>
                        <div className="description">
                            <h1>Descripción</h1>
                            <p>
                                Aqui iría una breve descripción de la administración guardada en la base de datos. Como por ejemplo: Ubicada en la principal calle comercial de Sevilla. 
                                Local acogedor con buena climatización. Ideal para primer negocio en el sector. Ventas estables durante todo el año.
                            </p>
                        </div>
                    </div>
                    

                </article>
                <article className="item2 contact">
                    <form className="form">
                        <div className="form-text-intro">
                            <h1>Solicitar información</h1>
                            <p>Rellena el formulario y nos pondremos en contacto contigo</p>
                        </div>

                        <div className="input-group">
                            <label for="nombre">Nombre completo *</label>
                            <input type="text" name="nombre" id="nombre" className="form-input" placeholder=" " required />
                        </div>

                        <div className="input-group">
                            <label for="email">Email *</label>
                            <input type="email" name="email" id="email" className="form-input" placeholder=" " required />
                        </div>

                        <div className="input-group">
                            <label for="tel">Teléfono</label>
                            <input type="tel" name="tel" id="tel" className="form-input" placeholder=" " />
                        </div>

                        <div className="input-group">
                            <label for="msg">Mensaje</label>
                            <textarea name="msg" id="msg" className="form-input" placeholder="Cuéntanos que te gustaría saber"></textarea>
                        </div>
                        <button className="form-button">Enviar consulta</button>
                    </form>
                </article>
            </section>
        </main>
        <Footer />
    </>
    );
}