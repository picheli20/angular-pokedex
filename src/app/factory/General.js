(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('General', ['$rootScope', '$http', GeneralGact]);

    function GeneralGact($rootScope, $http){
      function General(){
        this.loader = 0;
        /* jshint ignore:start */
        this.error = function(error){
          console.error(error);
          this.loading(-1);
        };
        /* jshint ignore:end */

        this.loading = function(i){
          if(i){
            this.loader++;
          }else{
            this.loader--;
          }
        };

        this.isLoading = function(){
          return this.loader !== 0;
        };

        this.isValid = function(email){
          var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
          return filter.test(email);
        };

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
