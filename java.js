const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
    setTimeout(function(){
        loader.classList.add('fondu-out');
    }, 2500);
})

/*function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`;
    progressBar.querySelector(".progress__text").textContent = `${value}%`;
  }*/