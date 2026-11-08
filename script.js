document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Simula el envío de datos
        const name = document.getElementById('name').value;
        
        // Oculta el formulario y muestra el mensaje
        form.style.display = 'none';
        message.classList.remove('hidden');
        
        console.log(`Solicitud enviada por: ${name}`);
    });
});