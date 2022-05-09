import "./styles.css";
function esMultiplo(num1: number, num2: number) {
  if (num1 % num2 === 0) {
    alert("es multiplo");
    return true;
  } else {
    alert("No es multiplo");
    return false;
  }
}

let num1 = Number(prompt("Ingrese primer numero"));
let num2 = Number(prompt("Ingrese otro numero"));
esMultiplo(num1, num2);
