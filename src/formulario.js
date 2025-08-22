// Función para cargar y mostrar los usuarios en la tabla
function cargarUsuarios() {
    const tbody = document.getElementById("tablausuarios");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    // Limpiar la tabla antes de agregar los usuarios
    tbody.innerHTML = '';
    
    usuarios.forEach((usuario, index) => {
        const tr = document.createElement("tr");
        
        // Determinar la clase del badge según el rol
        let badgeClass = "bg-secondary";
        if (usuario.rol === "Admin") badgeClass = "bg-success";
        else if (usuario.rol === "Usuario") badgeClass = "bg-info";
        else if (usuario.rol === "Editor") badgeClass = "bg-warning text-dark";
        
        tr.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td><span class="badge ${badgeClass}">${usuario.rol}</span></td>
            <td class="text-center">
                <button class="btn btn-sm btn-primary me-1">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="eliminarUsuario(${index})">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    // Si no hay usuarios, mostrar mensaje
    if (usuarios.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center">No hay usuarios registrados</td>
            </tr>
        `;
    }
}

// Función para eliminar un usuario
function eliminarUsuario(index) {
    if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.splice(index, 1);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        cargarUsuarios(); // Recargar la tabla
    }
}

// Cargar usuarios cuando la página esté lista
document.addEventListener("DOMContentLoaded", cargarUsuarios);