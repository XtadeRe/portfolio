function changeColorText1() {
    document.getElementById('photo').src='img/синий.jpg';
    document.querySelector('.container').style.color = 'rgb(189, 184, 255)';
    document.querySelector('.btn').style.background = 'rgb(189, 184, 255)';
    document.getElementById('title').innerHTML = 'Синий стул';
}


function changeColorText2() {
    document.getElementById('title').innerHTML = 'Розовый стул';
    document.getElementById('photo').src='img/розовый.jpg';
    document.querySelector('.container').style.color = 'rgb(255, 219, 229)';
    document.querySelector('.btn').style.background = 'rgb(255, 219, 229)';
}


function changeColorText3() {
    document.getElementById('title').innerHTML = 'Жёлтый стул';
    document.getElementById('photo').src='img/желтый.jpg';
    document.querySelector('.container').style.color = 'rgb(255, 237, 73)';
    document.querySelector('.btn').style.background = 'rgb(255, 237, 73)';
}
