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

    function testList_hasLoop(params) {

    };
