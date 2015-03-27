(function () {
    'use strict';

    function List(params) {
        var self 	= this;

        self.start 	= null;
        self.end 	= null;
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
	    deleteNode: function (params) {
			var self = this;
			var currentNode = self.start;
			var previousNode = currentNode;

			while(currentNode != null) {
				if(currentNode.data == params.data) {
					if(self.start == currentNode) {//First Node
						self.start = currentNode.next;
						return;
					}

					if(self.end == currentNode) {//Last Node
						self.end = previousNode;
						previousNode.next = null;
						return;
					}

					previousNode.next = currentNode.next
					return;
				}	

				previousNode = currentNode;
				currentNode = currentNode.next;					
			}

			return;
	    }
	};

    window.List = window.List || List;
})();