function connav(){
    let domNav = document.getElementById("nav");
    if(domNav.className === "base"){
        domNav.className += " dropdown";
    }else{
        domNav.className = "base"
    }
}