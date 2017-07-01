
const remote = require('electron').remote;//REMOTE MENS THE MAIN PROCESS DEFINED IN OUR PACKAGE.JSON
const BrowserWindow = remote.BrowserWindow;
const main = remote.require('./main.js');
//const ipc = require('ipc');
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

    if (usuario.value == "adriangustavo98@gmail.com" && contraseña.value == "12345") {
        alert("Ingreso correcto", "Informacion");
        
        //var api_win = new BrowserWindow({ width: 700, height: 600, frame:false, show:false });
        
        //api_win.webContents.on('did-finish-load', () => {
        //login_win.destroy();
        //api_win.show();
        //api_win.loadURL(`file://${__dirname}/api/api.html`);
        
        //api_win.show();
        //api_win.focus();
        //});
        main.openWindow();
        login_win.destroy();
    }

    else {
        alert("Credenciales incorrectas, intente denuevo", "Error");
        usuario.value = "";
        contraseña.value = "";
        usuario.focus();
    };
};