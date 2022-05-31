function login(){
    let user, pass;

    user=document.getElementById("usuario").value;
    pass=document.getElementById("contraseña").value;

    if(user !== "" && pass !== ""){
        window.location="/index.html";

    }else{
    const novalido=document.createElement("div");
    novalido.innerHTML+=`
    <p>Ingrese un usuario o conreaseña valida</p>`
    document.getElementById("novalido").appendChild(novalido)
    }
}
