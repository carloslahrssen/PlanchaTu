var link = document.getElementById('button-propuesta');
link.onclick=function(){
    this.href = "mailto:planchatujefferson@gmail.com?subject=Propuesta&body=";
    this.href += getBody();
}
function getBody(){
    return document.getElementById('propuesta-input').value;
}
