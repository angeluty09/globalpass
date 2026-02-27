document.getElementById('clienteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura de datos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telf = document.getElementById('whatsapp').value;

    // CONFIGURA TU TELÉFONO AQUÍ (Sin el +)
    const tuNumero = "+584129330204"; 

    // Mensaje para WhatsApp
    const mensaje = Hola! Soy ${nombre}. Acabo de registrarme en la web de Importaciones. %0A +
                    Correo: ${correo} %0A +
                    WhatsApp: ${telf} %0A +
                    Quiero los datos para pagar el curso y recibir mi código.;

    // Abrir WhatsApp
    window.open(https://wa.me/${tuNumero}?text=${mensaje}, '_blank');

    // Pasar a sección de pago
    document.getElementById('registro-section').classList.add('hidden');
    document.getElementById('pago-section').classList.remove('hidden');
});

function desbloquearCurso() {
    const pass = document.getElementById('codigoAcceso').value;
    const correcto = "IMPORTA2026."; // TU CÓDIGO SECRETO
    
    if (pass === correcto) {
        document.getElementById('pago-section').classList.add('hidden');
        document.getElementById('curso-content').classList.remove('hidden');
    } else {
        document.getElementById('errorMsg').innerText = "Código inválido. Pídelo por WhatsApp.";
    }
}
