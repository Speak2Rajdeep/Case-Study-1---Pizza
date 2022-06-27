//Show Details Function
function viewDetails() {
  var x = "";

  //Name
  x += "Name : " + document.getElementsByName("name")[0].value + "<br>";

  //Email
  x += "Email ID : " + document.getElementsByName("email")[0].value + "<br>";

  //Phone
  x += "Phone No : " + document.getElementsByName("phoneNo")[0].value + "<br>";

  //console.log(document.getElementsByName("phoneNo")[0].value);
  //For Pizza Radio Button
  var ele = document.getElementsByName("same");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) x += "Pizza : " + ele[i].value + "<br>";
  }

  //For Pizza Size Radio Button
  var ele = document.getElementsByName("same2");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) x += "Pizza Size : " + ele[i].value + "<br>";
  }

  //For Pizza Crust Radio Button
  var ele = document.getElementsByName("same3");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) x += "Pizza Crust : " + ele[i].value + "<br>";
  }

  //Payment
  x +=
    "Payment Method : " +
    document.getElementsByName("payment")[0].value +
    "<br>";

  //Discount
  x +=
    "Discount Code : " +
    document.getElementsByName("discount")[0].value +
    "<br>";

  const viewpoint = document.getElementById("view");
  viewpoint.style.display = "block";
  viewpoint.style.border = "1px solid rgb(35, 137, 165)";
  document.getElementById("view").innerHTML = x;
}

function validateDetails() {
  var valid = true;

  let customerName = document.getElementById("name");
  let permissibleCharsInName = /^[A-Za-z ]+$/;

  let emailId = document.getElementById("email");
  let permissibleEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  //condition to validate name
  if (
    customerName.value.trim() == "" ||
    !customerName.value.match(permissibleCharsInName)
  ) {
    alert("Enter a valid name");
    valid = false;
  }

  //condition to validate Email ID
  if (emailId.value.trim() == "" || !emailId.value.match(permissibleEmail)) {
    alert("Enter a valid email id");
    valid = false;
  }

  //condition to validate phone number
  var phNo = document.getElementById("phone");
  validTemp = validatePhoneNumber(phNo.value);
  if (!validTemp) valid = false;

  //condition to validate discount code
  var diCode = document.getElementById("discount").value;

  if (diCode.length > 0) {
    validTemp = validateDiscount(diCode);
    if (!validTemp) valid = false;
  }

  //Validate CheckBox
  if (!document.getElementById("agree").checked) {
    valid = false;
  }

  //validate pizza type
  var pizzaType = document.getElementsByName("same");
  validTemp = false;
  for (i = 0; i < pizzaType.length; i++) {
    if (pizzaType[i].checked) {
      validTemp = true;
      break;
    }
  }

  if (!validTemp) {
    alert("Please select a Pizza Type");
    valid = false;
  }

  //validate pizza size
  var pizzaSize = document.getElementsByName("same2");
  validTemp = false;
  for (i = 0; i < pizzaSize.length; i++) {
    if (pizzaSize[i].checked) {
      validTemp = true;
      break;
    }
  }

  if (!validTemp) {
    alert("Please select a Pizza Size");
    valid = false;
  }

  //validate pizza crust
  var pizzaCrust = document.getElementsByName("same3");
  validTemp = false;
  for (i = 0; i < pizzaCrust.length; i++) {
    if (pizzaCrust[i].checked) {
      validTemp = true;
      break;
    }
  }
  if (!validTemp) {
    alert("Please select a Pizza Crust");
    valid = false;
  }

  //validate payment method
  var payment = document.getElementById("payment").value;
  if (payment != ("cod" || "Credit" || "Debit" || "Paytm")) {
    valid = false;
  }

  if (valid) {
    alert("Validation Successful");
    window.location.href = "./successfull.html";
  } else {
    alert("Please fill in the details correctly! ");
    return false;
  }
}

function validatePhoneNumber(phone) {
  if (phone.length != 10) {
    alert("Phone Number should have 10 digits");

    return false;
  }
  return true;
}

function validateDiscount(diCode) {
  let pattern = /\bPIZDIS/;
  if (diCode.search(pattern) != -1) {
    return true;
  } else {
    alert("Please enter a valid Discount code");
    return false;
  }
}

var button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateDetails();
});
