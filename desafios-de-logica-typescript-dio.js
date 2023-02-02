// parte 1 - Fundamentos de Typescript

// Q1 - Entrasda e saida pulando nomes
let nomes = new Array(10)
		
for(let i=0 ; i<10; i++)
    nomes[i] = gets();
			
print(nomes[ 2 ])
print(nomes[ 6 ])
print(nomes[ 8 ])

// Q2 - Calculo Simples

let valores1 = gets().split(" ");
let valores2 = gets().split(" ");

let codigo1 = parseInt(valores1[0]);
let numero1 = parseInt(valores1[1]);
let valorUnitario1 = parseFloat(valores1[2]);

// TODO:  Retorne o valor total a pagar da compra
let codigo2 = parseInt(valores2[0]);
let numero2 = parseInt(valores2[1]);
let valorUnitario2 = parseFloat(valores2[2]);
let soma = (numero1 * valorUnitario1) + (numero2 * valorUnitario2)   ;

print('VALOR A PAGAR: R$ ' + soma.toFixed(2));


// Q3 - A idade de Magali


let M = parseInt(gets());
let A = parseInt(gets());
let B = parseInt(gets());

// TODO: Retorne um número inteiro, representando a idade do filho mais velho
let C = M - (A+B);

let res = A;
if ( res <  B ) res =   B ;
if ( res < C  ) res =  C  ;
	
print(  res   );



// parte 2 - Introducao ao React com TS

// Q1 - Array Pares


var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];

//TODO: Complete o laço de repetição:
for (let i = 0; i < array.length; i++){
//TODO: Agora crie uma condição que verifique o ARRAY e imprima APENAS os números pares.
  if( array[i] % 2 === 0 ){
    print(array[i]);
  }
}

// Q2 - Teorema da divisao Euclidiana   

let l = gets().split(" ");
const a = parseInt(l[0]);
const b = parseInt(l[1]);

q = parseInt(a / b);

r = a - b * q;

// TODO: Imprima o quociente q seguido pelo resto r da divisão de a por b

if (r < 0) {
  r += Math.abs(b);
  
  q =   (a - r) / b      ;    //escreva sua lógica aqui
}

print(q + " " + r);


// Q3 - Coordenadas de um ponto


var line = gets().split(" ");
let X = parseFloat(line[0]);
let Y = parseFloat(line[1]);

// TODO: Retorne o quadrante em que o ponto se encontra

 if (X === 0 && Y === 0) {
    print("Origem");
} 
else if (X === 0 && Y !== 0) {
    print(  "Eixo Y"   );
} 
else if (X !== 0 && Y === 0) {
    print(   "Eixo X"   );
} 
else if (X > 0 && Y > 0) {
    print(    "Q1"  );
} 
else if (X < 0 && Y > 0) {
    print(  "Q2"    );
} 
else if (X < 0 && Y < 0) {
    print("Q3");
} 
else if (X > 0 && Y < 0) {
    print("Q4");
}


// parte 3 - Conceitos Avançados de React com Typescript

// Q1 - Reveillon Copacabana, mesas, a soma da quantidade de pedidos de cada pessoa.
let T = parseInt(gets());
let N;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

while (T !==   0   ) {
    for (let i = 1; i <= T; i++) {
        N = parseInt(gets());
        if (N % 2 !==0)
            print(     (2 * N)  - 1      );
        else 
        print(    (2 * N) - 2       );
    }
    T = parseInt(gets());
}

// Q2 - Pink e Cerebro

// TODO: Retorne a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista
let t = gets();
let numeros = gets().split(' ');
let multiplos=0;
for (let i = 2; i < 6; i++) {
    numeros.forEach(numero => {
        if((numero % i) === 0       ) {
            multiplos++;
        }
    })
    print(  multiplos, "Multiplo(s) de", i                        )
    multiplos = 0;
}

// Q3 - Quadrado e ao Cubo
let linhas = parseInt(gets());

//TODO: Complete os espaços em branco com uma solução possível para o problema.

let limit = parseInt(gets());

for (let i = 1; i <= linhas; i++) {
  let X =(   i   );
  let Y = (  i *  i  );

  print(  X, Y, X * Y    );
}



// parte 4 - Introdução ao Node com TS

// Q1 - Dragao Berrord
var s = gets().split(" ");

//TODO: imprima uma única linha com o número visitantes que podem passear na montanha-russa

let n = parseInt(           s[0]);
let min = parseInt(      s[1]);
let     max     = parseInt(     s[2]);

let altura, conta = 0;
for (let x=0 ; x<n ; x++) {
    altura = parseInt(gets());               
    if(altura >=     min     &&         altura <= max)
        conta++;
}
print(        conta  );


// Q2 - Idade em Dias

let totalDeDias = parseInt(gets());

// TODO: Calcular a quantidade de anos a patir do 'totalDeDias'.
let qtdAnos = 0;
qtdAnos=Math.floor(totalDeDias / 365);
totalDeDias = totalDeDias % 365;

// TODO: Calcular a quantidade de meses a patir do 'totalDeDias' atualizado.
let qtdMeses= 0;
qtdMeses=Math.floor(totalDeDias / 30);
totalDeDias = totalDeDias % 30;                           

// Impressão do resultado usando interpolação de strings.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
print(`${qtdAnos} ano(s)\n ${qtdMeses} mes(es)\n ${totalDeDias} dia(s)\n`);



// Q3 - Distância entre dois pontos

let p1 = gets().split(" ");
let p2 = gets().split(" ");

let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);
let x2=parseFloat(p2[0]);
let y2=parseFloat(p2[1]);

// TODO: Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

let distancia=(((x2-x1)**2) + ((y2-y1)**2));
     
print(Math.sqrt(distancia).toFixed(4));





//  parte 5 - Conceitos Avançados de Node com TS

// Q1 - Duplicando Zero
let dup = parseInt(gets()); 

let arr = new Array(dup); 
let arr2 = [];
for (let i = 0; i < dup; i++){ 

    arr[i] = parseInt(gets()); 
    
    if(arr[i] !== 0){
      arr2.push(arr[i]);
    }
    else{
      arr2.push(arr[i]);
      i+=1;
      if( i !==dup ){
        arr[i] = 0;
        arr2.push(arr[i]);
      }
    }
}    
 
// TODO: Retorne uma saída com os zeros devidamente duplicados
print(arr2);



// Q2 - Resto 0 
let lines = gets().split('\n');

let NN = parseInt(lines.shift());
for ( let i = 1; i < 10000; i++) {
 

//TODO: Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

	if (i %  NN==2) print( i );
}



// Q3 - Numeral Romano

s = gets();

const map = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50, 
    "C": 100, 
    "D": 500, 
    "M": 1000
}

function conversor(s, map) {
  let num = 0;
  let cont = 0;
  if(s.length > 0){
    for(let i =0; i < s.length; i++){
      if( s[i] === s[i+1] ) {
        cont++;
      }
      if( cont > 3 ){
        num = 0;
        break;
      }
      else{
        if( map[s[i]] < map[s[i+1]] ){
          num -= map[s[i]];
        }
        else{
          num += parseInt(map[s[i]]);
        }
      }
    }
  }
  print( num );
}
