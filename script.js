window.addEventListener('load', function(){
    const elem = document.querySelector('.container');
    const imgelem= document.querySelector('.imgcontainer');

    elem.classList.add('container--isActive');
    imgelem.addEventListener('mousemove' , function (event){
        const xPosition= event.layerX;
        const yPosition= event.layerY;

        imgelem.style.transform = `rotateY(${xPosition/50}deg) rotateX(${-yPosition/50}deg)`;

    });
});