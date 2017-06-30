
const remote = require('electron').remote;//REMOTE MENS THE MAIN PROCESS DEFINED IN OUR PACKAGE.JSON
const BrowserWindow = remote.BrowserWindow;
var login_win = remote.getCurrentWindow();
//var menu = remote.require('menu');


var button = document.getElementById("btn");
button.onclick = function () {
    // alert("BUTTON CLICKED!", "AM I A TITLE?");
    // Array.from(document.getElementById("Father").children).forEach(function(element, index) {//NO HASHTAG?//CHILDREN OF GET ELEMENT BY ID RETURN A COLLECTION BUT ITS A GENERIC ONE
    //     if(element.localName == "input"){//NATURAL NAME OF HTML TAG //we could use nodename but it returns all caps   //SO WE USE ARRAY.FROM FUNCTION TO CONVERT IT TO ARRAY SINCE FOREACH REQUIERES ONE
    //         console.log("log " + index.toString());
    //     }
    //     element.value = '';
    // }, this);

    var usuario = document.getElementById("input_uss");
    var contraseña = document.getElementById("input_pass");

    if (usuario.value == "admin" && contraseña.value == "admin") {
        alert("Ingreso correcto", "Informacion");

        var api_win = new BrowserWindow({ width: 700, height: 600 });
        api_win.webContents.on('did-finish-load', () => {
            login_win.destroy();
            api_win.show();
            api_win.focus();
        });
        api_win.loadURL('file://${__dirname}/api/api.html');
    }

    else {
        alert("Credenciales incorrectas, intente denuevo");
        usuario.value = "";
        contraseña.value = "";
        usuario.focus();
    };
};