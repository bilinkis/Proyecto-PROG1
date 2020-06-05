let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let datos;
console.log(id);
function detailTrack (){

  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+id, function (response){
    console.log(response);
    datos = response;
detail()
});
}
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
}
