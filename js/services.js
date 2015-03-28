(function () {
    'use strict';

	function Services(params) {
        var self 	= this;

        self.initialize();
	};

    Services.prototype = {
		initialize: function (params) {
			var self 	= this;
		},
		ajaxCall: function(params) {
			return $.ajax({
			  method: params.method,
			  url: params.url,
			  data: params.data
			}).then(function( results ) {			    
			    console.log(results);
			    return results;
			});
		},
		// csvToJson: function(params) {
		// 	debugger;
		// }
    };

    window.Services = window.Services || Services;
})();