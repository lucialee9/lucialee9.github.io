/*
Author: Ziyang Wang
Date written: 15 June 2023
Notes: Assignment Form Validation

Pseudocode
Program Assignment Form Validation Part3

"Go To Other Websites" BUTTON:
FUNCTION openWebsite():
	INPUT userChoice FROM PROMPT
	WHILE input string of userChoice is not in whole number form OR userChoice as INTEGER < 1 OR userChoice as INTEGER > 3
		OUTPUT Error
		INPUT userChoice FROM PROMPT
	ENDWHILE
	IF userChoice is "1"
		Go to Website 1
		Break
	ELSE 
	  	IF userChoice is "2"
			Go to Website 2
			Break
		ELSE
			Go to Website 3
			Break
		ENDIF
	ENDIF

"Help" BUTTON:
FUNCTION openHelp():
  Go to Help Website
  Return
END

"Submit" BUTTON:
PROGRAM form
  INPUT firstName, lastName, postCode, email, 
  payment, cardNumber, ccv, expiryMonth, expiryYear
  onsubmit = return validateForm()
END

FUNCTION validateForm():

  IF (firstName =="") THEN
	  OUTPUT error in firstName
    SET FOCUS TO firstName INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  IF (lastName =="") THEN
	  OUTPUT error in lastName
    SET FOCUS TO lastName INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  IF (postCode =="" OR) THEN
	  OUTPUT error in postCode
    SET FOCUS TO postCode INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  IF (postCode.length != 4 OR isNaN)
    OUTPUT error in postCode
    SET FOCUS TO postCode INPUT BOX
    RETURN FALSE
  ENDIF
  CLEAR ERROR WHEN VALID

  IF (email =="") THEN
	  OUTPUT error in email
    SET FOCUS TO email INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  // Validate email at least 8 character-long
  IF (email.length < 8) THEN
	  OUTPUT error in email
    SET FOCUS TO email INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  // Validate email contain @ and . (dot)
  IF (email.indexOf("@") === -1 || email.lastIndexOf(".") === -1)) THEN
	  OUTPUT error in email
    SET FOCUS TO email INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  IF (payment =="") THEN
	  OUTPUT error in payment
    SET FOCUS TO payment DROP-DOWN
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  IF (cardNumber =="") THEN
	  OUTPUT error in cardNumber
    SET FOCUS TO cardNumber INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  // Validate cardNumber has 16 numbers
  IF (cardNumber.length != 16 OR isNaN)
    OUTPUT error in cardNumber
    SET FOCUS TO cardNumber INPUT BOX
    RETURN FALSE
  ENDIF

  IF (ccv =="") THEN
	  OUTPUT error in ccv
    SET FOCUS TO ccv INPUT BOX
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  // Validate ccv has 3 numbers
  IF (ccv.length != 3 OR isNaN)
    OUTPUT error in ccv
    SET FOCUS TO ccv INPUT BOX
    RETURN FALSE
  ENDIF
  CLEAR ERROR WHEN VALID

  // Check card expiry
  IF (expiryMonth =="") THEN
	  OUTPUT error in expiryMonth
    SET FOCUS TO expiryMonth DROP-DOWN
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  IF (expiryYear =="") THEN
	  OUTPUT error in expiryYear
    SET FOCUS TO expiryYear DROP-DOWN
	  RETURN false
  ENDIF  
  CLEAR ERROR WHEN VALID

// Check Credit Card Expiry
USING JavaScrpit Built-In Methods:
  SET currentYear to the current year
  SET currentMonth to the current month (incremented by 1)

  IF expiryYear is less than the currentYear
    OUTPUT error in expiryYear
    OUTPUT error for CARD EXPIRED
    SET FOCUS TO expiryYear DROP-DOWN
	  RETURN false
  ENDIF  
  CLEAR ERROR WHEN VALID
  
  IF expiryYear is equal to currentYear AND expiryMonth is less than currentMonth THEN
    OUTPUT error in expiryMonth
    OUTPUT error for CARD EXPIRED
    SET FOCUS TO expiryMonth DROP-DOWN
	  RETURN false
  ENDIF
  CLEAR ERROR WHEN VALID

  RETURN TRUE

FUNCTION changeBgd(textField):
  Change textfield bakground color to be orange
  
FUNCTION resetBgd(textField)
  Change textfield bakground color back to white

END PROGRAM
*/

// Define fucntion when called by on click event
function openWebsite() {
  // Define user input variable
  var userChoice = "";
  // Obtain user input from prompt dialogue and assign it to the variable
  userChoice = prompt("Please choose which of Taylor's social media websites you want to go.\n1.Facebook\n2.Twitter\n3.Instagram", "1");
  // Keep looping while user input is either not in a whole number form, or the number is less than 1 or more than 3.
  while (userChoice != parseInt(userChoice).toString() || parseInt(userChoice) < 1 || parseInt(userChoice) > 3) {
    // When input make any of above conditions true, prompt error message, obtain and assign new value from user
    userChoice = prompt("Error! Please re-enter a valid number within the following choices:\n1.Facebook\n2.Twitter\n3.Instagram", "1");
  }
  //End of while loop, valid user choice obtained, it's either "1", or "2", or "3"
  // Perform actions based on the user's valid choice 		
  if (userChoice == "1") {
    // if choice is 1, open Facebook URL in a new 800x800 px window
    window.open("https://www.facebook.com/TaylorSwift/", "myWindow", "status = 1, height = 800, width = 800, resizable = 0");
    return;
  } else if (userChoice == "2") {
    // else if choice is 2, open Twitter URL in a new 800x800 px window
    window.open("https://twitter.com/taylorswift13", "myWindow", "status = 1, height = 800, width = 800, resizable = 0");
    return;
  } else {
    // when choice is not 1 or 2, it will only be 3, then open Instagram URL in a new 800x800 px window
    window.open("https://www.instagram.com/taylorswift/", "myWindow", "status = 1, height = 800, width = 800, resizable = 0");
    return;
  }
}

// Define fucntion when called by on click event
function openHelp() {
  // open help page in a new window
  window.open("../html/help.html", "helpWindow", "status = 1, height = 670, width = 670, resizable = 0");
  return;
}

function validateForm() {

  // Get input elemen values by their HTML Tag ids from linked HTML file.
  var firstName = document.getElementById("firstname");
  var lastName = document.getElementById("lastname");
  var postCode= document.getElementById("postcode");
  var email = document.getElementById("email");
  var payment = document.getElementById("payment");
  var cardNumber = document.getElementById("cardnumber");
  var ccv = document.getElementById("ccv");
  var expiryMonth = document.getElementById("expirymonth");
  var expiryYear = document.getElementById("expiryyear");

  // Get current month and year info using built-in methods
  var currentMonth = new Date().getMonth() + 1;
  // currentMonth is incremented by 1 as the method result will be 1 month less than actual month.
  var currentYear = new Date().getFullYear();

  // Define variables for error messages by their HTML Tag ids from linked HTML file.
  var fisrtNameError = document.getElementById("firstnameerror");
  var lastNameError = document.getElementById("lastnameerror");
  var postCodeError = document.getElementById("postcodeerror");
  var emailError = document.getElementById("emailerror");
  var paymentError = document.getElementById("paymenterror");
  var cardNumberError = document.getElementById("cardnumerror");
  var ccvError = document.getElementById("ccverror");
  var monthError = document.getElementById("montherror");
  var yearError = document.getElementById("yearerror");
  var expiryError = document.getElementById("expiryerror");
  // the error message viariables will be used to contain error messages.

  // Validate that first name field is not empty
  if (firstName.value =="") {
    // prompt error message if it's empty, set focus and return false
    fisrtNameError.style.color = "red";
    fisrtNameError.style.fontSize = "16px";
		fisrtNameError.style.fontWeight = "800";
    fisrtNameError.innerHTML = "First Name Required";
		firstName.focus();
		return false;
  }
    // clear error message after field content is valid
    fisrtNameError.innerHTML = "";

  // Validate that last name field is not empty
  if (lastName.value =="") {
    // prompt error message if it's empty, set focus and return false
    lastNameError.style.color = "red";
    lastNameError.style.fontSize = "16px";
		lastNameError.style.fontWeight = "800";
    lastNameError.innerHTML = "Last Name Required";
		lastName.focus();
		return false;
  }
    // clear error message after field content is valid
    lastNameError.innerHTML = "";

  // Validate that postcode field is not empty
  if (postCode.value =="") {
    // prompt error message if it's empty, set focus and return false
    postCodeError.style.color = "red";
    postCodeError.style.fontSize = "16px";
		postCodeError.style.fontWeight = "800";
    postCodeError.innerHTML = "Postcode Required";
		postCode.focus();
		return false;
  }
    // clear error message after field content is valid
    postCodeError.innerHTML = "";

  // Validate postCode has 4 numbers
  if (postCode.value.length != 4 || isNaN(postCode.value)) {
    // prompt error message if postcode input length is not 4 OR not a number, set focus and return false
    postCodeError.style.color = "red";
    postCodeError.style.fontSize = "16px";
		postCodeError.style.fontWeight = "800";
    postCodeError.innerHTML = "Postcode must contain 4 numbers (numbers only)";
		postCode.focus();
		return false;
  }
    // clear error message after field content is valid
    postCodeError.innerHTML = "";
  
  // Validate that email field is not empty
  if (email.value == "") {
    // prompt error message if it's empty, set focus and return false
    emailError.style.color = "red";
    emailError.style.fontSize = "16px";
		emailError.style.fontWeight = "800";
    emailError.innerHTML = "Email Address Required";
		email.focus();
		return false;
  }
    // clear error message after field content is valid
    emailError.innerHTML = "";

  // Validate email at least 8 character-long
  if (email.value.length < 8) {
    // prompt error message when the length of email input is less than 8 characters, set focus and return false
    emailError.style.color = "red";
    emailError.style.fontSize = "16px";
		emailError.style.fontWeight = "800";
    emailError.innerHTML = "Email Address must of minimum 8 character long";
		email.focus();
		return false;
  }
    // clear error message after field content is valid
    emailError.innerHTML = "";

  // Validate email contain @ and .
  if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
    // prompt error message when @ and . doesn't exist in the input, set focus and return false
    emailError.style.color = "red";
    emailError.style.fontSize = "16px";
		emailError.style.fontWeight = "800";
    emailError.innerHTML = "Email Address must contain @ and . (dot)";
		email.focus();
		return false;
  }
    // clear error message after field content is valid
    emailError.innerHTML = "";
  
  // Validate that payment type selection is not empty
  if (payment.value =="") {
    // prompt error message if it's empty, set focus and return false
    paymentError.style.color = "red";
    paymentError.style.fontSize = "16px";
		paymentError.style.fontWeight = "800";
    paymentError.innerHTML = "Payment Type Required";
		payment.focus();
		return false;
  }
    // clear error message after field content is valid
    paymentError.innerHTML = "";
  
  // Validate that card number field is not empty
  if (cardNumber.value =="") {
    // prompt error message if it's empty, set focus and return false
    cardNumberError.style.color = "red";
    cardNumberError.style.fontSize = "16px";
		cardNumberError.style.fontWeight = "800";
    cardNumberError.innerHTML = "Card Number Required";
		cardNumber.focus();
		return false;
  }
    // clear error message after field content is valid
    cardNumberError.innerHTML = "";

  // Validate cardNumber has 16 numbers
  if (cardNumber.value.length != 16 || isNaN(cardNumber.value)) {
    // prompt error message if cardnumber input length is not 16 OR not a number, set focus and return false
    cardNumberError.style.color = "red";
    cardNumberError.style.fontSize = "16px";
		cardNumberError.style.fontWeight = "800";
    cardNumberError.innerHTML = "Card Number must contain 16 numbers (numbers only)";
		cardNumber.focus();
		return false;
  }
    // clear error message after field content is valid
    cardNumberError.innerHTML = "";
  
  // Validate that ccv field is not empty
  if (ccv.value == "") {
    // prompt error message if it's empty, set focus and return false
    ccvError.style.color = "red";
    ccvError.style.fontSize = "16px";
		ccvError.style.fontWeight = "800";
    ccvError.innerHTML = "CCV number Required";
		ccv.focus();
		return false;
  }
    // clear error message after field content is valid
    ccvError.innerHTML = "";

  // Validate ccv has 3 numbers
  if (ccv.value.length != 3 || isNaN(ccv.value)) {
    // prompt error message if ccv input length is not 3 OR not a number, set focus and return false
    ccvError.style.color = "red";
    ccvError.style.fontSize = "16px";
		ccvError.style.fontWeight = "800";
    ccvError.innerHTML = "CCV must be 3 numbers (numbers only)";
		ccv.focus();
		return false;
  }
    // clear error message after field content is valid
    ccvError.innerHTML = "";
  
  // Validate card expiry month not empty
  if (expiryMonth.value == "") {
    // prompt error message if the input is empty, set focus and return false
    monthError.style.color = "red";
    monthError.style.fontSize = "12px";
		monthError.style.fontWeight = "800";
    monthError.innerHTML = "Expiry Month Required";
		expiryMonth.focus();
		return false;
  }
    // clear error message after field content is valid
    monthError.innerHTML = "";

  // Validate card expiry year not empty  
  if (expiryYear.value == "") {
    // prompt error message if the input is empty, set focus and return false
    yearError.style.color = "red";
    yearError.style.fontSize = "12px";
		yearError.style.fontWeight = "800";
    yearError.innerHTML = "Expiry Year Required";
		expiryYear.focus();
		return false;
  }
    // clear error message after field content is valid
    yearError.innerHTML = "";
  
  // Check card expiry
  if (parseInt(expiryYear.value) < currentYear) {
    // when selected year is earlier (less) than current year, the card must expired
    // prompt error message indicating year invalid
    yearError.style.color = "red";
    yearError.style.fontSize = "12px";
		yearError.style.fontWeight = "800";
    yearError.innerHTML = "Invalid Year Entry";
    // prompt card expired error
    expiryError.style.color = "red";
    expiryError.style.fontSize = "16px";
		expiryError.style.fontWeight = "800";
    expiryError.innerHTML = "Your card has expired!";
    // set focus and return false
		expiryYear.focus();
		return false;
  }
    // clear error message after field content is valid
    yearError.innerHTML = "";
    expiryError.innerHTML = "";
  
  if (parseInt(expiryYear.value) == currentYear && parseInt(expiryMonth.value) < currentMonth) {
    // when selected year equal to current year, the program has to check the selected month for expiry
    // if selected month is earlier (less) than current month, then the card must expired
    // prompt error message indicating month invalid
    monthError.style.color = "red";
    monthError.style.fontSize = "12px";
		monthError.style.fontWeight = "800";
    monthError.innerHTML = "Invalid Month Entry";
    // prompt card expired error
    expiryError.style.color = "red";
    expiryError.style.fontSize = "16px";
		expiryError.style.fontWeight = "800";
    expiryError.innerHTML = "Your card has expired!";
    // set focus and return false
		expiryMonth.focus();
		return false;
  }
    // clear error message after field content is valid
    monthError.innerHTML = "";
    expiryError.innerHTML = "";
  
  // when selected year is later(more)than current year the card mustn't expired, so program donot need to check that situation.
	
  // when all above IF strusture conditions are false, means all info validated, return true to sumbit the form.
  alert("You have now submitted your form!")
  return true;

}

// function to be called by onfocus event of HTML elements
function changeBgd(textField) {
  // change textfield background to orange
	textField.style.background="#F26835";
}

// function to be called by onblur event of HTML elements
function resetBgd(textField) {
  // change textfield background back to white
	textField.style.background="white";
}


