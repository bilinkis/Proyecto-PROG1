let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let datos;
let datosAlbums;
let datosTracks;
console.log(id);
function detailArtist (){

  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+id, function (response){
    console.log(response);
    datos = response;

detailAlbums();
});
}

function detailAlbums(){
  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+datos.name+"&limit=4", function (response){
    console.log(response);
    datosAlbums = response;
    detailTracks()
});
}
function detailTracks(){
  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+datos.name+"&limit=5", function (response){
    console.log(response);
    datosTracks = response;
    detail()
});
}
function detail(){
  document.getElementById("cover").src = datos.picture_xl;
  document.getElementById("artist").innerHTML = datos.name;
  document.getElementById("fans").innerHTML = datos.nb_fan + " fans";




  document.getElementById("imgAlbums1").src = datosAlbums.data[0].cover_xl;
  document.getElementById("nameAlbums1").innerHTML = datosAlbums.data[0].title;
  document.getElementById('urlAlbums1').href = 'detailAlbums.html?id='+datosAlbums.data[0].id;
  document.getElementById("imgAlbums2").src = datosAlbums.data[1].cover_xl;
  document.getElementById("nameAlbums2").innerHTML = datosAlbums.data[1].title;
    document.getElementById('urlAlbums2').href = 'detailAlbums.html?id='+datosAlbums.data[1].id;
  document.getElementById("imgAlbums3").src = datosAlbums.data[2].cover_xl;
  document.getElementById("nameAlbums3").innerHTML = datosAlbums.data[2].title;
    document.getElementById('urlAlbums3').href = 'detailAlbums.html?id='+datosAlbums.data[2].id;
  document.getElementById("imgAlbums4").src = datosAlbums.data[3].cover_xl;
  document.getElementById("nameAlbums4").innerHTML = datosAlbums.data[3].title;
    document.getElementById('urlAlbums4').href = 'detailAlbums.html?id='+datosAlbums.data[3].id;





  document.getElementById('imgTracks1').src = datosTracks.data[0].album.cover_xl;
  document.getElementById('nameTracks1').innerHTML = datosTracks.data[0].title;
  document.getElementById('urlTracks1').href = 'detailTrack.html?id='+datosTracks.data[0].id;
  document.getElementById('imgTracks2').src = datosTracks.data[1].album.cover_xl;
  document.getElementById('nameTracks2').innerHTML = datosTracks.data[1].title;
  document.getElementById('urlTracks2').href = 'detailTrack.html?id='+datosTracks.data[1].id;
  document.getElementById('imgTracks3').src = datosTracks.data[2].album.cover_xl;
  document.getElementById('nameTracks3').innerHTML = datosTracks.data[2].title;
  document.getElementById('urlTracks3').href = 'detailTrack.html?id='+datosTracks.data[2].id;
  document.getElementById('imgTracks4').src = datosTracks.data[3].album.cover_xl;
  document.getElementById('nameTracks4').innerHTML = datosTracks.data[3].title;
  document.getElementById('urlTracks4').href = 'detailTrack.html?id='+datosTracks.data[3].id;
  document.getElementById('imgTracks5').src = datosTracks.data[4].album.cover_xl;
  document.getElementById('nameTracks5').innerHTML = datosTracks.data[4].title;
  document.getElementById('urlTracks5').href = 'detailTrack.html?id='+datosTracks.data[4].id;


}
