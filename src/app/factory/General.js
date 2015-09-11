(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('General', ['$rootScope', '$http', GeneralGact]);

    function GeneralGact($rootScope, $http){
      function General(){
        this.loader = 0;
        this.error = function(error){
          console.error(error);
          this.loading(-1);
        };

        this.loading = function(i){
          if(i){
            this.loader++;
          }else{
            this.loader--;
          }
        }

        this.isLoading = function(){
          return this.loader !== 0;
        }

        this.load = function(obj, att, url, callback){
          var self = this;
          self.loading(true);
          $http.get(url).then(function(response) {
              obj[att] = response.data;
              if(callback){
                callback(response);
              }
              self.loading(false);
          }, self.error);
        };
      }

    	return new General(); 
    }

})();