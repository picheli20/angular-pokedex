(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('Pokedex', ['baseUrl', '$http', 'Pokemon', '$state', PokedexFact]);

    function PokedexFact(baseUrl, $http, Pokemon, $state){
        function Pokedex(){
            this.pokemonList = [];
            this.detailPkn = null;

            this.detail = function(id){
              var pokemon = this.getPokemonById(id);
              console.log("[" + id + "]getting details of " + pokemon.name);
              this.detailPkn = pokemon;
              pokemon.setDetail(true);
            }

            this.getPokemonById = function(id){
              for (var i = 0; i < this.pokemonList.length; i++) {
                if(this.pokemonList[i].id == id) return this.pokemonList[i];
              };
            }

            this.loadPokemons = function(){
                var self = this;
                var pokemonId = null;
                if($state.params.pokemonId) pokemonId = $state.params.pokemonId;

                $http.get(baseUrl + '/api/v1/pokedex/1').then(function(response) {
                  var pokemon = response.data.pokemon;
                  for (var i = 0; i < pokemon.length; i++) {
                    var pokemonClass = new Pokemon(pokemon[i], i);
                    if(pokemonId && pokemon[i].resource_uri == ("api/v1/pokemon/" + pokemonId + "/")){
                      self.detailPkn = pokemonClass;
                      pokemonClass.setDetail(true);
                    }else
                      //pokemonClass.setDetail(false);
                    self.pokemonList.push(pokemonClass);
                  };
                }, function(response) {

                });
            };

        }

    	return new Pokedex(); 
    }

})();