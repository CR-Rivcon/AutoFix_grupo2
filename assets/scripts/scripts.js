// Script para menú activo, scroll suave, y validación con SweetAlert2
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#menuLinks .nav-link");

    // Detectar sección visible y activar el enlace correspondiente en el menú
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para altura del menú fijo
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });

    // Validación y manejo de envío del formulario de solicitud de reparación
    const formSolicitud = document.getElementById('solicitudForm');
    formSolicitud.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir envío por defecto
        event.stopPropagation();

        // Verificar si el formulario es válido (Bootstrap)
        if (!formSolicitud.checkValidity()) {
            formSolicitud.classList.add('was-validated');
            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos requeridos correctamente.'
            });
            return;
        }

        // Si es válido, mostrar alerta de éxito
        Swal.fire({
            icon: 'success',
            title: 'Solicitud enviada',
            text: '¡Tu solicitud ha sido enviada correctamente!'
        });

        // Limpiar formulario
        formSolicitud.reset();
        formSolicitud.classList.remove('was-validated');
    });

    // Validación y manejo de envío del formulario de agenda de cita
    const formAgenda = document.getElementById('agendaForm');
    formAgenda.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Verificar validez
        if (!formAgenda.checkValidity()) {
            formAgenda.classList.add('was-validated');
            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos',
                text: 'Por favor, completa todos los campos requeridos correctamente.'
            });
            return;
        }

        // Mostrar mensaje de éxito
        Swal.fire({
            icon: 'success',
            title: 'Cita agendada',
            text: '¡Tu cita ha sido agendada correctamente!'
        });

        // Limpiar formulario
        formAgenda.reset();
        formAgenda.classList.remove('was-validated');
    });

    // Efecto suave al hacer clic en los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetID = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
