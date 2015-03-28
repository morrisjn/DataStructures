(function () {
    'use strict';

    var _dataStructures = {};

    _dataStructures.initialize = function () {
		this.createLinkedList();
    };    

    _dataStructures.createLinkedList = function () {
    	var List    = new window.List();
        var ListB   = new window.List();
        List.initialize();
        ListB.initialize();

    	for(var x = 0, length = 10; x < length; x++) {
			List.addNode(  { data: Math.floor((Math.random() * 100) + 1) } );
            ListB.addNode( { data: Math.floor((Math.random() * 100) + 1) } );
    	}

        List.addNode( { data: Math.floor((Math.random() * 100) + 1) } );

    	//List.deleteNode( { data: 3} );
        debugger;
        //List.output();

        var newList = List.addList( { list: ListB } );
        newList.output();
    };

    window.dataStructures = window.dataStructures || _dataStructures;
})();