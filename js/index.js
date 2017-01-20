
var app = {

    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
		var ref = cordova.InAppBrowser.open('https://www.lasuerteencasa.com/index.php?gMobile=1&app=1', '_self', 'location=no');
    }
};
