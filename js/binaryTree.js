(function () {
    'use strict';

    function List(params) {
        var self 	= this;

        self.start 	= null;
        self.end 	= null;

        self.initialize();
    };

    List.prototype = {
	    initialize: function (params) {
	        var self 	= this;

	        self.start 	= self.createNode(); 
	        self.end 	= self.start;
	    },
	    createNode: function (params) {
	    	var myData = params || {};

	        return {
	        	data: (myData.data == null) ? null : myData.data,
	        	next: myData.next || null
	        };
	    },
	    addNode: function (params) {
	    	var self 			= this;

	    	if(self.start && !self.start.data) {
	    		self.start 		= self.createNode( { data: params.data } );
	    		self.end 		= self.start;
	    	} else {
	    		self.end.next 	= self.createNode( { data: params.data } );
				self.end 		= self.end.next;	
	    	}
	    },
	    traverseList: function (params) {
	    	var self = this;
			var currentNode = self.start;

			while(currentNode != null) {
				params.callback(currentNode);
				currentNode = currentNode.next;
			}

			return;
	    },
	    output: function (params) {
			var self = this;
			var callback = function(params) { 
				console.log(params.data);
			};

			self.traverseList({ callback: callback });
	    }
	};

    window.List = window.List || List;
})();