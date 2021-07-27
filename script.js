var a  = document.createElement('ul');
var b = document.createElement('li');
for (let i = 0; i < 5; i++) {
    a.appendChild('li').innerHTML(i);
}

var a = window.confirm('Are you shure you want to delete it?');

fetch('api', function(arr) {
    arr.forEach(function (a){
        var a = document.createElement('div').innerText(a);
    }) 
})