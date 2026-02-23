// Componentes a emplear dentro de la pagina web
import ButtonLink from "/src/components/home/ButtonLink.jsx";
import Header from "/src/components/global/Header.jsx";
import Footer from "/src/components/global/Footer.jsx"
import Label from "/src/components/home/Label.jsx";
import StatusCard from "/src/components/home/StatusCard.jsx";
import Card from "/src/components/home/Cards.jsx";
import OpportunityCard from "/src/components/global/OpportunityCard.jsx"

// Assets (SVG)
import "./index.css";
import photo1 from '/src/assets/img/photo1_index.jpg';
import example from '/src/assets/img/example.jpg';
import PeopleIcon from '/src/assets/icons/people.svg';
import ShieldIcon from '/src/assets/icons/shield.svg';
import ThrendIcon from '/src/assets/icons/thrend.svg';
import SearchIcon from '/src/assets/icons/search.svg';
import CircleInfo from '/src/assets/icons/circle-info.svg';
import HandShakeIcon from '/src/assets/icons/hand-shake.svg';
import CheckIcon from '/src/assets/icons/check.svg';

export default function Home() {
  return (
    <>
     <Header />
     <main>
        <Label name="Expertos en traspasos desde (año)" color="green"/>
        <section className="introduction">

            <div className="half">
                <div className="introduction-text">
                    <h1>
                        Tu nueva <br />
                        <strong>administración de lotería</strong><br />
                        te espera
                    </h1>
                    <p>
                        Conectamos compradores y vendedores de administraciones de lotería en toda España.
                        Un proceso seguro, transparente y con asesoramiento profesional.
                    </p>
                </div>
                <div className="button-container">
                    <ButtonLink name="Ver Catálogo" link="/" color="green" size="medium"/>
                    <ButtonLink name="Contáctanos" link="/" size="small" />
                </div>
                <div className="status-cards">
                    <StatusCard icon={ShieldIcon} quantity={"100%"} text={"Proceso seguro"} />
                    <StatusCard icon={PeopleIcon} quantity={"+1300"} text={"Clientes Satisfechos"} />
                    <StatusCard icon={ThrendIcon} quantity={"+500"} text={"Traspasos existosos"} />

                </div>
            </div>
            {/* Segunda mitad de la primera parte del HOME */}
            <div className="half_second">
                <div className="image-container">
                    <div className="image-wrapper">
                        <img className="half_img" src={photo1} alt="Panel" />
                    </div>
                    
                    <div className="floating-label">
                        <div className="green-icon">
                            <img src={ThrendIcon}/>
                        </div>
                        <div className="label-text">
                        <span className="subtitle">Disponibles ahora</span><br></br>
                        <span className="main-title"><strong>(BB.DD) traspasos</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="proccess">
            <Label name="¿Como funciona?" color="green"/>
            <div className="proccess_text">
                <h1>
                    El proceso de traspaso más sencillo
                </h1>
                <p>
                    Hemos simplificado el complejo proceso de adquirir una administración de lotería. <br />
                    Te acompañamos en cada paso, desde la búsqueda inicial hasta la firma del traspaso.
                </p>
            </div>
            <div className="cards_menu">
                <Card 
                step="1" 
                title="Explora el catálogo" 
                description="Navega por nuestra amplia selección de administraciones de lotería disponibles en toda España, filtradas por comunidad autónoma"
                icon={SearchIcon}
                />
                <Card 
                step="2" 
                title="Solicita información" 
                description="Contacta con nosotros para obtener información detallada sobre la administración que te interesa, incluyendo datos financieros y legales"
                icon={CircleInfo}
                />
                <Card 
                step="3" 
                title="Asesoramiento personalizado" 
                description="Nuestro equipo de expertos te guiará durante todo el proceso de traspaso, desde la negociación hasta la firma final."
                icon={HandShakeIcon}
                />
                <Card 
                step="4" 
                title="Cierra tu traspaso" 
                description="Completamos el traspaso con todas las garantías legales, asegurando una transición fluida y sin sorpresas."
                icon={CheckIcon}
                />
            </div>
        </section>
        <section className="main-info">
            <h1>¿Qué es un traspaso de lotería?</h1>
            <p>El traspaso consiste en la cesión de la titularidad y la gestión de la licencia de lotería a un nuevo titular, ya sea persona física o una sociedad.
            <br />Dicha cesión debe ser autorizada previamente por SELAE (Sociedad Estatal de Loterías y Apuestas del Estado).</p>
        </section>
        <section className="selected-oportunities">
            <Label name="Destacados" color="green"/>
            <h1>Oportunidades seleccionadas</h1>
            <div className="oportunity-container">
                <OpportunityCard 
                    state="disponible" 
                    imgUrl={example}
                    name="Administracion de prueba A"
                    location="Córdoba, Andalucía"
                    anualSales="15.000"
                    price="69"
                />
                <OpportunityCard 
                    state="no disponible" 
                    imgUrl={example}
                    name="Administracion de prueba B"
                    location="Córdoba, Andalucía"
                    anualSales="15.000"
                    price="100.000"
                />
                <OpportunityCard 
                    state="no disponible" 
                    imgUrl={example}
                    name="Administracion de prueba C"
                    location="Córdoba, Andalucía"
                    anualSales="15.000"
                    price="8000"
                />
            </div>
        </section>
     </main>
     <Footer />
    </>
  )
}