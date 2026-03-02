document.getElementById('clienteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value; [cite: 10]
    const correo = document.getElementById('correo').value; [cite: 10]
    const telf = document.getElementById('whatsapp').value; [cite: 10]
    const tuNumero = "584129330204"; [cite: 10]

    const mensaje = `Hola! Soy ${nombre}. Acabo de registrarme en la web.%0A` + [cite: 11]
                    `Correo: ${correo}%0AWhatsApp: ${telf}`; [cite: 11]

    window.open(`https://wa.me/${tuNumero}?text=${mensaje}`, '_blank'); [cite: 11]
    document.getElementById('registro-section').classList.add('hidden'); [cite: 11]
    document.getElementById('pago-section').classList.remove('hidden'); [cite: 11]
});

function desbloquearCurso() {
    const pass = document.getElementById('codigoAcceso').value; [cite: 12]
    if (pass === "IMPORTA2026.") { [cite: 12]
        document.getElementById('pago-section').classList.add('hidden'); [cite: 14]
        document.getElementById('curso-content').classList.remove('hidden'); [cite: 14]
    } else {
        document.getElementById('errorMsg').innerText = "Código inválido. Pídelo por WhatsApp."; [cite: 14]
    }
}

function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const isVisible = content.style.display === "block";
    document.querySelectorAll('.accordion-content').forEach(el => el.style.display = "none");
    content.style.display = isVisible ? "none" : "block";
}

function actualizarProgreso() {
    const total = document.querySelectorAll('.clase-check').length;
    const checks = document.querySelectorAll('.clase-check:checked').length;
    const porcentaje = Math.round((checks / total) * 100);
    
    const bar = document.getElementById('progressBar');
    bar.style.width = porcentaje + "%";
    bar.innerText = porcentaje + "%";

    if (porcentaje === 100) {
        document.getElementById('certificado-area').classList.remove('hidden');
    }
}