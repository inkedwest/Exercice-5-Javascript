// déclaration de la fonction
function multiplyReal() {
      var firstNumber = document.getElementById('firstNumber').value; //type string
      var secondNumber = document.getElementById('secondNumber').value; // type string
      //isNan(parameter) is Not a Number
      // ! NOT//Sinon
      // Condition
      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        // On se sert du modulo pour déterminé si le nombre est à virgule. si le reste est différant de 0 alors c'est un nombre à virgule
        if (Number(firstNumber) % 1 !== 0 && Number(secondNumber) % 1 !== 0) {
          firstNumberInteger = Math.trunc(firstNumber);
          result = firstNumberInteger * secondNumber;
          alert(result);
          
        } else {
          alert('ce sont des nombres entiers');
        }
      } else {
        alert('attention ce ne sont pas des nombres');
      }
    }
