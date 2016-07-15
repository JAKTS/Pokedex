angular.module('pokedex')
  .service('pokeServ', function ($http) {
    //make api call to
    this.getPokemon = function(num) {
      return $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/' + num + '/'

      }).then(function(response){
        console.log(response);
        return response.data;
      });
    };


  });

//POST, GET, PUT, DELETE
//Create
//Read
//Update
//Delete
