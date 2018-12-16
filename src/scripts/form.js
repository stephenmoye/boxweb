function openForm() {
    var element = document.getElementById("main");
    var element2 = document.getElementById("side-btn");
    var element3 = document.getElementById("form");

    // element.classList.toggle("form-open", "form-close");
    // element2.classList.toggle("form-open", "form-close");
    // element3.classList.toggle("form-open", "form-close");

  if (element.className == "form-close" && element2.className == "form-close" && element3.className == "form-close" ){
    element.classList.toggle("form-open");
    element2.classList.toggle("form-open");
    element3.classList.toggle("form-open");
    element.classList.toggle("form-close");
    element2.classList.toggle("form-close");
    element3.classList.toggle("form-close");

    // document.getElementById("main", "side-btn", "form").className = "form-open";
    console.log("open menu");
  } else {
    element.classList.toggle("form-close");
    element2.classList.toggle("form-close");
    element3.classList.toggle("form-close");
    element.classList.toggle("form-open");
    element2.classList.toggle("form-open");
    element3.classList.toggle("form-open"); 
    //document.getElementById("main", "side-btn", "form").className = "form-close";
    console.log("close menu");
  }
}
