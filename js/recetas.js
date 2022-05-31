class Recet{
    constructor(nombre, ingrediente, ingredientes, receta){
        this.nombre=nombre;
        this.ingrediente=ingrediente;
        this.ingredientes=ingredientes;
        this.receta=receta;
    }
}

const recetas =[
    {nombre:'Tortilla de papas' ,ingrediente: ': papa' ,ingredientes: ': 4 Huevos, 3 papas medianas, 1/2 cebolla, Sal, Aceite',receta: 'Cortar las papas en rodajas finas, hervirlas a punto de coccion, pero no para pure. Mientras tanto vamos a cortar la cebolla en julianas. Agregamos las cebollas a una sartén, revolviendo suavemente. Colocar los 4 huevos en un bol con un poco de sal y batirlos bien durante unos minutos. Agregar las papas con cebollas al bol y volver a batir bien hasta que esté todo integrado y unido. Agregamos un chorro de aceite al sarten colocamos a fuego fuerte. Cuando esté bien caliente el aceite, agregamos la mezcla que tenemos en el bol y movemos la sartén agitándola durante 30 segundos. Luego de los 30 segundos vamos a poner el fuego bajo y con una espátula vamos a ir corrigiendo los bordes mientras se va cociendo. Luego vamos a darla vuelta. Para ésto vamos a colocar un plato encima de la sarten y la damos vuelta sin miedo.'},
    {nombre: 'Omelette' ,ingrediente: ': huevo' ,ingredientes: ': Huevo, Un pedacito de queso (en este caso, pero se pueden poner diversas cosas)',receta:'Lo primero que vamos a hacer es romper el huevo en un bol y batirlo con rapidez. Lo primero que vamos a hacer es romper el huevo en un bol y batirlo con rapidez y vamos a volcar nuestro huevo en el centro. Cuando veamos que ya esta un poco cocido por debajo, pero arriba aún está bastante líquido, ese es el momento de agregar lo que quieran de relleno, en este caso, un pedacito de queso fresco de un lado del círculo que está formando nuestro huevo. Vamos a agarrar una espátula y con rapidez vamos a juntar el extremo vacío del huevo con el otro extremo, tapando nuestro pedazo de queso. Lo que resta hacer es dar vuelta nuestro omelette una vez que ya esté bien cocido de un lado para que se cocine bien del otro y listo.' },
    {nombre:'Pure de calabaza cremoso' ,ingrediente: ": Calabaza" ,ingredientes: ': 1.5 kg calabaza, Sal, Pimienta, Aceite de oliva' ,receta: 'Precalentar el horno a 200ºC. Limpiamos las calabazas y las partimos en 2 a lo largo. Retirar la pulpa y las semillas. Llevamos la calabaza a una placa. Condimentamos con sal, aceite de oliva, pimienta. Pinchamos la calabaza con un tenedor y llevamos al horno a unos 200°. Sacar bien toda la pulpa de las calabazas, poniéndola en un bol grande o en el vaso de una batidora. Triturar hasta que quede una textura cremosa y suave.Agregar la manteca, la sal y la pimienta. Seguir aplastando hasta que la manteca se derrita. Agregar el chorro de leche y unir bien. Al final, podés ponerle un chorrito de aceite de oliva encima.' },
    {nombre: 'Causa peruana verde (con atún)',ingrediente: ': atun',ingredientes:': 700g. de papa, 1 ají amarillo, 1 manojo de perejil mediano, 1 limón, Aceite, 2 latas de atún, 1 tomate, 6 aceitunas, 1/2 cebolla, 3 cdas. de mayonesa' ,receta:'Hervir las papas y hacer un puré. Triturar el ají amarillo con el jugo de limón, el perejil y el aceite. Agregar esta mezcla al puré. Refrigerar para endurecer. Para el relleno, deshacer el atún, picar el tomate, las aceitunas y la cebolla y mezclar con la mayonesa. Quedará una pasta. Ponemos una capa de puré, una de la mezcla de atún y por encima, más puré.' },
    {nombre: 'Torrejas de espinaca',ingrediente:': espinaca',ingredientes: ': 2 atados de espinaca, Sal, Pimienta, ½ manzana rallada, 2 cucharadas de harina, Un poco de queso azul, Nueces, 2 huevos, Pan rallado c/n',receta:'En un recipiente colocar la acelga, sal, pimienta, manzana rallada e ir mezclando. Agregar la harina y continuar revolviendo todo. Por último incorporar el queso azul y las nueces. Mezclar todo y refrigerar en el congelador por 30 minutos. Una vez pasado este tiempo, con ayuda de una cuchara agarrar la preparación de a poco e ir formando unas bolitas. Pasar cada torreja por huevo revuelto y luego por pan rallado, asegurándose que quede bien bien rebozado. Colocar un poco de aceite en la base de una bandeja para horno e ir poniendo las torrejas de espinaca ahí. Al horno en máximo! Por 15 minutos.' },
];

const formulario= document.querySelector('#buscador');
const boton= document.querySelector('#boton');


const filtrar = ()=> {
    resultado.innerHTML= '';
  const texto = formulario.value.toLowerCase();
  for(let receta of recetas){
    let ingrediente = receta.ingrediente.toLowerCase();
    if(ingrediente.indexOf(texto)!== -1){
        const resultado = document.createElement("div");
        resultado.innerHTML += `
        <h2>${receta.nombre}</h2> 
        <h3>-Ingrediente${receta.ingrediente} </h3>
        <h3>-Ingredientes${receta.ingredientes} </h3>
        <p>- Receta: ${receta.receta}</p>
        `
        document.getElementById("resultado").appendChild(resultado)
    }
  }
  if(resultado.innerHTML===''){
      resultado.innerHTML+=`
      <li>Ingrediente no encontrado</li>
      `
  }
}
let button=document.querySelector('#btn');
const agregarRecet=()=> {
    let nombre= document.querySelector('#nombre').value;
    let ingrediente=document.querySelector('#ingrediente').value;
    let ingredientes= document.querySelector('#ingredientes').value;
    let receta= document.querySelector('#recetaa').value;
    nuevoRecet= new Recet (nombre, ingrediente, ingredientes, receta);
    recetas.push(nuevoRecet);
    
}

button.onclick= (e)=>{
    e.preventDefault()
    agregarRecet()
}


boton.addEventListener("click" , filtrar)
buscador.addEventListener('keyup', filtrar)
filtrar();

$(function(){
    $("#btn").click(function(){
    $(".busc").html('Gracias por colaborar, ya puedes buscar tu receta en el buscador')
    });
}
)