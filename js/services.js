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
			$.ajax({
			  method: params.method,
			  url: params.url,
			  data: params.data
			}).done(function( result ) {			    
			    console.log(result);
			});
		}
    };

    window.Services = window.Services || Services;
})();