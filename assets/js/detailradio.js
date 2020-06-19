let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id');
let datos;
let datosTracks;
let body = document.getElementById("body");
let loading = document.getElementById("loading");
console.log(id);

function detailGenre (){
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio/'+id)
.then(function(response){
  return response.json();
})
.then(function (data){
  datos = data;
  detailTrack();
})
.catch(function(error){
  console.log(error);
})



}

function detailTrack(){
  fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio/'+id+'/tracks')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    datosTracks = data;
    genders();
  })
  .catch(function(error){
    console.log(error);
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
    radio();
  })
  .catch(function(error){
    console.log(error);
  })







}


function radio(){
  document.getElementById("cover").src=datos.picture_xl;
  document.getElementById("genero").innerHTML=datos.title;
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
  document.getElementById('imgTracks6').src = datosTracks.data[5].album.cover_xl;
  document.getElementById('nameTracks6').innerHTML = datosTracks.data[5].title;
  document.getElementById('urlTracks6').href = 'detailTrack.html?id='+datosTracks.data[5].id;
  document.getElementById('imgTracks7').src = datosTracks.data[6].album.cover_xl;
  document.getElementById('nameTracks7').innerHTML = datosTracks.data[6].title;
  document.getElementById('urlTracks7').href = 'detailTrack.html?id='+datosTracks.data[6].id;
  document.getElementById('imgTracks8').src = datosTracks.data[7].album.cover_xl;
  document.getElementById('nameTracks8').innerHTML = datosTracks.data[7].title;
  document.getElementById('urlTracks8').href = 'detailTrack.html?id='+datosTracks.data[7].id;
  document.getElementById('imgTracks9').src = datosTracks.data[8].album.cover_xl;
  document.getElementById('nameTracks9').innerHTML = datosTracks.data[8].title;
  document.getElementById('urlTracks9').href = 'detailTrack.html?id='+datosTracks.data[8].id;
  document.getElementById('imgTracks10').src = datosTracks.data[9].album.cover_xl;
  document.getElementById('nameTracks10').innerHTML = datosTracks.data[9].title;
  document.getElementById('urlTracks10').href = 'detailTrack.html?id='+datosTracks.data[9].id;

  body.style.display="block";
  loading.style.display="none";
}
/*function detail(){
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

body.style.display="block";
loading.style.display="none";
}*/
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
