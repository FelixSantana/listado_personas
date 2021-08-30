const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Maria', 'Esparza')
];

function mostrarPersonas(){
    console.log('mostrando personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona)
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML= texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        alert('No hay informacion para agregar\nPor favor, rellena los campos');
    }
}