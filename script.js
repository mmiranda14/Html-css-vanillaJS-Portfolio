let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        for (var i = 0; i < myObj.length; i++){
            addRepo(myObj[i].name);
        }
    }
};

newRequest.open("GET", "https://api.github.com/users/mmiranda14/repos", true);
newRequest.send();

function addRepo(name) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(name);
    node.appendChild(textNode);
    document.getElementById("repo").appendChild(node);
}