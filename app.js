// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Se crean las variables para guardar el nombre de los amigos
const inputAmigo=document.getElementById("amigo")
//Se crean el arreglo para cargar la lista de amigos ingresados
const listaAmigos=[];
//Se crea variable para mostrar la lista de amigos en pantalla
const mostrarListaAmigos= document.getElementById("listaAmigos")
//Se crea varible para mostrar el resultado del amigo sorteado
const mostrarResultado=document.getElementById("resultado");

//Se crea la funcion para agregar amigos
function agregarAmigo(){

    // Se agregar una validacion para evitar que el valor a ingresar este vacio
    if (inputAmigo.value==""){
        alert("Debes ingresar un nombre")
    }
    //Se agregan amigos al arreglo
    listaAmigos.push(inputAmigo.value);
    //Se muestran los amigos ingresados
    mostrarListaAmigos.innerHTML+=`<li>${inputAmigo.value}</li>`;
};

//Se crea la funcion para elegir el amigo secreto
function sortearAmigo(){
    //Se selecciona aleatoriamente un amigo del arreglo
    const random = Math.floor(Math.random()*listaAmigos.length);
    const amigoSecreto=listaAmigos[random];
    //Y se muestra el resultado obtenido
    mostrarResultado.innerHTML=`<li>El amigo secreto es: ${amigoSecreto}</li>`;
}