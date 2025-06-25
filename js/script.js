$(document).ready(function () {
  const images = [
    'img/Amanita_Muscaria.png',
    'img/Boletus_Edulis.jpg',
    'img/Cordyceps.jpg'
  ];
  let currentIndex = 0;

  $('.project-img').click(function () {
    currentIndex = parseInt($(this).data('index'));
    $('#modal-img').attr('src', images[currentIndex]);
    $('#imageModal').modal('show');
  });

  $('#prev-btn').click(function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    $('#modal-img').attr('src', images[currentIndex]);
  });

  $('#next-btn').click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    $('#modal-img').attr('src', images[currentIndex]);
  });
});

// Validación de formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const mensaje = document.getElementById('mensajeEnviado');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
      form.reset();
      mensaje.classList.remove('d-none');
    } else {
      form.classList.add('was-validated');
    }
  });
});
