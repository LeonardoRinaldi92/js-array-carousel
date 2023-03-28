let photos = [
    './assets/img/01.webp' ,
    './assets/img/02.webp' ,
    './assets/img/03.webp' ,
    './assets/img/04.webp' ,
    './assets/img/05.webp' 
]


for (x=0; x<=photos.length -1; x++) {
  
    if (x==0) {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto prima selected "id=img${x}>`;
        document.getElementById('sotto').innerHTML += `
        <div class="fotoSotto sottoselected prima" id=imgsotto${x}>
            <img src=" ${photos[x]}">
        </div>`;
    } else if (x==4) {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto ultima" id=img${x}>`;
        document.getElementById('sotto').innerHTML += `
        <div class="fotoSotto ultima" id=imgsotto${x}>
            <img src=" ${photos[x]}">
        </div>`;
        
    } else {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto" id=img${x}>`;
        document.getElementById('sotto').innerHTML += `
        <div class="fotoSotto"id=imgsotto${x}>
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
    let SelectedThumbnail = document.querySelector('div.sottoselected')
    let photoToSwitch = SelectedPhoto.previousElementSibling
    let ThumbnailToSwitch = SelectedThumbnail.previousElementSibling


    if( SelectedPhoto.classList.contains('prima') && SelectedThumbnail.classList.contains('prima')){
        photoToSwitch = document.querySelector('.ultima')
        ThumbnailToSwitch = document.querySelector('div.ultima')
    }

    SelectedPhoto.classList.remove('selected')
    SelectedThumbnail.classList.remove('sottoselected')

    photoToSwitch.classList.add('selected')
    ThumbnailToSwitch.classList.add('sottoselected')

})

let fotoSotto = document.querySelectorAll('.fotoSotto')

for (i = 0; i < fotoSotto.length; i++) {
    let element = fotoSotto[i];

    element.addEventListener('click', function(){
        if (! element.classList.contains('sottoselected')){
            document.querySelector('.sottoselected').classList.remove('sottoselected');
            element.classList.add('sottoselected')
            document.querySelector('.selected').classList.remove('selected');
            for (x = 0; x < fotoSotto.length; x++) {
                if(element === fotoSotto[x]) {
                    document.getElementById('img' + x).classList.add('selected')
                }
            }
        }
    })
}