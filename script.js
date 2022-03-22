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

checker.onchange = function habilita() {
  if (this.checked) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }
};

const textArea = document.getElementById('textarea');
function contar(event) {
  const counter = document.getElementById('counter');
  const contador = 500;
  counter.innerHTML = contador - event.target.value.length;
}

textArea.addEventListener('keyup', contar);

function getFamily() {
  const family = document.getElementsByName('family');
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
}

function getSubjected() {
  const subjects = document.getElementsByClassName('subject');
  let selected = '';
  for (let j = 0; j < subjects.length; j += 1) {
    if (subjects[j].checked) {
      selected += `${subjects[j].value}, `;
    }
  }
  return selected;
}

function getAvaliation() {
  const avaliacoes = document.getElementsByName('rate');
  for (let z = 0; z < avaliacoes.length; z += 1) {
    if (avaliacoes[z].checked) {
      return avaliacoes[z].value;
    }
  }
}

const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const house = document.getElementById('house');

function preencheForm() {
  const familiaSelecionada = getFamily();
  const subObjetoSelecionado = getSubjected();
  const avaliacaoDoUsuario = getAvaliation();
  const form = document.getElementsByTagName('form')[1];
  form.innerHTML = '';
  form.innerHTML += `Nome: ${firstName.value} ${lastName.value} <br>`;
  form.innerHTML += `Email: ${email.value} <br>`;
  form.innerHTML += `Casa: ${house.value} <br>`;
  form.innerHTML += `Família: ${familiaSelecionada} <br>`;
  form.innerHTML += `Matérias: ${subObjetoSelecionado} <br>`;
  form.innerHTML += `Avaliação: ${avaliacaoDoUsuario} <br>`;
  form.innerHTML += `Observações: ${textArea.value} <br>`;
}

sendBtn.addEventListener('click', preencheForm);
