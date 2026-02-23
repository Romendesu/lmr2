import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import SearchBar from "../../components/catalog/SearchBar";
import RegionFilter from "../../components/catalog/RegionFilter";
import OpportunityCard from "../../components/global/OpportunityCard"
import example from "../../assets/img/example.jpg"
import "./index.css"


export default function Catalog () {
    return (
        <>
            <Header />
            <main className="main">
                <section className="introduction-catalog">
                    <div className="content-wrapper">
                        <h1>Catálogo de traspasos</h1>
                        <p>
                            Explora todas las administraciones de lotería disponibles en España. Filtra por <br />
                            comunidad autónoma para encontrar tu oportunidad ideal.
                        </p>
                    </div>
                </section>

                <section className="catalog-body">
                    <div className="catalog-container">
                         <SearchBar />
                         <RegionFilter />
                    </div>
                </section>

                <section className="results">
                    <p>[numero] Administraciones encontradas</p>
                    <div className="founded-administrations">
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
    );
}