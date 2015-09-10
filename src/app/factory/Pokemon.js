(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('Pokemon', ['baseUrl', '$http', '$state', PokemonFact]);

    function PokemonFact(baseUrl, $http, $state){
        function Pokemon(data, id){

            this.resource_uri   = data.resource_uri ? data.resource_uri : null;
            this.name           = data.name ? data.name : null;
            this.details        = null;
            this.id             = id;
            this.loading        = 0;

            this.setDetail = function(redirect){
                var self = this;
                if(self.details){
                    if(redirect)
                        $state.go("app.detail", {pokemonId : self.details.national_id});
                }else{
                    self.loadDetails(redirect);
                }
            }

            this.loadDetails = function(redirect){
                var self = this;
                self.loading++;
                $http.get(baseUrl + self.resource_uri).then(function(response) {
                    if(redirect) $state.go("app.detail", {pokemonId : response.data.national_id});
                    self.details = response.data;
                    self.loading--;
                }, function(response) {
                    self.loading--;
                });
            };

        }

    	return Pokemon; 
    }

})();