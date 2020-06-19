var datos;
var genders;
var radios;
var formulario = document.getElementById("form");
var body = document.getElementById("body");
var loading = document.getElementById("loading");

formulario.addEventListener('submit', function(event){
  console.log(document.getElementById("searchBox"));
});
function home (){
  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart', {index:0,limit:3,output:'json'}, function (response){
    datos=response;
    console.log(datos.artists.data);
tracks();




});
}
function tracks()
{
  //for(var i=0;i<=2;i++){
    //console.log(datos.tracks.data[i]);
//  }

document.getElementById("imgTracks1").src = datos.tracks.data[0].album.cover_xl;
document.getElementById("nameTracks1").innerHTML = datos.tracks.data[0].title;
document.getElementById("urlTracks1").href = "detailTrack.html?id=" + datos.tracks.data[0].id;


document.getElementById("imgTracks2").src = datos.tracks.data[1].album.cover_xl;
document.getElementById("nameTracks2").innerHTML = datos.tracks.data[1].title;
document.getElementById("urlTracks2").href = "detailTrack.html?id=" + datos.tracks.data[1].id;
document.getElementById("imgTracks3").src = datos.tracks.data[2].album.cover_xl;
document.getElementById("nameTracks3").innerHTML = datos.tracks.data[2].title;
document.getElementById("urlTracks3").href = "detailTrack.html?id=" + datos.tracks.data[2].id;
albums();
}
function albums(){
  document.getElementById("imgAlbums1").src = datos.albums.data[0].cover_xl;
  document.getElementById("nameAlbums1").innerHTML = datos.albums.data[0].title + " - " + datos.albums.data[0].artist.name;
  document.getElementById("urlAlbums1").href = "detailAlbums.html?id=" + datos.albums.data[0].id;
  document.getElementById("imgAlbums2").src = datos.albums.data[1].cover_xl;
  document.getElementById("nameAlbums2").innerHTML = datos.albums.data[1].title + " - " + datos.albums.data[1].artist.name;
  document.getElementById("urlAlbums2").href = "detailAlbums.html?id=" + datos.albums.data[1].id;
  document.getElementById("imgAlbums3").src = datos.albums.data[2].cover_xl;
  document.getElementById("nameAlbums3").innerHTML = datos.albums.data[2].title + " - " + datos.albums.data[2].artist.name;
  document.getElementById("urlAlbums3").href = "detailAlbums.html?id=" + datos.albums.data[2].id;
  artists();
}
function artists(){
  document.getElementById("imgArtists1").src = datos.artists.data[0].picture_xl;
  document.getElementById("nameArtists1").innerHTML = datos.artists.data[0].name;
document.getElementById("urlArtists1").href = "detailArtist.html?id=" + datos.artists.data[0].id;
  document.getElementById("imgArtists2").src = datos.artists.data[1].picture_xl;
  document.getElementById("nameArtists2").innerHTML = datos.artists.data[1].name;
  document.getElementById("urlArtists2").href = "detailArtist.html?id=" + datos.artists.data[1].id;
  document.getElementById("imgArtists3").src = datos.artists.data[2].picture_xl;
  document.getElementById("nameArtists3").innerHTML = datos.artists.data[2].name;
  document.getElementById("urlArtists3").href = "detailArtist.html?id=" + datos.artists.data[2].id;
  genders();
}
function genders(){
  var dropdown = document.getElementById('drop');
  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre', {output:'json'}, function (response){
    genders=response;
    console.log(genders.data);

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
radios();




});
}
function radios(){
  var drop = document.getElementById('dropRadios');
  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio', {output:'json',limit:15}, function (response){
    radios=response;
    console.log(radios.data);
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
carrousel();




});
}
function carrousel(){
  document.getElementById("carrousel1").src = datos.tracks.data[0].album.cover_xl;
  document.getElementById("carrousel2").src = datos.albums.data[0].cover_xl;
  document.getElementById("carrousel3").src = datos.artists.data[0].picture_xl;
  document.getElementById("nameCarrousel1").innerHTML = datos.tracks.data[0].title;
  document.getElementById("nameCarrousel2").innerHTML = datos.albums.data[0].title;
  document.getElementById("nameCarrousel3").innerHTML = datos.artists.data[0].name;
  body.style.display="block";
  loading.style.display="none";

}
