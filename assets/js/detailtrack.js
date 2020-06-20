let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let datos;
var body = document.getElementById("body");
var loading = document.getElementById("loading");
console.log(id);
function detailTrack (){

  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+id)
 .then(function(response){
   return response.json();
 })
 .then(function(data){
   datos = data;
detail();
 })

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
function detail(){
 let duration = datos.duration;
 document.getElementById("cover").src = datos.album.cover_xl;
 document.getElementById("title").innerHTML = datos.title;
 document.getElementById("duration").innerHTML = duration + " seconds";
 document.getElementById("artist").innerHTML = datos.artist.name;
 document.getElementById("album").innerHTML = datos.album.title;
 document.getElementById("trackAlbumURL").href = "./detailAlbums.html?id="+datos.album.id;
 document.getElementById("trackArtistURL").href = "./detailArtist.html?id="+datos.artist.id;
 (function() {
   var w = document[typeof document.getElementsByClassName === 'function' ? 'getElementsByClassName' : 'querySelectorAll']('deezer-widget-player');
   for (var i = 0, l = w.length; i < l; i++) {
     w[i].innerHTML = '';
     var el = document.createElement('iframe');
     el.src = "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id="+datos.id;
     el.scrolling = w[i].getAttribute('data-scrolling');
     el.frameBorder = w[i].getAttribute('data-frameborder');
     el.setAttribute('frameBorder', w[i].getAttribute('data-frameborder'));
     el.allowTransparency = w[i].getAttribute('data-allowTransparency');
     el.width = w[i].getAttribute('data-width');
     el.height = w[i].getAttribute('data-height');
     w[i].appendChild(el);
   }
 }());
 body.style.display="block";
 loading.style.display="none";

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
