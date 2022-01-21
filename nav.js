
window.onload=function highThis(){highURL("nav","hover");}
function highURL(nav,classCur){
    if(!document.getElementById) return false;
    if(!document.getElementById(nav)) return false;
    if(!document.getElementsByTagName) return false;
    var menuId=document.getElementById(nav);
    var links=menuId.getElementsByTagName("a");
    for(var i=0; i<links.length; i++ ){
        var menuLink=links[i].href;
        var currentLink=window.location.href;
        if(currentLink.indexOf(menuLink)!=-1){
            links[i].className=classCur;
        }
    }
}

