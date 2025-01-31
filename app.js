// Crear un array para almacenar nombres
const listaAmigos = [];

// Implementar una función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Agregar el nombre a la lista de amigos
    listaAmigos.push(nombre);
    actualizarLista(); // Actualizar la lista visual
    input.value = ""; // Limpiar el campo de entrada
}

// Implementar una función para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Implementar una función para sortear amigos
function sortearAmigo() {
    // Verificar si hay nombres en la lista antes de sortear
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }
    
    // Seleccionar un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado en la pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</li>`;
    
    // Limpiar la lista de amigos después del sorteo
    listaAmigos.length = 0;
    actualizarLista();
}
