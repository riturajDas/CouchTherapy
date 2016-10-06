$(document).ready(function() {

  $('.slider').slider({full_width:true, height:window.innerHeight, transition:600});
  $(".button-collapse").sideNav();

  var $movies = $(".row.movies");

  $.ajax({
    type: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=a7f4e7531c0abfef4ade0b794873f5ce",
    success: function(data) {
      for(var i = 0; i <= data.results.length; i++) {
        var obj = data.results[i];
        //console.log(obj.title);
        $movies.append('<div class="col l4"><div class="card hoverable">'+
      '<div style="height:60vh;" class="card-image waves-effect waves-block waves-light">'+
      '<img style="height:62vh;" class="activator" src="http://image.tmdb.org/t/p/w600/'+obj.poster_path+'">'+
      '</div>'+
      '<div class="card-content">'+
      '<span class="card-title grey-text text-darken-4 activator truncate">'+obj.title+'</span>'+
      '<p>Released: <strong>'+obj.release_date+'</strong></p>'+
      '</div>'+
      '<div class="card-reveal">'+
      '<span class="card-title grey-text text-darken-4">'+obj.title+'<i class="material-icons right">close</i></span>'+
      '<p>'+obj.overview+'</p>'+
      '<p>Voted by <strong style="color:red">'+obj.vote_count+'</strong> people</p>'+
      '</div>'+
      '</div>'+
      '</div>');
      }
    },
    error: function() {
      alert("Error loading data!");
    }
  });

});
