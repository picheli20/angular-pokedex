(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('Comment', ['baseUrl', 'Pokemon', '$state', 'General', CommentFact]);

    function CommentFact(baseUrl, Pokemon, $state, General){
        function Comment(pokeID){
        	this.comments = [];
        	Parse.initialize("p6ntLoHMmgB2aTR62L3QkWZ4MkriLHHYjPwyguNj", "K5K2E1IjdGwrRHunKiOT0KgnSYU9SOnm9P0lttfo");
			var ParseObject = Parse.Object.extend("Pokemon_Comment");
			var ParseTable = new ParseObject();
			var ParseQuery = new Parse.Query(ParseObject);
			ParseQuery.id = 'pokeID';

			var self = this;
			ParseQuery.find({
				success: function(data){
					for(var i in data){
						self.comments.push({
							"name" : data[i].get("name"),
							"email" : data[i].get("email"),
							"comment" : data[i].get("comment"),
							"date" : data[i].get("date"),
							"pokeID" : data[i].get("pokeID"),
						});
					}
					console.log(self.comments);
				},
				error: function(err){
					console.error(err);
				}
			});
			/*
			ParseObject.save({foo: "bar"}).then(function(object) {
			  alert("yay! it worked");
			});
			*/


        }

    	return Comment; 
    }

})();