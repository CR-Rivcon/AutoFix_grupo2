// Script para menú activo y validación con SweetAlert2

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav.menu .nav-link");

    // Detectar sección visible y activar enlace correspondiente
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
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

    // Validación y manejo de formulario de solicitud
    const formSolicitud = document.getElementById('solicitudForm');
    formSolicitud.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!formSolicitud.checkValidity()) {
            formSolicitud.classList.add('was-validated');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, completa todos los campos requeridos correctamente.'
            });
            return;
        }

        // Si válido, mostrar alerta SweetAlert y resetear form
        Swal.fire({
            icon: 'success',
            title: 'Solicitud enviada',
            text: '¡Tu solicitud de reparación ha sido enviada correctamente!'
        });
        formSolicitud.reset();
        formSolicitud.classList.remove('was-validated');
    });

    // Validación y manejo de formulario de agenda
    const formAgenda = document.getElementById('agendaForm');
    formAgenda.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!formAgenda.checkValidity()) {
            formAgenda.classList.add('was-validated');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, completa todos los campos requeridos correctamente.'
            });
            return;
        }

        // Si válido, mostrar alerta SweetAlert y resetear form
        Swal.fire({
            icon: 'success',
            title: 'Cita agendada',
            text: '¡Tu cita ha sido agendada correctamente!'
        });
        formAgenda.reset();
        formAgenda.classList.remove('was-validated');
    });

    // Opcional: efecto suave en clicks del menú
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetID = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
