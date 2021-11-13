//Código del cuadadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

//Código del triángulo
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function aeraTriangulo(base, altura) {
  return (base + altura) / 2;
}
console.groupEnd();

//Código del Circulo
console.group("Circulo");
const PI = Math.PI;
function diametroCirculo(radio) {
  return radio * 2;
}
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return radio * radio * PI;
}
console.groupEnd();

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  const txtPerimetro = document.getElementById("perimetroCuadrado");
  txtPerimetro.value = perimetro;
};

const calcularAreaCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  const txtArea = document.getElementById("areaCuadrado");
  txtArea.value = area;
};

const calcularPerimetroTriangulo = () => {
  const input1 = document.getElementById("InputTriangulo1");
  const lado1 = input1.value;
  const input2 = document.getElementById("InputTriangulo2");
  const lado2 = input2.value;
  const input3 = document.getElementById("InputTriangulo3");
  const base = input3.value;

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  const txtPerimetro = document.getElementById("perimetroTriangulo");
  txtPerimetro.value = perimetro;


};

const calcularAreaTriangulo = () =>{
    const input = document.getElementById('InputTriangulo4');
    const altura = input.value;
    const input3 = document.getElementById("InputTriangulo3");
    const base = input3.value;

    const area = aeraTriangulo(base, altura);
    const txtArea = document.getElementById("areaTriangulo");
     txtArea.value = area;


}

const calcularPerimetroCirculo = () =>{
    const input = document.getElementById('InputCirculo');
    const radio = input.value;
    //const diametro = diametroCirculo(radio);

    const perimetro = perimetroCirculo(radio);
    const txtPerimetro = document.getElementById("perimetroCirculo");
    txtPerimetro.value = perimetro;

}

const calcularAreaCirculo = () =>{
    const input = document.getElementById('InputCirculo');
    const radio = input.value;

    const area = areaCirculo(radio);
    const txtArea = document.getElementById("areaCirculo");
    txtArea.value = area;

}