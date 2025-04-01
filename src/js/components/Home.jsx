import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
let cards = [
	{title:"Gestor de Tareas Inteligente", description:"Optimiza tu tiempo como nunca antes. Esta aplicación te permite organizar tus actividades diarias de forma dinámica, priorizando las tareas más importantes mediante algoritmos de inteligencia artificial. Mantente enfocado en lo que realmente importa."},
	{title:"Explorador de Recetas Globales", description:"Descubre los sabores del mundo desde tu pantalla. Encuentra recetas internacionales únicas según tus ingredientes disponibles y preferencias. Una herramienta para convertir tu cocina en un rincón del mundo."},
	{title:"Analizador de Datos Deportivo", description:"Transforma estadísticas en estrategias ganadoras. Diseñado para entrenadores y fanáticos, este programa analiza estadísticas deportivas en tiempo real, ofreciendo insights clave para mejorar el rendimiento del equipo."},
	{title:"Asistente de Finanzas Personales", description:"Toma el control de tus finanzas con facilidad. Planifica tus gastos, establece metas de ahorro y visualiza tu progreso con gráficos interactivos. Una herramienta esencial para alcanzar la estabilidad económica."},

]

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <Navbar/>
			<Jumbotron/>
		<div className="container">
			<div className="row">
				
				{
					cards.map((card,index) =>{
						return <Card title={card.title} description={card.description}/>
					})
					
				}
			</div>

		</div>
		<Footer/>
		</div>
	)
}	

	


export default Home;