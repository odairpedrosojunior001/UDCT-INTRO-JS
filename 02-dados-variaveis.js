
// manipulação variaveis e strings
var num1 = 30
var num2 = 7
console.log("Tenho " + (num1 + num2) + " anos de idade!!!");


// index
var nome = "James";
console.log(nome[0]);
console.log(nome[4]);
console.log(nome[3]);
console.log(nome[2-1]);
console.log( "O " + nome + " tem " + (num1+num2) + " anos de idade!!");

// scape de strings - aspas dentro da string em js:

var frase  = "Olá Odair , \"o que parece \", ocorrer ?";
console.log ( frase);

//comparando strings : para strings importa se as letras são maiusculas ou minusculas;

var yes1 = "Yes";
var yes2 = "yes";
var p1 = "green";
var p2 = "blue";
var p3 = "Green"
console.log(yes1==yes2);
console.log(yes1!=yes2);
console.log(p1>p2);
console.log(p1>p3);

// string com a comida predileta
console.log ("Parmeggiana ");

// Conserte a expressão do lado correto para que seja = True
// "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

var exp1 = "All STRINGS are CrEaTED Equal";
var exp2 = "All Strings are CrEaTeD Equal";
console.log(exp1==exp2);

//Construa uma única string que se assemelha à seguinte piada:
// Why couldn't the shoes go out and play?
// They were all "tied" up!

var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!";
console.log(joke);

//Construa uma string utilizando concatenação, por meio da combinação das linhas deste famoso poema haiku de Yosa Buson:

//Blowing from the west

//Fallen leaves gather

//In the east.
var haiku = "Blowing from the west\n\nFallen leaves gather\n\nIn the east.";
console.log(haiku);












