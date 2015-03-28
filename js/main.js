(function () {
    'use strict';

    var _dataStructures = {};

    _dataStructures.initialize = function () {
		this.createLinkedList();
    };    

    _dataStructures.createLinkedList = function () {
    	var List = new window.List();
    	List.initialize();

    	for(var x = 0, length = 10; x < length; x++) {
			List.addNode( { data: Math.floor((Math.random() * 100) + 1) } );
    	}

    	//List.deleteNode( { data: 3} );
        debugger;
        List.output();
        List.bubbleSort();
        List.output();
    };

    window.dataStructures = window.dataStructures || _dataStructures;
})();