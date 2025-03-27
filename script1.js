function addNewWEField() {
  // console.log("Adding New field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}
function addNewAQField() {
  // console.log("Adding New field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("cols", 100);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
function addNewPPField() {
  // console.log("Adding New field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("ppField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter Here");

  let ppOb = document.getElementById("pp");
  let ppAddButtonOb = document.getElementById("ppAddButton");

  ppOb.insertBefore(newNode, ppAddButtonOb);
}
function addNewSKField() {
  // console.log("Adding New field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter Here");

  let skOb = document.getElementById("sk");
  let skAddButtonOb = document.getElementById("skAddButton");

  skOb.insertBefore(newNode, skAddButtonOb);
}
function addNewACHField() {
  // console.log("Adding New field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("achField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter Here");

  let achOb = document.getElementById("ach");
  let achAddButtonOb = document.getElementById("achAddButton");

  achOb.insertBefore(newNode, achAddButtonOb);
}
function addNewCERField() {
  // console.log("Adding New field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("cerField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "Enter Here");

  let cerOb = document.getElementById("cer");
  let cerAddButtonOb = document.getElementById("cerAddButton");

  cerOb.insertBefore(newNode, cerAddButtonOb);
}
//generating CV

// console.log("generate cv");

function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nmaeT1 = document.getElementById("nameT1");
  nmaeT1.innerHTML = nameField;
  //direct

  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //address

  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  //link
  document.getElementById("lnT").innerHTML =
    document.getElementById("linkedField").value;

  document.getElementById("gitT").innerHTML =
    document.getElementById("gitField").value;

  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;

  // objective

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //work exp
  let wes = document.getElementsByClassName("weField");
  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value}</li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //Academic q
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  // Personal Project
  let pps = document.getElementsByClassName("ppField");
  let str2 = "";

  for (let e of pps) {
    str2 = str2 + `<li> ${e.value}</li>`;
  }

  document.getElementById("ppT").innerHTML = str2;

  // Skills
  let sks = document.getElementsByClassName("skField");
  let str3 = "";

  for (let e of sks) {
    str3 = str3 + `<li> ${e.value}</li>`;
  }

  document.getElementById("skT").innerHTML = str3;

  // Achievements
  let achs = document.getElementsByClassName("achField");
  let str4 = "";

  for (let e of achs) {
    str4 = str4 + `<li> ${e.value}</li>`;
  }

  document.getElementById("achT").innerHTML = str4;

  // Certificates
  let cers = document.getElementsByClassName("cerField");
  let str5 = "";

  for (let e of cers) {
    str5 = str5 + `<li> ${e.value}</li>`;
  }

  document.getElementById("cerT").innerHTML = str5;

  //code for setting image
  let fileInput = document.getElementById("imageField");
  let file = fileInput.files[0];
  if (file) {
    let reader = new FileReader();

    reader.onloadend = function () {
      // Set img source to the loaded image data URL
      document.getElementById("imgT").src = reader.result;
    };

    reader.readAsDataURL(file);
  } else {
    console.error("No file selected for image");
  }

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}
// //print cv
function printCV() {
  window.print();
}
