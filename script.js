let a = document.getElementById("num1").value;
let b = document.getElementById("num2").value;
let c = document.getElementById("num3").value;


function calcular() {    

    let msg = " ";

    if (a<b+c && b<a+c && c<a+b) {
        if (a==b && b==c) {
            msg = 'O Triângulo é Equilátero!';
        console.log('TRIANGULO EQUILÁTERO');
      }
        else {
        if (a==b || a==c || c==b) {
            msg = 'O Triângulo é Isósceles!';
          console.log('TRIANGULO ISÓSCELES');
        }
        else {
            msg = 'O Triângulo é Escaleno!';
        console.log('TRIANGULO ESCALENO');}
        }
        }
        else {
            msg = 'Não é um Triângulo!';
        console.log('NÃO É UM TRIANGULO.');
        }   
        
    resultado.innerHTML = msg;   
    
}