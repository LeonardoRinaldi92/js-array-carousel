let photos = [
    './assets/img/01.webp' ,
    './assets/img/02.webp' ,
    './assets/img/03.webp' ,
    './assets/img/04.webp' ,
    './assets/img/05.webp' 
]


for (x=0; x<=photos.length -1; x++) {
  
    if (x==0) {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto prima selected ">`;
        document.getElementById('sotto').innerHTML += `
        <div class="prova sottoselected prima">
            <img src=" ${photos[x]}">
        </div>`;
    } else if (x==4) {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto ultima">`;
        document.getElementById('sotto').innerHTML += `
        <div class="prova ultima">
            <img src=" ${photos[x]}">
        </div>`;
        
    } else {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto">`;
        document.getElementById('sotto').innerHTML += `
        <div class="prova">
            <img src=" ${photos[x]}">
        </div>`
        
    } 
}

const next = document.querySelector('.next')
const prec = document.querySelector('.prec')


next.addEventListener( 'click', function(){

    let SelectedPhoto = document.querySelector('img.selected')
    let SelectedThumbnail = document.querySelector('div.sottoselected')
    let photoToSwitch = SelectedPhoto.nextElementSibling
    let ThumbnailToSwitch = SelectedThumbnail.nextElementSibling

    if( SelectedPhoto.classList.contains('ultima') && SelectedThumbnail.classList.contains('ultima')){
        photoToSwitch = document.querySelector(' .prima');
        ThumbnailToSwitch = document.querySelector('div.prima')

    }

    SelectedPhoto.classList.remove('selected')
    SelectedThumbnail.classList.remove('sottoselected')

    photoToSwitch.classList.add('selected')
    ThumbnailToSwitch.classList.add('sottoselected')

})

prec.addEventListener( 'click', function(){

    let SelectedPhoto = document.querySelector('img.selected')
    let photoToSwitch = SelectedPhoto.previousElementSibling


    if( SelectedPhoto.classList.contains('prima') ){
        photoToSwitch = document.querySelector('.ultima')
    }

    SelectedPhoto.classList.remove('selected')
    photoToSwitch.classList.add('selected')

})
    

