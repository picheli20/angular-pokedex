(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('Pokemon', ['baseUrl', '$state', 'General', PokemonFact]);

    function PokemonFact(baseUrl, $state, General){
        function Pokemon(data, id){

            this.resource_uri   = data.resource_uri ? data.resource_uri : null;
            this.name           = data.name ? data.name : null;
            this.details        = null;
            this.description    = null;
            this.type           = [];
            this.id             = id;
            this.moveFilter     = {"level up" : true}

            this.setDetail = function(redirect){
                var self = this;
                if(self.details){
                    if(redirect)
                        $state.go("app.detail", {pokemonId : self.details.national_id});
                }else{
                    self.loadDetails(redirect);
                }
            };


            this.loadDetails = function(redirect){
                var self = this;
                General.load(self, 'details', (baseUrl + self.resource_uri), function(resp){
                    if(redirect) $state.go("app.detail", {pokemonId : resp.data.national_id});
                    if (!self.sprite) self.loadSprite();
                    if (!self.description) self.loadDescription();
                });

            };

            this.loadSprite = function(){
                var self = this;
                var sprites = self.details.sprites;
                if(sprites.length == 0) return;
                General.load(self, 'sprite', baseUrl + sprites[sprites.length - 1].resource_uri);
            };

            this.loadDescription = function(i){
                if(this.details.descriptions.length == 0){
                    return;
                }
                if(!i) i = this.details.descriptions.length - 1;
                General.load(this, 'description', baseUrl + this.details.descriptions[i].resource_uri);
            };

            this.toggleFilter = function(str){
                this.moveFilter[str] = !this.moveFilter[str];
            }

            this.canShow = function(str){
                return this.moveFilter[str];
            }

            this.getImage = function(){
                if(!this.sprite) return "";
                return baseUrl + this.sprite.image;
            }

        }

    	return Pokemon; 
    }

})();