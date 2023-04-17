const menuBtn = document.querySelector('.menu-icon');

menuBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  this.querySelectorAll('div').forEach((e) => e.classList.remove('no-animation'));;
});
