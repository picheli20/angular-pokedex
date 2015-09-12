(function() {
  'use strict';

  angular
    .module('restPokedex')
    .factory('Comment', ['toastr', 'General', '$rootScope', CommentFact]);

    function CommentFact(toastr, General, $rootScope){
        function Comment(pokeID){
        	this.data = [];
        	Parse.initialize("p6ntLoHMmgB2aTR62L3QkWZ4MkriLHHYjPwyguNj", "K5K2E1IjdGwrRHunKiOT0KgnSYU9SOnm9P0lttfo");
			var ParseObject = Parse.Object.extend("Pokemon_Comment");
			var ParseTable = new ParseObject();
			var ParseQuery = new Parse.Query(ParseObject);
			ParseQuery.id = 'pokeID';

			this.model = {
				"name" : "",
				"email" : "",
				"comment" : "",
				"pokeID" : pokeID
			};

			this.send = function(){
				var self = this;
				if(!this.model.name){
					toastr.error("Please insert A valid name.", "Invalid Text");
					return;
				};

				if(!this.model.email || !General.isValid(this.model.email)){
					toastr.error("Please insert a valid e-mail.", "Invalid Text");
					return;
				};

				if(!this.model.email || this.model.email == ""){
					toastr.error("Please insert a valid comment.", "Invalid Text");
					return;
				};
				this.model.date = (new Date).getTime();
				General.loading(true);
				ParseTable.save(this.model).then(function(object) {
					toastr.success("Comment sucessful added!", "Success!");
					General.loading(false);
					self.getComments();
				});
			};

			this.getComments = function(){
				var self = this;
				this.model = {
					"name" : "",
					"email" : "",
					"comment" : "",
					"pokeID" : pokeID
				};
				ParseQuery.equalTo("pokeID", pokeID);
				ParseQuery.find({
					success: function(data){
						self.data = [];
						for(var i in data){
							self.data.push({
								"name" : data[i].get("name"),
								"email" : data[i].get("email"),
								"comment" : data[i].get("comment"),
								"date" : data[i].get("date"),
								"pokeID" : data[i].get("pokeID"),
							});
						}
						setTimeout($rootScope.$apply());
					},
					error: function(err){
						console.error(err);
					}
				});
			};

			this.getComments();
        }

    	return Comment; 
    }

})();