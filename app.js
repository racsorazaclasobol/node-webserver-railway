/********************************************* */
/****    CREAR UN SERVIDOR CON EXPRESS    **** */
/**********************************************/
import express from 'express';
import * as url from 'url';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import hbs from 'hbs';




dotenv.config()
const app = express();
const port = process.env.PORT;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Handlebars (Capitulo 91)
//TODO: require('hbs)
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );


//Servir contenido estático
app.use( express.static( 'public' ) );


app.get('/', (req, res) => { //Para cuando se solicite el dominio raiz 

	res.render('home', { //Gracias a Handlebars esta data llega directamente al directorio views. Capitulo 92
		nombre: 'Oscar Alcázar',
		titulo: 'Curso Node'
	});

})

app.get('/generic', (req, res) => { //Para cuando se solicite la ruta de generic

	res.render('generic', { //Gracias a Handlebars esta data llega directamente al directorio views. Capitulo 92
		nombre: 'Oscar Alcázar',
		titulo: 'Curso Node'
	});
  
})

app.get('/elements', (req, res) => { //Para cuando se solicite la ruta de elements

	res.render('elements', { //Gracias a Handlebars esta data llega directamente al directorio views. Capitulo 92
		nombre: 'Oscar Alcázar',
		titulo: 'Curso Node'
	});
  
})

app.get('*', (req, res) => { //Para cuando se solicite una ruta que no sea ninguna de las establecidas

    res.send('404 | Página no encontrada')
  
})

app.listen(port, () => { 
    console.log("Corriendo en el puerto ", port)
})