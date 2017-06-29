var button = document.getElementById("btn");
button.onclick = function () {
    alert("BUTTON CLICKED!", "AM I A TITLE?");
    Array.from(document.getElementById("Father").children).forEach(function(element, index) {//NO HASHTAG?//CHILDREN OF GET ELEMENT BY ID RETURN A COLLECTION BUT ITS A GENERIC ONE
        if(element.localName == "input"){//NATURAL NAME OF HTML TAG //we could use nodename but it returns all caps   //SO WE USE ARRAY.FROM FUNCTION TO CONVERT IT TO ARRAY SINCE FOREACH REQUIERES ONE
            console.log("log " + index.toString());
        }
        element.value = '';
    }, this);
};