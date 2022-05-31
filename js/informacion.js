const boton = document.querySelector("#btn");
const container = document.querySelector("#container");

const verRecetas = ()=>{
    fetch("/json/datos.json")
        .then(response =>response.json())
        .then(result=>{
            let recetas=result;
            recetas.forEach(user=>{
                container.innerHTML +=`
                <h3>${user.verdura} ${user.gramos} calorias por cada 100 gramos. </h3>
                `
            })
        })
        .catch(error=>console.log(error))
}

boton.onclick=()=>{
    verRecetas();
}
const boton1 = document.querySelector("#btn1");
const container1 = document.querySelector("#container1");

const verRecetas1 = ()=>{
    fetch("/json/frutas.json")
        .then(response =>response.json())
        .then(result=>{
            let receta=result;
            receta.forEach(user=>{
                container1.innerHTML +=`
                <h3>${user.frutas} ${user.gramo} calorias por cada 100 gramos. </h3>
                `
            })
        })
        .catch(error=>console.log(error))
}

boton1.onclick=()=>{
    verRecetas1();
}
const boton2 = document.querySelector("#btn2");
const container2 = document.querySelector("#container2");

const verRecetas2 = ()=>{
    fetch("/json/lacteos.json")
        .then(response =>response.json())
        .then(result=>{
            let receta=result;
            receta.forEach(user=>{
                container2.innerHTML +=`
                <h3>${user.lacteo} ${user.gram} calorias por cada 100 gramos. </h3>
                `
            })
        })
        .catch(error=>console.log(error))
}

boton2.onclick=()=>{
    verRecetas2();
}