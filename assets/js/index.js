var datos;
var formulario = document.getElementById("form");
formulario.addEventListener('submit', function(event){
  console.log(document.getElementById("searchBox"));
});
function home (){

  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart', {index:0,limit:3,output:'json'}, function (response){
    datos=response;
    console.log(datos.artists.data);
tracks();
albums();
artists();
carrousel();

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
}
function albums(){
  document.getElementById("imgAlbums1").src = datos.albums.data[0].cover_xl;
  document.getElementById("nameAlbums1").innerHTML = datos.albums.data[0].title;
  document.getElementById("urlAlbums1").href = "detailAlbums.html?id=" + datos.albums.data[0].id;
  document.getElementById("imgAlbums2").src = datos.albums.data[1].cover_xl;
  document.getElementById("nameAlbums2").innerHTML = datos.albums.data[1].title;
  document.getElementById("urlAlbums2").href = "detailAlbums.html?id=" + datos.albums.data[1].id;
  document.getElementById("imgAlbums3").src = datos.albums.data[2].cover_xl;
  document.getElementById("nameAlbums3").innerHTML = datos.albums.data[2].title;
  document.getElementById("urlAlbums3").href = "detailAlbums.html?id=" + datos.albums.data[2].id;
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
}
function carrousel(){
  document.getElementById("carrousel1").src = datos.tracks.data[0].album.cover_xl;
  document.getElementById("carrousel2").src = datos.albums.data[0].cover_xl;
  document.getElementById("carrousel3").src = datos.artists.data[0].picture_xl;
  document.getElementById("nameCarrousel1").innerHTML = datos.tracks.data[0].title;
  document.getElementById("nameCarrousel2").innerHTML = datos.albums.data[0].title;
  document.getElementById("nameCarrousel3").innerHTML = datos.artists.data[0].name;

}
