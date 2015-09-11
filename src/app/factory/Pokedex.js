(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('Pokedex', ['baseUrl', 'Pokemon', '$state', 'General', PokedexFact]);

    function PokedexFact(baseUrl, Pokemon, $state, General){
        function Pokedex(){
            this.pokemonList = [];
            this.detailPkn = null;

            this.detail = function(id){
              var pokemon = this.getPokemonById(id);
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
                General.load(self, 'pokemonResul', baseUrl + '/api/v1/pokedex/1', function(response){
                  var pokemon = response.data.pokemon;
                  for (var i = 0; i < pokemon.length; i++) {
                    var pokemonClass = new Pokemon(pokemon[i], i);
                    if(pokemonId && pokemon[i].resource_uri == ("api/v1/pokemon/" + pokemonId + "/")){
                      self.detailPkn = pokemonClass;
                      pokemonClass.setDetail(true);
                    }
                    self.pokemonList.push(pokemonClass);
                  };
                });
            };

        }

    	return new Pokedex(); 
    }

})();