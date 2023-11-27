const form = document.querySelector('form');
const btnMostrarGeneracion = document.getElementById('mostrarGeneracion'); 
const btnMayorDeEdad = document.getElementById('mayorDeEdad');
const btnMostrarDatos = document.getElementById('mostrarDatos');

const nombreApellidoRegex = /^[A-Za-z]+( [A-Za-z]+)?$/;

class Persona{
  constructor(nombre, dni, anioNacimiento, peso, altura, edad, sexo){
    this.nombre = nombre;
    this.dni = dni;
    this.anioNacimiento = anioNacimiento;
    this.peso = peso; 
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
  }

  esMayorDeEdad(){
    (this.edad >= 18)
      ? alert(`${this.nombre} eres Mayor de Edad`)
      : alert(`${this.nombre} eres Menor de Edad`);
  }

  mostrarGeneracion(){
    if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
      alert(`${this.nombre} perteneces a la GENERACIÓN SILENT GENERATION donde su Rasgo característico es AUSTERIDAD`);
    }
    if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
      alert(`${this.nombre} perteneces a la GENERACIÓN BABY BOOM donde su Rasgo característico es AMBICIÓN`);    
    }
    if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
      alert(`${this.nombre} perteneces a la GENERACIÓN X donde su Rasgo característico es OBSESIÓN POR EL ÉXITO`);
    }
    if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
      alert(`${this.nombre} perteneces a la GENERACIÓN Y donde su Rasgo característico es FRUSTRACIÓN`);    
    }
    if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
      alert(`${this.nombre} perteneces a la GENERACIÓN Z donde su Rasgo característico es IRREVERENCIA`);    
    }
  }

  mostrarDatos(){
    alert(`Tus datos:
            - Nombre: ${this.nombre}
            - DNI: ${this.dni}
            - Año de nacimiento: ${this.anioNacimiento}
            - Peso: ${this.peso} kg
            - Altura: ${this.altura} cm
            - Edad: ${this.edad} años
            - Sexo: ${this.sexo}`);                   
  }
}

objetoPersona = {
  nombre: "",
  dni: "",
  anioNacimiento: "",
  peso: "",
  altura: "",
  edad: "",
  sexo: "",
}

const cargarDatos = () => {
  objetoPersona.nombre = document.getElementById('nombre').value;
  objetoPersona.dni = document.getElementById('dni').value;
  objetoPersona.anioNacimiento = document.getElementById('anioNacimiento').value;
  objetoPersona.peso = document.getElementById('peso').value;
  objetoPersona.altura = document.getElementById('altura').value;
  objetoPersona.edad = document.getElementById('edad').value;
  const sexoH = document.getElementById('hombre');
  const sexoM = document.getElementById('mujer');

  (sexoH.checked) ? objetoPersona.sexo = "Hombre" : (sexoM.checked) ? objetoPersona.sexo = "Mujer" : null;
}

const validarDatos = () =>{
  let {nombre, dni, anioNacimiento, peso, altura, edad, sexo} = objetoPersona;

  if(nombreApellidoRegex.test(nombre) && !isNaN(dni) && !isNaN(anioNacimiento) && (anioNacimiento >= 1930 && anioNacimiento <= 2010) && !isNaN(peso) && !isNaN(altura) && !isNaN(edad)){
    return new Persona(nombre, dni,anioNacimiento, peso, altura, edad, sexo);
  }else{
    alert(`Uno o más datos no son válidos`);
  }
}

const enviarForm = (e) => {
  e.preventDefault();
  cargarDatos()
  const unaPersona = validarDatos();
  
  if(unaPersona) {
    alert(`Tus datos se guardaron con éxito`);
    objetoPersona = unaPersona;
    form.reset();
  }
};

form.addEventListener('submit', enviarForm);

btnMostrarGeneracion.addEventListener('click', () => {
  objetoPersona.mostrarGeneracion();
});

btnMayorDeEdad.addEventListener('click', () => {
  objetoPersona.esMayorDeEdad();
});

btnMostrarDatos.addEventListener('click', () => {
  objetoPersona.mostrarDatos();
});