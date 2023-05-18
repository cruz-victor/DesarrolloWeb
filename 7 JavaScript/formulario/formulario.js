// (function() {}())

var formulario=document.getElementById('formulario');
var nombre=formulario.nombre;
var correo=formulario.correo;
var sexo=formulario.sexo;
var terminos=formulario.terminos;

var error=document.getElementById('error');

function validarNombre(e){
    if(nombre.value=='' || nombre.value==null){
        console.log('Completa el nombre');
        
        error.style.display='block';
        error.innerHTML = error.innerHTML+'<li>Porfavor completa el nombre</li>'

        //Detiene el envio del formulario submit
        e.preventDefault();
    }else{
        error.style.display='none';
    }
}

function validarCorreo(e){
    if(correo.value=='' || correo.value==null){
        console.log('Completa el correo');
        
        error.style.display='block';
        error.innerHTML = error.innerHTML+'<li>Porfavor completa el correo</li>'

        //Detiene el envio del formulario submit
        e.preventDefault();
    }else{
        error.style.display='none';
    }
}

function validarSexo(e){

}

function validarTerminos(e){

}

function validarFormulario(e){
    validarNombre(e); 
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
}

formulario.addEventListener('submit',  validarFormulario);