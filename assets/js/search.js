let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let name = urlParams.get('query');
let datos;
let datosArtists;
let datosAlbums;
let datosRadios;

let content = document.querySelector("#content");
let contentArtists = document.querySelector("#contentArtists");
let contentAlbums = document.querySelector("#contentAlbums");
let contentRadios = document.querySelector("#contentRadios");

console.log(name);
function searchTrack (){

  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+name)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datos = data;
    searchArtist();
  })
}
function searchArtist (){

  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+name)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datosArtists = data;
searchAlbums();
  })
}
function searchAlbums (){

  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+name)
  .then(function (response){
    return response.json();
  })
  .then(function(data){
    datosAlbums = data;
searchRadios();
  })
}

function searchRadios (){

  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/radio?q='+name)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datosRadios = data;
detail()
  })

}
function detail(){
  if(datos.data.length>=9){
  for(let i=0;i<=8;i++){

    content.innerHTML+=`
    <div class="column">
    <a href="./detailTrack.html?id=${datos.data[i].id}">
    <img id="cover" src="${datos.data[i].album.cover_xl}" />
    <h3 id="title">${datos.data[i].title} - ${datos.data[i].artist.name}</h3>

    </a>
    </div>
    `
  }
} else{
  for(let i=0;i<datos.data.length;i++){

    content.innerHTML+=`
    <div class="column">
    <a href="./detailTrack.html?id=${datos.data[i].id}">
    <img id="cover" src="${datos.data[i].album.cover_xl}" />
    <h3 id="title">${datos.data[i].title} - ${datos.data[i].artist.name}</h3>
    </a>
    </div>
    `
  }
}



if(datosArtists.data.length>=9){
  for(let i=0;i<=8;i++){

    contentArtists.innerHTML+=`
    <div class="column">
    <a href="./detailArtist.html?id=${datosArtists.data[i].id}">
    <img id="cover" src="${datosArtists.data[i].picture_xl}" />
    <h3 id="title">${datosArtists.data[i].name}</h3>
    </a>
    </div>
    `
  }
} else{
  for(let i=0;i<datosArtists.data.length;i++){

    contentArtists.innerHTML+=`
    <div class="column">
    <a href="./detailArtist.html?id=${datosArtists.data[i].id}">
    <img id="cover" src="${datosArtists.data[i].picture_xl}" />
    <h3 id="title">${datosArtists.data[i].name}</h3>
    </a>
    </div>
    `
  }
}



if(datosAlbums.data.length>=9){
  for(let i=0;i<=8;i++){

    contentAlbums.innerHTML+=`
    <div class="column">
    <a href="./detailAlbums.html?id=${datosAlbums.data[i].id}">
    <img id="cover" src="${datosAlbums.data[i].cover_xl}" />
    <h3 id="title">${datosAlbums.data[i].title} - ${datosAlbums.data[i].artist.name}</h3>
    </a>
    </div>
    `
  }
} else{
  for(let i=0;i<datosAlbums.data.length;i++){

    contentAlbums.innerHTML+=`
    <div class="column">
    <a href="./detailAlbums.html?id=${datosAlbums.data[i].id}">
    <img id="cover" src="${datosAlbums.data[i].cover_xl}" />
    <h3 id="title">${datosAlbums.data[i].title} - ${datosAlbums.data[i].artist.name}</h3>
    </a>
    </div>
    `
  }
}








if(datosRadios.data.length>0){
  for(let i=0;i<datosRadios.data.length;i++){

    contentRadios.innerHTML+=`
    <div class="column">
    <a href="./detailAlbums.html?id=${datosRadios.data[i].id}">
    <img id="cover" src="${datosRadios.data[i].picture_xl}" />
    <h3 id="title">${datosRadios.data[i].title}</h3>
    </a>
    </div>
    `
  }
} else{
    contentRadios.innerHTML+=`
    <div class="column"></div>
    <div class="column">
    <h2 id="title" style="color:white;">No results</h2>
    </div
    <div class="column"></div>
    `
  }

  /*let duration = datos.data[0].duration;
  document.getElementById("cover").src = datos.data[0].album.cover_xl;
  document.getElementById("title").innerHTML = datos.data[0].title;
  document.getElementById("duration").innerHTML = duration + " seconds";
  document.getElementById("artist").innerHTML = datos.data[0].artist.name;
  document.getElementById("album").innerHTML = datos.data[0].album.title;
  document.getElementById("trackAlbumURL").href = "./detailAlbums.html?id="+datos.data[0].album.id;
  document.getElementById("trackArtistURL").href = "./detailArtist.html?id="+datos.data[0].artist.id;
  (function() {
    var w = document[typeof document.getElementsByClassName === 'function' ? 'getElementsByClassName' : 'querySelectorAll']('deezer-widget-player');
    for (var i = 0, l = w.length; i < l; i++) {
      w[i].innerHTML = '';
      var el = document.createElement('iframe');
      el.src = "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+datos.data[0].id;
      el.scrolling = w[i].getAttribute('data-scrolling');
      el.frameBorder = w[i].getAttribute('data-frameborder');
      el.setAttribute('frameBorder', w[i].getAttribute('data-frameborder'));
      el.allowTransparency = w[i].getAttribute('data-allowTransparency');
      el.width = w[i].getAttribute('data-width');
      el.height = w[i].getAttribute('data-height');
      w[i].appendChild(el);
    }
  }());*/
  genders();
}
function genders(){
  var dropdown = document.getElementById('drop');
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    genders = data;
    for(let i=0;i<genders.data.length;i++){
    //  console.log(genders.data[i].name);
    //  dropdown.innerHTML = "<a class='dropdown-item' href='./genre.html?id='+'>"+genders.data[i].name+"</a>"
let tag = document.createElement("a");
let link = document.createTextNode(genders.data[i].name);
tag.appendChild(link);
tag.title=genders.data[i].name;
tag.href = "./genre.html?id="+genders.data[i].id;
tag.class="dropdown-item";

dropdown.appendChild(tag);
//tag.innerHTML = "class='dropdown-item' href='./genre.html?id='+'>"+genders.data[i].name+"</a>";

    }
    radio();
  })
  .catch(function(error){
    console.log(error);
  })

}
function radios(){
  var drop = document.getElementById('dropRadios');
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio')
  .then(function(response){
    return response.json();
  })
  .then(function (data){
    radios=data;
    for(let i=0;i<15;i++){
    //  console.log(genders.data[i].name);
    //  dropdown.innerHTML = "<a class='dropdown-item' href='./genre.html?id='+'>"+genders.data[i].name+"</a>"
let tag = document.createElement("a");
let link = document.createTextNode(radios.data[i].title);
tag.appendChild(link);
tag.title=radios.data[i].title;
tag.href = "./radio.html?id="+radios.data[i].id;
tag.class="dropdown-item";

drop.appendChild(tag);
//tag.innerHTML = "class='dropdown-item' href='./genre.html?id='+'>"+genders.data[i].name+"</a>";

    }
  })
  .catch(function(error){
    console.log(error);
  })
}
radios();

document.getElementById("body").style="display:block;";
document.getElementById("loading").style="display:none;";
