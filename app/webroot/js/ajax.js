$(document).ready(function() {
	$('.nav li').on('click','a', function() {
	    console.log($(this).data("pageName")); 
	    var pageName = $(this).data("pageName");

	    $.ajax('/app/webroot/ajax/'+ pageName +'.ctp', {
	        success: function(response) {
	            $('.mainContent').html(response).append();
	        }
	    }).done(function(){
	    	$(document).ready(function() {
			    (function() {
			        // link selector and pop-up window size
			        var Config = {
			            Link: "ul.shareThis li a",
			            Width: 500,
			            Height: 500
			        };
			     
			        // add handler links
			        var slink = document.querySelectorAll(Config.Link);
			        for (var a = 0; a < slink.length; a++) {
			            slink[a].onclick = PopupHandler;
			        }
			     
			        // create popup
			        function PopupHandler(e) {
			     
			            e = (e ? e : window.event);
			            var t = (e.target ? e.target : e.srcElement);
			     
			            // popup position
			            var
			                px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			                py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
			     
			            // open popup
			            var popup = window.open(t.href, "social", 
			                "width="+Config.Width+",height="+Config.Height+
			                ",left="+px+",top="+py+
			                ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
			            if (popup) {
			                popup.focus();
			                if (e.preventDefault) e.preventDefault();
			                e.returnValue = false;
			            }
			            return !!popup;

			        }
			     
			    }());
			},'.mainContent');
	    });
	    var url = $(this).data("url");
	    var stateObj = { obj: url };
		history.pushState(stateObj, "",url);
	});

	$('.sliderImages div').on('click','a', function() {
	    console.log($(this).data("pageName")); 
	    var pageName = $(this).data("pageName");

	    $.ajax('/app/webroot/ajax/'+ pageName +'.ctp', {
	        success: function(response) {
	            $('.mainContent').html(response).append();
	        }
	    }).done(function(){
	    	$(document).ready(function() {
			    (function() {
			        // link selector and pop-up window size
			        var Config = {
			            Link: "ul.shareThis li a",
			            Width: 500,
			            Height: 500
			        };
			     
			        // add handler links
			        var slink = document.querySelectorAll(Config.Link);
			        for (var a = 0; a < slink.length; a++) {
			            slink[a].onclick = PopupHandler;
			        }
			     
			        // create popup
			        function PopupHandler(e) {
			     
			            e = (e ? e : window.event);
			            var t = (e.target ? e.target : e.srcElement);
			     
			            // popup position
			            var
			                px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			                py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
			     
			            // open popup
			            var popup = window.open(t.href, "social", 
			                "width="+Config.Width+",height="+Config.Height+
			                ",left="+px+",top="+py+
			                ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
			            if (popup) {
			                popup.focus();
			                if (e.preventDefault) e.preventDefault();
			                e.returnValue = false;
			            }
			            console.log('what the fuck');
			            return !!popup;

			        }
			     
			    }());
			},'.mainContent');
	    }); 
	});

	$('.imageItems').on('click','li', function() {
	    console.log($(this).data("pageName")); 
	    var pageName = $(this).data("pageName");

	    $.ajax('/app/webroot/ajax/'+ pageName +'.ctp', {
	        success: function(response) {
	            $('.mainContent').html(response).append();
	        }
	    }).done(function(){
	    	$(document).ready(function() {
			    (function() {
			        // link selector and pop-up window size
			        var Config = {
			            Link: "ul.shareThis li a",
			            Width: 500,
			            Height: 500
			        };
			     
			        // add handler links
			        var slink = document.querySelectorAll(Config.Link);
			        for (var a = 0; a < slink.length; a++) {
			            slink[a].onclick = PopupHandler;
			        }
			     
			        // create popup
			        function PopupHandler(e) {
			     
			            e = (e ? e : window.event);
			            var t = (e.target ? e.target : e.srcElement);
			     
			            // popup position
			            var
			                px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
			                py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
			     
			            // open popup
			            var popup = window.open(t.href, "social", 
			                "width="+Config.Width+",height="+Config.Height+
			                ",left="+px+",top="+py+
			                ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
			            if (popup) {
			                popup.focus();
			                if (e.preventDefault) e.preventDefault();
			                e.returnValue = false;
			            }
			            console.log('what the fuck');
			            return !!popup;

			        }
			     
			    }());
			},'.mainContent');
	    }); 
	});


});

$(document).ready(function() {
    (function() {
        // link selector and pop-up window size
        var Config = {
            Link: "ul.shareThis li a",
            Width: 500,
            Height: 500
        };
     
        // add handler links
        var slink = document.querySelectorAll(Config.Link);
        for (var a = 0; a < slink.length; a++) {
            slink[a].onclick = PopupHandler;
        }
     
        // create popup
        function PopupHandler(e) {
     
            e = (e ? e : window.event);
            var t = (e.target ? e.target : e.srcElement);
     
            // popup position
            var
                px = Math.floor(((screen.availWidth || 1024) - Config.Width) / 2),
                py = Math.floor(((screen.availHeight || 700) - Config.Height) / 2);
     
            // open popup
            var popup = window.open(t.href, "social", 
                "width="+Config.Width+",height="+Config.Height+
                ",left="+px+",top="+py+
                ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");
            if (popup) {
                popup.focus();
                if (e.preventDefault) e.preventDefault();
                e.returnValue = false;
            }
            console.log('what the fuck');
            return !!popup;

        }
     
    }());
},'.mainContent');