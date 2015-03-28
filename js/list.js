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
	    },
	    bubbleSort: function (params) {
	    	var self 		= this;
			var currentNode = self.start;
			var nextNode 	= self.start.next
			var endNode 	= self.end;
			var previousNode= {};

			while(currentNode != endNode) {
				do {
					if(nextNode && currentNode.data > nextNode.data) {
						var tmp 			= currentNode.data;
						currentNode.data 	= nextNode.data;
						nextNode.data 		= tmp;
					}

					previousNode= currentNode;
					currentNode = currentNode.next;
					nextNode 	= nextNode.next;
				} while (currentNode != endNode);

				endNode 		= previousNode;
				currentNode 	= self.start;
				nextNode 		= self.start.next;
			}
	    	
	    },
	    //Add each node of two lists together and store it in a new list
	    addList: function (params) {
			var self 			= this;
			var currentNodeA 	= self.start;
			var currentNodeB 	= params.list.start;
			var newList 		= new window.List();

			while(currentNodeA != null || currentNodeB != null ) {
				var num = ((currentNodeA) ? currentNodeA.data : 0) + ((currentNodeB) ? currentNodeB.data : 0) ;
				newList.addNode( { data:  num} );

				console.log("Added: " + num);

				currentNodeA = (currentNodeA) ? currentNodeA.next : null;
				currentNodeB = (currentNodeB) ? currentNodeB.next : null;
			}

			return newList;
	    },
	    reverse: function (params) {
			var self 			= this;
			var previousNode 	= null;
			var currentNode		= self.start;			
			var nextNode 		= self.start.next;
			self.start 			= self.end;
			self.end 			= currentNode;

			while(currentNode != null) {
				currentNode.next= previousNode;

				previousNode 	= currentNode;
				currentNode 	= nextNode;
				nextNode 		= (nextNode) ? nextNode.next : null;
			}
	    },
	    convertToArray: function (params) {
			var self 		= this;
			var myData 		= [];
			var currentNode = self.start;

			while(currentNode != null) {
				myData.push(currentNode.data);
				currentNode = currentNode.next;
			}


			return myData;
	    },
	    clone: function(params) {
			var self 		= this;
			var myData 		= new window.List();
			var currentNode = self.start;

			while(currentNode != null) {
				myData.addNode( { data: currentNode.data } );
				currentNode = currentNode.next;
			}

			return myData;	    	
	    }
	};

    window.List = window.List || List;
})();