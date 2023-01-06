//Servir contenido estático
app.use( express.static( 'public' ) );


app.get('/', (req, res) => { //Para cuando se solicite el dominio raiz 

  res.sendFile( __dirname + '/public/index.html')

})

app.get('/generic', (req, res) => { //Para cuando se solicite la ruta de generic

    res.sendFile( __dirname + '/public/generic.html')
  
})

app.get('/elements', (req, res) => { //Para cuando se solicite la ruta de elements

    res.sendFile( __dirname + '/public/elements.html')
  
})

app.get('*', (req, res) => { //Para cuando se solicite una ruta que no sea ninguna de las establecidas

    res.send('404 | Página no encontrada')
  
})

app.listen(port, () => { 
    console.log("Corriendo en el puerto ", port)
})





/********************************************* */
/****      CREAR UN SERVIDOR CON NODE     **** */
/**********************************************/

/*
import http from 'http';

http.createServer( ( req, res ) => { //Creamos el servidor

    res.write('Hola Mundo'); //Escribimos en pantalla

    res.end(); //Le decimos que ya terminamos de procesar y que muestre lo escrito

} )
.listen( 8080 ); //Indicamos el puerto al que estará escuchando

console.log( 'Escuchando el puerto: ', 8080 )
*/