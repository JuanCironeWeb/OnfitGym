'use strict'; 


let preguntas = document.querySelectorAll('.ContenedorPregunta');

preguntas.forEach((Pregunta) =>{ 
    Pregunta.addEventListener('click', (parametro) => { 
        console.info(parametro.currentTarget);
        parametro.currentTarget.classList.toggle('activa');
        let respuesta = Pregunta.querySelector('.Respuesta'); 
        let AlturaRespuesta = respuesta.scrollHeight;

        if(!respuesta.style.maxHeight){
            respuesta.style.maxHeight = AlturaRespuesta + 'px';
            console.log(AlturaRespuesta);
            
        }else{ 
            respuesta.style.maxHeight = null;
            
        }
    })
} )