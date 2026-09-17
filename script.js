//Campos de imput do formulario pelo id

let nome = document.getElementById('text'); // Campo de texto
let email = document.getElementById('email'); //Campo de email
let number = document.getElementById('number'); //Campo numerico
let date = document.getElementById('date'); //Campo da data
let botao = document.getElementById('botao'); //Botao ENVIE

//Elementos onde os valores digitados sao exibidos

let h2 = document.getElementById('textinsert'); // exibe nome
let h3 = document.getElementById('emailinsert'); // exibe email
let h4 = document.getElementById('numberinsert'); // exibe numero
let h5 = document.getElementById('dateinsert'); // exibe data

//Pega valores digitados e insere nos elementos h2,h3,h4,h5

function inserir(){
   h2.innerHTML = nome.value
   h3.innerHTML = email.value
   h4.innerHTML = number.value
   
   let partes = date.value.split('-'); //seprara "ano-mes-data"
   let ano = partes [0]; // pega o primeiro pedaço -> ano
   let mes = partes [1]; // pega o segundo pedaço -> mes
   let dia = partes [2]; // pega o terceiro pedaço -> dia   
   
   h5.innerHTML = dia + "/" + mes + "/" + ano; //mostra dia/mes/ano
}

botao.addEventListener('click', inserir)