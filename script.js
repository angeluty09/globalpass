// Manejo del Formulario de Registro
document.getElementById('clienteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telf = document.getElementById('whatsapp').value;
    const tuNumero = "584129330204"; 

    // Uso de backticks (``) para corregir el error de sintaxis previo
    const mensaje = `Hola! Soy ${nombre}. Acabo de registrarme en la web de Importaciones.%0A` +
                    `Correo: ${correo}%0AWhatsApp: ${telf}%0A` +
                    `Quiero los datos para pagar el curso.`;

    window.open(`https://wa.me/${tuNumero}?text=${mensaje}`, '_blank');

    document.getElementById('registro-section').classList.add('hidden');
    document.getElementById('pago-section').classList.remove('hidden');
});

// Función para Desbloquear el Curso
function desbloquearCurso() {
    const pass = document.getElementById('codigoAcceso').value.trim().toUpperCase();
    // Acepta el código con o sin punto final
    if (pass === "IMPORTA2026." || pass === "IMPORTA2026") {
        document.getElementById('pago-section').classList.add('hidden');
        document.getElementById('curso-content').classList.remove('hidden');
        window.scrollTo(0, 0);
    } else {
        document.getElementById('errorMsg').innerText = "Código inválido. Pídelo por WhatsApp.";
    }
}

// Lógica del Sistema de Acordeón
function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const isVisible = content.style.display === "block";
    
    // Cierra todos los videos antes de abrir uno nuevo
    document.querySelectorAll('.accordion-content').forEach(el => el.style.display = "none");
    
    content.style.display = isVisible ? "none" : "block";
}

// Lógica de la Barra de Progreso
function actualizarProgreso() {
    const total = document.querySelectorAll('.clase-check').length;
    const completadas = document.querySelectorAll('.clase-check:checked').length;
    const porcentaje = Math.round((completadas / total) * 100);
    
    const bar = document.getElementById('progressBar');
    bar.style.width = porcentaje + "%";
    bar.innerText = porcentaje + "%";

    // Muestra el botón de certificado al llegar al 100%
    if (porcentaje === 100) {
        document.getElementById('certificado-area').classList.remove('hidden');
    }
}