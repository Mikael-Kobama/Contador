const value = document.getElementById('value');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');   

const reset = document.getElementById('reset');

let count   
 = 0;
let intervalId = null; // Inicializar com null para facilitar a verificação

const updateValue = () => {
    value.textContent = count;
};

const startInterval = (increment) => {
    clearInterval(intervalId); // Limpar qualquer intervalo anterior
    intervalId = setInterval(() => {
        count += increment;
        updateValue();
    }, 100);
};

plus.addEventListener('mousedown', () => {
    startInterval(1);
});

minus.addEventListener('mousedown', () => {
    startInterval(-1);
});

plus.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

minus.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

reset.addEventListener('click', () => {
    clearInterval(intervalId); // Limpar qualquer intervalo ativo
    count = 0;
    updateValue();
});
