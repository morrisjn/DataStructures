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

        debugger;
    	
        //List.output();

        testList_deleteNode( { list: List, index: [3, 1], expectedDeletions: [47, 89] } );
        testList_reverse( { list: List } );
    };

    function testList_deleteNode(params) {
        var deleteList      = params.list.clone();//Copy without reference

        //Delete indexes
        for(var x = 0, length = params.index.length; x < length; x++) {
            deleteList.deleteNode( { index: params.index[x] } );
        }

        //Convert both lists to arrays
        var listArray       = params.list.convertToArray();
        var deleteArray     = deleteList.convertToArray();
        var deletionArray   = $(listArray).not(deleteArray).get();//Compare results

        console.log("Testing Deletion with: " + listArray);

        //Compare JSON stringified arrays.
        if(JSON.stringify(params.expectedDeletions) == JSON.stringify(deletionArray)) {
            console.log("Deletion Test: Passed. Deleted: " + deletionArray);
            return true;
        }

        console.log("Deletion Test: Failed");
        return false;
    };

    function testList_reverse(params) {
        //Create Reverse List
        var reverseList     = params.list.clone();//Copy without reference
        reverseList.reverse();

        //Convert both lists to arrays
        var listArray       = params.list.convertToArray();
        var reverseArray    = reverseList.convertToArray();

        console.log("Testing Reverse with: " + listArray);

        //Reverse one of the arrays
        reverseArray.reverse();

        //Compare JSON stringified arrays.
        if(JSON.stringify(listArray) == JSON.stringify(reverseArray)) {
            console.log("Reverse Test: Passed");
            return true;
        }

        console.log("Reverse Test: Failed");
        return false;
    };


    window.dataStructures = window.dataStructures || _dataStructures;
})();