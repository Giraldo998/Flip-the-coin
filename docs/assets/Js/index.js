const imageCoin = document.querySelector('#coin-img'),
	resultText = document.querySelector('#coin-result'),
	flipButton = document.querySelector('#flip-btn');


flipButton.addEventListener('click', ()=>{

   const result = (Math.random() < 0.5) ? "Heads" : "Tails";
   imageCoin.classList.add('flip');

   setTimeout(() => {
      resultText.innerHTML = result;
      imageCoin.classList.remove('flip');
      imageCoin.src = (result === "Heads") ? "assets/img/heads.svg" : "assets/img/tails.svg";
   }, 1500);

});