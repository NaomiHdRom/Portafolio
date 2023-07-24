let app = document.getElementById('Escuela');

let typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Ingeniería Mecatrónica / Facultad de Ingeniería UNAM')
  .pauseFor(1000)
  .deleteChars(30)
  .pauseFor(1000)
  .start();




