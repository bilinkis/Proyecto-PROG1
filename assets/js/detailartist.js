let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let datos;
let datosAlbums;
let datosTracks;
let body = document.getElementById("body");
let loading = document.getElementById("loading");
let contentArtist = document.querySelector("#artist-albums");
let contentTracks = document.querySelector("#artist-songs");
console.log(id);
function detailArtist (){

  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+id)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datos = data;
    detailAlbums();
  })




}

function detailAlbums(){
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+id+'/albums?limit=4')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datosAlbums = data;
    detailTracks()
  })

}
function detailTracks(){
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+id+'/top?&limit=5')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datosTracks = data;
    detail()
  })
}
function detail(){
  document.getElementById("cover").src = datos.picture_xl;
  document.getElementById("artist").innerHTML = datos.name;
  document.getElementById("fans").innerHTML = datos.nb_fan + " fans";

if(datosAlbums.data.length>=4){
for(var i=0;i<4;i++){

contentArtist.innerHTML += `
<div class="column">
  <a id="urlAlbums" href="detailAlbums.html?id=${datosAlbums.data[i].id}" >
  <img id='imgAlbums' class="top-albums" src="${datosAlbums.data[i].cover_xl}"alt="" />
  <h3 id='nameAlbums'>${datosAlbums.data[i].title}</h3>
</a>
</div>
`
}


} else{
  for(var i=0;i<=datosAlbums.data.length;i++){
    contentArtist.innerHTML += `
    <div class="column">
      <a id="urlAlbums" href="detailAlbums.html?id=${datosAlbums.data[i].id}" >
      <img id='imgAlbums' class="top-albums" src="${datosAlbums.data[i].cover_xl}"alt="" />
      <h3 id='nameAlbums'>${datosAlbums.data[i].title}</h3>
    </a>
    </div>
    `
  }
}

if(datosTracks.data.length>=5)
{
  for(var i=0;i<5;i++){
    contentTracks.innerHTML += `
    <div class="column">
      <a id="urlTracks" href="detailTrack.html?id=${datosTracks.data[i].id}" >
      <img id='imgTracks' class="top-albums" src="${datosTracks.data[i].album.cover_xl}" alt="" />
      <h3 id='nameTracks'>${datosTracks.data[i].title}</h3>
    </a>
    </div>
    `
  }
} else{
  for(var i=0;i<datosTracks.data.length;i++)
  {
    contentTracks.innerHTML += `
    <div class="column">
      <a id="urlTracks" href="detailTrack.html?id=${datosTracks.data[i].id}" >
      <img id='imgTracks' class="top-albums" src="${datosTracks.data[i].album.cover_xl}" alt="" />
      <h3 id='nameTracks'>${datosTracks.data[i].title}</h3>
    </a>
    </div>
    `
  }
}

body.style.display="block";
loading.style.display="none";
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
  })
  .catch(function(error){
    console.log(error);
  })







}
genders();
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
