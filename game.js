const hands = [...document.querySelectorAll('.select img')]
const start = document.querySelector('.start');

const chooses = {
  MySelect: '',
  AiSelect: ''
}
const statistics = {
  winner: '',
  qtygames: 0,
  qtywins: 0,
  qtylosers: 0,
  qtydraws: 0
}
hands.forEach(hand => {
  hand.addEventListener('click', function selectHand() {
    hands.forEach(hand => hand.style.boxShadow = '')
    hand.style.boxShadow = '0 0 0 4px red';
    chooses.MySelect = this.dataset.option;
    document.querySelector('[data-summary="your-choice"]').textContent = chooses.MySelect;

  })
});
const compareResults = function () {
  if (chooses.AiSelect === 'scissors' && chooses.MySelect === 'rock') {
    document.querySelector('[data-summary="who-win"]').textContent = 'You Won';
    statistics.qtywins++;


  } else if (chooses.AiSelect === 'rock' && chooses.MySelect === 'scissors') {
    document.querySelector('[data-summary="who-win"]').textContent = 'You Lost';
    statistics.qtylosers++;

  } else if (chooses.AiSelect === 'scissors' && chooses.MySelect === 'paper') {
    document.querySelector('[data-summary="who-win"]').textContent = 'You Lost';
    statistics.qtylosers++;

  } else if (chooses.AiSelect === 'paper' && chooses.MySelect === 'scissors') {
    document.querySelector('[data-summary="who-win"]').textContent = 'You Won';
    statistics.qtywins++;

  } else if (chooses.AiSelect === 'paper' && chooses.MySelect === 'rock') {
    document.querySelector('[data-summary="who-win"]').textContent = 'You Lost';
    statistics.qtylosers++;

  } else if (chooses.AiSelect === 'rock' && chooses.MySelect === 'paper') {
    document.querySelector('[data-summary="who-win"]').textContent = 'You Won';
    statistics.qtywins++;

  } else {
    document.querySelector('[data-summary="who-win"]').textContent = 'Draw';
    statistics.qtydraws++;
  }
}
const showSummary = function () {
  document.querySelector('p.wins span').textContent = statistics.qtywins;
  document.querySelector('p.losses span').textContent = statistics.qtylosers;
  document.querySelector('p.draws span').textContent = statistics.qtydraws;
}
function startGame() {
  if (chooses.MySelect) {
    const indSelect = Math.floor(Math.random() * hands.length);
    chooses.AiSelect = hands[indSelect].dataset.option;
    document.querySelector('[data-summary="ai-choice"]').textContent = chooses.AiSelect;
    hands.forEach(hand => hand.style.boxShadow = '')
    compareResults();
    showSummary();
  } else alert('You have to choose a HAND.')
}

start.addEventListener('click', startGame)