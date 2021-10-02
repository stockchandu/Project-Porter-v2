//  FORM

function register() {

  var name = document.getElementById("nm").value;
  var city = document.getElementById("myselect").value;
  var mobile = document.getElementById("mobile").value;


  if (name === "") {
    let nm = document.getElementById("nm");
    nm.style.border = "2px solid red"; document.getElementById("required").style.display = "block";
    nm.style.marginBottom = "0px";
  }
  else {
    let nm = document.getElementById("nm");
    nm.style.border = "none";
    document.getElementById("required").style.display = "none";
    nm.style.marginBottom = "5%";
  }

  if (mobile === "" || mobile.length < 10) {
    let mble = document.getElementById("mobile");
    mble.style.border = "2px solid red";
    let msg = document.getElementById("required2");

    if (mobile === "") {
      msg.textContent = "*This field is required";
      msg.style.display = "block";
   
    }
    else if (mobile.length < 10) {
      msg.style.display = "block";
      msg.textContent = "*Enter valid 10 digit number";
      msg.style.marginRight = "30%";
    }
    mble.style.marginBottom = "0px";
  }
  else {
    let mble = document.getElementById("mobile");
    mble.style.border = "none";
    mble.style.marginBottom = "5%";
    let msg = document.getElementById("required2");
    msg.style.display = "none";

  }

  if (city === "CITY") {
    city = "";
    document.getElementById("myselect").style.border = "2px solid red";
  }
  else {
    document.getElementById("myselect").style.border = "none";
  }





  var vehicle = document.getElementById("myselect2").value;
  if (vehicle === "SELECT VEHICLE") {
    vehicle = "";
    document.getElementById("myselect2").style.border = "2px solid red";
  }
  else {
    document.getElementById("myselect2").style.border = "none";
  }



  var hearabt = document.getElementById("myselect3").value;
  if (hearabt === "WHERE DID YOU HEAR ABOUT US?") {
    hearabt = "";
    document.getElementById("myselect3").style.border = "2px solid red";
  }
  else {
    document.getElementById("myselect3").style.border = "none";
  }


  // when all details r filled it makes to move to another page

  if (name !== "" && city !== "" && vehicle !== "" && hearabt !== "" && (mobile !== "" && mobile.length === 10)) {
    document.getElementById("details").style.display = "none";
    document.getElementById("extradiv").style.display = "block";

  }

  var blk = document.getElementById("entername");
  blk.textContent = name;
  var btn = document.getElementById("white");

  btn.addEventListener("mouseover", function (event) {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "#2962ff"
  });
  btn.addEventListener("mouseout", function (event) {

    event.target.style.color = "#2962ff";
    event.target.style.backgroundColor = "white";
  });


}

function back() {
  document.getElementById("nm").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("myselect").value = "CITY";
  document.getElementById("myselect2").value = "SELECT VEHICLE";
  document.getElementById("myselect3").value = "WHERE DID YOU HEAR ABOUT US?";
  document.getElementById("extradiv").style.display = "none";
  document.getElementById("details").style.display = "block";
}

//Multiple vehicle
function topfunction(){
    document.documentElement.scrollTop = 0;
}

// FAQ
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    console.log(content);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });


}
