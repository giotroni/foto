// MAIN
var app = {
    initialize: function() {
      this.bind();
    },
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    scattaFoto: function(){
        if (!navigator.camera) {
            app.showAlert("Camera API not supported", "Error");
            return;
        } else {
            app.showAlert("Scatto...", "Pronto?");
        }
        var options =   {   quality: 50,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
                            encodingType: 0     // 0=JPG 1=PNG
                        };
     
        navigator.camera.getPicture(
            function(imageData) {
                app.showAlert('Foto fatta', 'OK');
            },
            function() {
                app.showAlert('Error taking picture', 'Error');
            },
            options);
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
        // alert("ok");
        $("#btnFoto").on("click", app.scattaFoto);
    },
     
    deviceready: function() {
    }
}

$(document).ready(function() {
    app.initialize();
}