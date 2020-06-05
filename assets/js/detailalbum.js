let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let datos;
console.log(id);
function detailTrack (){

  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+id, function (response){
    console.log(response);
    datos = response;
detail()
});
}
function detail(){
  let date = datos.release_date;
  date = date.split("-").reverse().join("-");

  document.getElementById("cover").src = datos.cover_xl;
  document.getElementById("title").innerHTML = datos.title;
  document.getElementById("artist").innerHTML = datos.artist.name;
  document.getElementById("date").innerHTML = "Lanzamiento: " + date;
  document.getElementById("albumArtistURL").href = "./detailArtist.html?id=" + datos.artist.id;

}
