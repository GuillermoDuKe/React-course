//  VAR IS NOT USED ON REACT

var car = 'Toyota'

const name = 'Guillermo';
console.log(name);

if (true) {
    // INSIDE THIS IF THE CONST NAME ONLY EXISTS HERE
    // LET AND CONST HAVE A BLOCK SCOPE
    const name = 'Leon'
    console.log(name);
    console.log(car);
}

console.log(name);

function ejemplo() {
    // VAR HAS A FUNCTION SCOPE AND IT IS AVALIABLE IN ALL THIS FUNCTION
    if (true) {
      var nombre = 'Goku';
      console.log(nombre); // 
    }
    console.log(nombre); 
  }