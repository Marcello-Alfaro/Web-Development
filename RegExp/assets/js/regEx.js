btnVerificarHash = document.querySelector('#verificarHash');
btnVerificarVar = document.querySelector('#verificarVar');
btnVerificarContr = document.querySelector('#verificarContr');
mode = document.querySelectorAll('.mode');
var hashtagText;
var variableText;
var resultado;

for (let i = 0; i < mode.length; i++) {
  document.querySelector('#display1').style.display = 'inline-block';
  mode[i].addEventListener('click', function() {
    mode[0].classList.remove('selected');
    mode[1].classList.remove('selected');
    mode[2].classList.remove('selected');
    this.classList.add('selected');
    if (this.textContent == 'Hashtag') {
      document.querySelector('#display1').style.display = 'inline-block';
      document.querySelector('#display2').style.display = 'none';
      document.querySelector('#display3').style.display = 'none';
    } else if (this.textContent == 'Variable') {
      document.querySelector('#display1').style.display = 'none';
      document.querySelector('#display2').style.display = 'inline-block';
      document.querySelector('#display3').style.display = 'none';
    } else {
      document.querySelector('#display1').style.display = 'none';
      document.querySelector('#display2').style.display = 'none';
      document.querySelector('#display3').style.display = 'inline-block';
    }
  });
}

//*? Codigo para Expresion regular de hashtags
btnVerificarHash.addEventListener('click', function() {
  hashtagText = document.querySelector('#hash').value;
  const hashtagRegExp = new RegExp(/^([#][A-Z])(\w{1,15})$/);
  resultado = hashtagRegExp.test(hashtagText);
  if (resultado) {
    document.querySelector('div.verificar h1').textContent = 'Correcto!';
    document.querySelector('div.verificar h1').style.color = '#2ecc71';
  } else {
    document.querySelector('div.verificar h1').textContent = 'Incorrecto!';
    document.querySelector('div.verificar h1').style.color = '#e74c3c';
  }
});
/* +[0-9]{1,3} (([a-zA-Z]){1,8}) */
//*? Codigo para Expresion regular de variables
btnVerificarVar.addEventListener('click', function() {
  variableText = document.querySelector('#variable').value;
  const varRegExp = new RegExp(/^([A-Z][_])([a-zA-Z]{0,8}[0-9]?[0-9]?[0-9])$/);
  resultado = varRegExp.test(variableText);
  if (resultado) {
    document.querySelector('div.verificar h1').textContent = 'Correcto!';
    document.querySelector('div.verificar h1').style.color = '#2ecc71';
  } else {
    document.querySelector('div.verificar h1').textContent = 'Incorrecto!';
    document.querySelector('div.verificar h1').style.color = '#e74c3c';
  }
});

//*? Codigo para Expresion regular para contraseñas
btnVerificarContr.addEventListener('click', function() {
  variableText = document.querySelector('#variable').value;
  const varRegExp = new RegExp(/^([#%&$]    [#%&$]){8,12}$/);
  resultado = varRegExp.test(variableText);
  if (resultado) {
    document.querySelector('div.verificar h1').textContent = 'Correcto!';
    document.querySelector('div.verificar h1').style.color = '#2ecc71';
  } else {
    document.querySelector('div.verificar h1').textContent = 'Incorrecto!';
    document.querySelector('div.verificar h1').style.color = '#e74c3c';
  }
});
