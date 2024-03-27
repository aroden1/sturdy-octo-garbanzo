const logo = document.querySelector("h1");

function hideText() {
    logo.innerHTML = '';
}

function restoreText() {
    logo.innerHTML = 'Welcome to the Best Park';
}



addEventListener('click', hideText);

removeEventListener('click', restoreText);