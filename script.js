// Manejo de Registro
document.getElementById('clienteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telf = document.getElementById('whatsapp').value;
    const tuNumero = "584129330204"; 

    const mensaje = `Hola! Soy ${nombre}. Me registré en el curso de Importaciones.%0A` +
                    `Correo: ${correo}%0AWhatsApp: ${telf}`;

    window.open(`https://wa.me/${tuNumero}?text=${mensaje}`, '_blank');
    document.getElementById('registro-section').classList.add('hidden');
    document.getElementById('pago-section').classList.remove('hidden');
});

// Desbloqueo del Curso
function desbloquearCurso() {
    const pass = document.getElementById('codigoAcceso').value;
    if (pass === "IMPORTA2026.") {
        document.getElementById('pago-section').classList.add('hidden');
        document.getElementById('curso-content').classList.remove('hidden');
    } else {
        document.getElementById('errorMsg').innerText = "Código inválido. Pídelo por WhatsApp.";
    }
}

// Lógica de Acordeón
function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const isVisible = content.style.display === "block";
    document.querySelectorAll('.accordion-content').forEach(el => el.style.display = "none");
    content.style.display = isVisible ? "none" : "block";
}

// Actualizar Barra de Progreso
function actualizarProgreso() {
    const total = document.querySelectorAll('.clase-check').length;
    const completadas = document.querySelectorAll('.clase-check:checked').length;
    const porcentaje = Math.round((completadas / total) * 100);
    
    const bar = document.getElementById('progressBar');
    bar.style.width = porcentaje + "%";
    bar.innerText = porcentaje + "%";

    if (porcentaje === 100) {
        document.getElementById('certificado-area').classList.remove('hidden');
    }
}