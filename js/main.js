(function () {
    'use strict';

    var _dataStructures = {};

    _dataStructures.initialize = function () {
		this.createLinkedList();
    };    

    _dataStructures.createLinkedList = function () {
    	var List    = new window.List();
        var ListB   = new window.List();

        var testArr = [37,47,24,89,73,85,5,65,93,83];
        for(var x = 0, length = testArr.length; x < length; x++) {
            List.addNode(  { data: testArr[x] } );
        }        

        /*for(var x = 0, length = 10; x < length; x++) {
			List.addNode(  { data: Math.floor((Math.random() * 100) + 1) } );
            ListB.addNode( { data: Math.floor((Math.random() * 100) + 1) } );
    	}*/

        //debugger;
    	
        //List.output();

        testList_deleteNode( { list: List, index: [3, 1], expectedDeletions: [47, 89] } );
        testList_reverse( { list: List } );

        var ListLoop = List.clone();
        ListLoop.end = ListLoop.start.next;
        testList_hasLoop({ list: ListLoop });
    };

    window.dataStructures = window.dataStructures || _dataStructures;
})();