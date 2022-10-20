// querySelector()
document.querySelector("body").style.lineHeight = "1";
document.querySelector("header").style.background = "#151515";
document.querySelector("nav").style.float = "right";
document.querySelector("nav").style.marginTop = "30px";
document.querySelector("nav").style.marginRight = "10px";

//querySelectorAll()
let sectionElements = document.querySelectorAll("section");
for (var i = 0; i < sectionElements.length; i++) {
  sectionElements[i].style.margin = "40px 0 60px";
}

// getElementById()
document.getElementById("logo").style.cssText =
  "background:url(images/logo.png) no-repeat; height: 70px; width: 280px; float: left; text-indent: -10000px;";

//getElementsByName()
let posElements = document.getElementsByName("pos-li");
for (var i = 0; i < posElements.length; i++) {
  posElements[i].style.float = "left";
  posElements[i].style.width = "32%";
}

//getElementsByTagName()
let h2Elements = document.getElementsByTagName("h2");
for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.cssText = " margin:0; padding:0; border:0; outline:0; font-size:100%; vertical-align:baseline; background:transparent; font-family: arial;";
  }

// getElementsByClassName()
let wrapperElements = document.getElementsByClassName("wrapper");
for (var i = 0; i < wrapperElements.length; i++) {
  wrapperElements[i].style.width = "100%";
  wrapperElements[i].style.maxWidth = "960px";
  wrapperElements[i].style.margin = "0 auto";
}
