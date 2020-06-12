let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let name = urlParams.get('query');
let datos;
let radios;
console.log(name);
function detailTrack (){

  $.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+name, function (response){
    console.log(response);
    datos = response;
detail()
});
}
function detail(){
  let duration = datos.data[0].duration;
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
  }());
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





});
}
radios();
