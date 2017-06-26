var button = document.getElementById("btn");
button.onclick = function () {
    alert("BUTTON CLICKED!", "AM I A TITLE?");
    document.getElementById("Father").childNodes.forEach(function(node, index) {//NO HASHTAG?
        if(node.localName == 'input'){//NATURAL NAME OF HTML TAG
            console.log("log " + index.toString());
        }
        node.nodeValue = '';
    }, this);
};