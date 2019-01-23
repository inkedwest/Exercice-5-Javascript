function multiplyReel() {
      var firstNumber = document.getElementById('firstNumber').value; //type string
      var secondNumber = document.getElementById('secondNumber').value; // type string
      //isNan(parameter) is Not a Number
      // ! NOT
      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        if (Number(firstNumber) % 1 !== 0 && Number(secondNumber) % 1 !== 0) {
          a1 = Math.trunc(firstNumber);
          a2 = secondNumber;
          result = a1 * a2;
          alert(result);
        } else {
          alert("ce ne sont pas des nombre entiers");
        }
      } else {
        alert("attention ce ne sont pas des nombres");
      }
    }