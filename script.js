const valid = 'tryber@teste.com';
const validPass = '123456';
const bLogin = document.getElementById('login-btn');
bLogin.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === valid && senha === validPass) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const checker = document.getElementById('agreement');
const sendBtn = document.getElementById('submit-btn');

checker.onchange = function () {
  if (this.checked) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
};
