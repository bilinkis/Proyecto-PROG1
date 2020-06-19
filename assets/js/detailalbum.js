let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let datos;
var body = document.getElementById("body");
var loading = document.getElementById("loading");
console.log(id);

function detailAlbum (){

  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/'+id)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datos = data;
    detail();
  })
  .catch(function(error){
    console.log(error);
  })

}
function detail(){
  let date = datos.release_date;
  date = date.split("-").reverse().join("-");

  document.getElementById("cover").src = datos.cover_xl;
  document.getElementById("title").innerHTML = datos.title;
  document.getElementById("artist").innerHTML = datos.artist.name;
  document.getElementById("date").innerHTML = "Lanzamiento: " + date;
  document.getElementById("albumArtistURL").href = "./detailArtist.html?id=" + datos.artist.id;

    loading.style.display="none";
    body.style.display="block";


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
