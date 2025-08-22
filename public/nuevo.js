document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById('formulario');
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('email').value;
        const rolSelect = document.getElementById('rol');
        const rol=rolSelect.options[rolSelect.selectedIndex].text;
        

        
        if (!nombre || !correo || !rol) {
            alert('Por favor, completa todos los campos');
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push({nombre, correo, rol});
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        alert('Usuario registrado con éxito!');
        formulario.reset();
        
       
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);

       
    });
});