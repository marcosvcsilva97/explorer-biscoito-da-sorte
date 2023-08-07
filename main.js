const messages = [
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'Comece onde você está, use o que você tem e faça o que você pode.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.',
    'Não importa que você vá devagar, contanto que você não pare.',
    'A inspiração existe, porém temos que encontrá-la trabalhando.'
];

const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const message = document.querySelector('.message p');
const cookie = document.querySelector('#cookie');
const anotherCookie = document.querySelector('button');

cookie.addEventListener('click', function() {
    screen1.classList.add('hide');
    screen2.classList.remove('hide');
    const randomItem = messages[Math.floor(Math.random() * messages.length)];
    message.innerText = randomItem;
});

anotherCookie.addEventListener('click', function() {
    screen1.classList.remove('hide');
    screen2.classList.add('hide');
});
