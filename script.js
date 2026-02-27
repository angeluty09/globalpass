document.getElementById('clienteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura de datos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telf = document.getElementById('whatsapp').value;

    const tuNumero = "584128330204";

    // El mensaje debe usar estas comillas invertidas ``
    const mensaje = `¡Hola! Soy ${nombre}. Me registré en la web.
Correo: ${correo}
WhatsApp: ${telf}
Quiero pagar el curso.`;

    // ABRIR WHATSAPP (Aquí estaba el error del paréntesis)
    window.open(`https://wa.me/${tuNumero}?text=${encodeURIComponent(mensaje)}`, '_blank');

    // Pasar a sección de pago
    document.getElementById('registro-section').classList.add('hidden');
    document.getElementById('pago-section').classList.remove('hidden');
});

function desbloquearCurso() {
    const pass = document.getElementById('codigoAcceso').value;
    const correcto = "IMPORTA2026"; // Tu código actualizado

    if (pass === correcto) {
        document.getElementById('pago-section').classList.add('hidden');
        document.getElementById('curso-content').classList.remove('hidden');
    } else {
        document.getElementById('errorMsg').innerText = "Código inválido.";
    }
}