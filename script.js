let item = document.querySelectorAll('.item');
let modal = document.querySelector('.modal');
let popup = document.querySelector('.popup');
let closeBtn = popup.querySelector('.popup-close');
let refImg = document.querySelectorAll('.items img');
let popupImg = document.querySelector('.popup img');
let popupText = document.querySelector('.popup p');

let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');

for (let i = 0; i < item.length; i++) {
    let current = item[i];

    current.addEventListener('click', function() {
        popupImg.src = './assets/img/'+(i+1)+'.jpg';
        popupText.textContent = i+1;  
        modal.style.display = 'block';
        popup.style.display = 'block';
        header.style.filter = 'blur(5px)'
        main.style.filter = 'blur(5px)'
        footer.style.filter = 'blur(5px)'

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            popup.style.display = 'none';
            header.style.filter = 'none'
            main.style.filter = 'none'
            footer.style.filter = 'none'
        });
        modal.addEventListener('click', function() {
            modal.style.display = 'none';
            popup.style.display = 'none';
            header.style.filter = 'none'
            main.style.filter = 'none'
            footer.style.filter = 'none'
        })
    });
}