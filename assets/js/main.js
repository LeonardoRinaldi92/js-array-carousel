let photos = [
    './assets/img/01.webp' ,
    './assets/img/02.webp' ,
    './assets/img/03.webp' ,
    './assets/img/04.webp' ,
    './assets/img/05.webp' 
]

console.log (photos)

for (x=0; x<=photos.length -1; x++) {

    
    if (x==0) {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto prima selected ">`;
    } else if (x==4) {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto ultima">`;
    } else {
        document.getElementById('carousel').innerHTML += `<img src=" ${photos[x]}" class="foto">`;
    }
    
}

    

