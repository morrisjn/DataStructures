(function () {
    'use strict';

    var _dataStructures = {};

    _dataStructures.initialize = function () {
		debugger;

		this.createLinkedList();
    };    

    _dataStructures.createLinkedList = function () {
    	var List = new window.List();
    	List.initialize();

    	for(var x = 0, length = 10; x < length; x++) {
			List.addNode( { data: x } );
    	}

    	List.deleteNode( { data: 3} );
    	List.deleteNode( { data: 1} );
    	List.deleteNode( { data: 9} );
    };

    window.dataStructures = window.dataStructures || _dataStructures;
})();