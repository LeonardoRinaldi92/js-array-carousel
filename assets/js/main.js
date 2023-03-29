//array foto
let path = './assets/img/'

let photos = [
    '01.webp' ,
    '02.webp' ,
    '03.webp' ,
    '04.webp' ,
    '05.webp' 
]

//ciclo che prende in cosiderazione array foto
for (x=0; x<=photos.length -1; x++) {
    // se x uguale a zero stampa "prima" e selected su foto e thumbnails + id univoco
    if (x==0) {
        document.getElementById('carousel').innerHTML += `<img src=" ${path}${photos[x]}" class="foto prima selected "id=img${x}>`;
        document.getElementById('sotto').innerHTML += `
        <div class="fotoSotto sottoselected prima" id=imgsotto${x}>
            <img src="${path}${photos[x]}">
        </div>`;

    //se x uguale a zero stampa "ultima"  + id univoco
    } else if (x==4) {
        document.getElementById('carousel').innerHTML += `<img src=" ${path}${photos[x]}" class="foto ultima" id=img${x}>`;
        document.getElementById('sotto').innerHTML += `
        <div class="fotoSotto ultima" id=imgsotto${x}>
            <img src=" ${path}${photos[x]}">
        </div>`;
        
    //se x diersa da 0 e 5 stampa normale + id univoco
    } else {
        document.getElementById('carousel').innerHTML += `<img src=" ${path}${photos[x]}" class="foto" id=img${x}>`;
        document.getElementById('sotto').innerHTML += `
        <div class="fotoSotto"id=imgsotto${x}>
            <img src=" ${path}${photos[x]}">
        </div>`
        
    } 
}

//costanti x le freccette
const next = document.querySelector('.next')
const prec = document.querySelector('.prec')

//funzione al click di next 
next.addEventListener( 'click', function(){

    //prendi in considerazione chi ha la classe "selected " oppure "sottoselected" 
    let SelectedPhoto = document.querySelector('img.selected')
    let SelectedThumbnail = document.querySelector('div.sottoselected')
    //seleziona l'elemento fratello di..
    let photoToSwitch = SelectedPhoto.nextElementSibling
    let ThumbnailToSwitch = SelectedThumbnail.nextElementSibling

    //se l'immagine e la thumbnail contiene ultima...
    if( SelectedPhoto.classList.contains('ultima') && SelectedThumbnail.classList.contains('ultima')){
        photoToSwitch = document.querySelector(' .prima');
        ThumbnailToSwitch = document.querySelector('div.prima')

    }
    //RIMUOVI CLASSE selected e sottoselected
    SelectedPhoto.classList.remove('selected')
    SelectedThumbnail.classList.remove('sottoselected')

    //aggiungi la classe selected e sottoselected
    photoToSwitch.classList.add('selected')
    ThumbnailToSwitch.classList.add('sottoselected')

})

//funzione al di precedente
prec.addEventListener( 'click', function(){

    //prendi in considerazione chi ha la classe "selected " oppure "sottoselected"
    let SelectedPhoto = document.querySelector('img.selected')
    let SelectedThumbnail = document.querySelector('div.sottoselected')
    //seleziona l'elemento fratello di..
    let photoToSwitch = SelectedPhoto.previousElementSibling
    let ThumbnailToSwitch = SelectedThumbnail.previousElementSibling

    //se l'immagine e la thumbnail contiene ultima...
    if( SelectedPhoto.classList.contains('prima') && SelectedThumbnail.classList.contains('prima')){
        photoToSwitch = document.querySelector('.ultima')
        ThumbnailToSwitch = document.querySelector('div.ultima')
    }

    //RIMUOVI CLASSE selected e sottoselected
    SelectedPhoto.classList.remove('selected')
    SelectedThumbnail.classList.remove('sottoselected')

    //aggiungi la classe selected e sottoselected
    photoToSwitch.classList.add('selected')
    ThumbnailToSwitch.classList.add('sottoselected')

})

//crea una selezione con tutte le immagini di fotosotto
let fotoSotto = document.querySelectorAll('.fotoSotto')

//ciclo di foto sotto
for (i = 0; i < fotoSotto.length; i++) {
    //l'elemento element è uguale a "fotosotto"(che contieniene il queryall di tutte le foto sotto) e cicla con [i] tutti le i
    let element = fotoSotto[i];

    //funzione al click su "element"
    element.addEventListener('click', function(){
        
        if (! element.classList.contains('sottoselected')){     //se l'immagine NON  contiene sottoselected            
            document.querySelector('.sottoselected').classList.remove('sottoselected');   //cerca l'immagine che contiene sottoselcted rimuove
            element.classList.add('sottoselected')   //aggiunge a "element" sottoselected
            document.querySelector('.selected').classList.remove('selected');   //cerca l'immagine che contiene selected e rimuoviglielo
            for (x = 0; x < fotoSotto.length; x++) {    //cicla sulla lunghezza di fotosotto(che contiene un numero immagini a uguali a foto sopra)
                if(element === fotoSotto[x]) {     //se l'"element" selezionato è identico fotosotto ciclato con X
                    document.getElementById('img' + x).classList.add('selected')}    //prendi un elemento che contiene l'id img + x(ciclata) e aggiungi "selected"
            }
        }
    })
}