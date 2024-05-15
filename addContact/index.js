// ------image------- //

// ------day------- //
document.addEventListener("DOMContentLoaded", function () {
  const birthYear = document.getElementById("birth-year");
  const birthMonth = document.getElementById("birth-month");
  const birthDay = document.getElementById("birth-day");

  function maxDays() {
    const months = parseInt(birthMonth.value);
    const years = parseInt(birthYear.value);
    let days = 31;

    if (months === 2) {
      days = years % 4 === 0 ? 29 : 28;
    } else if ([4, 6, 9, 11].includes(months)) {
      days = 30;
    }

    birthDay.innerHTML =
      '<option value="" disabled selected hidden>Day</option>';

    for (let i = 1; i <= days; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      birthDay.appendChild(option);
    }
  }

  birthYear.addEventListener("input", maxDays);
  birthMonth.addEventListener("change", maxDays);
});

// ------age------- //
document.addEventListener("DOMContentLoaded", function () {
  const birthYearInput = document.getElementById("birth-year");
  const ageInput = document.getElementById("age");

  birthYearInput.addEventListener("input", function () {
    const birthYear = parseInt(birthYearInput.value, 10);
    const currentYear = new Date().getFullYear();

    if (!isNaN(birthYear)) {
      const age = currentYear - birthYear;
      ageInput.value = age;
    } else {
      ageInput.value = "";
    }
  });
});

// -----capitalize------ //
document.addEventListener("DOMContentLoaded", () => {
  const inputIds = ["first-name", "last-name", "company", "title"];

  inputIds.forEach((id) => {
    const field = document.getElementById(id);

    if (field) {
      field.addEventListener("input", (e) => {
        field.value = field.value.replace(/[^a-zA-Z\s]/g, "");

        field.value = field.value.replace(/\b\w/g, (char) =>
          char.toUpperCase()
        );

        if (field.value.length > 20) {
          field.value = field.value.slice(0, 20);
        }
      });
    }
  });
});

// -----phone------ //
document.addEventListener("DOMContentLoaded", () => {
  const phoneNumberInput = document.getElementById("phone-number");

  phoneNumberInput.addEventListener("input", () => {
    let input = phoneNumberInput.value;
    input = input.replace(/[^0-9+]/g, "");

    if (input.startsWith("+620")) {
      input = "+62" + input.substring(4);
    }

    const maxLength = 15;
    if (input.length > maxLength) {
      input = input.substring(0, maxLength);
    }

    const dashNumber = input.substring(3);
    let formattedNumber = "+62";
    if (dashNumber.length > 0) {
      formattedNumber += "-" + dashNumber.substring(0, 3);
    }
    if (dashNumber.length > 3) {
      formattedNumber += "-" + dashNumber.substring(3, 7);
    }
    if (dashNumber.length > 7) {
      formattedNumber += "-" + dashNumber.substring(7, 11);
    }
    if (dashNumber.length > 11) {
      formattedNumber += "-" + dashNumber.substring(11, 15);
    }

    phoneNumberInput.value = formattedNumber;
  });
});

// -----groups------ //

// -----address------ //
document.addEventListener("DOMContentLoaded", () => {
  const addressField = document.getElementById("address");

  addressField.addEventListener("input", () => {
    let value = addressField.value;

    value = value.replace(/[^a-zA-Z0-9\/\\.,\s]/g, "");

    if (value.length > 200) {
      value = value.substring(0, 200);
    }

    value = value.replace(/\b\w/g, (char) => char.toUpperCase());

    value = value.replace(/([.,\/])(?!\s|$)/g, "$1 ");

    value = value.replace(/([.,\/])\s{2,}/g, "$1 ");

    addressField.value = value;
  });
});

// -----time created------ //
document.addEventListener("DOMContentLoaded", () => {
  const timeCreatedInput = document.getElementById("time-created");

  // Get current time
  const currentTime = new Date();

  // Format the time as per the input type time
  const formattedTime = `${currentTime.getHours().toString().padStart(2, "0")}
    :${currentTime.getMinutes().toString().padStart(2, "0")}`;

  // Set the value of the input field to the formatted time
  timeCreatedInput.value = formattedTime;
});

// -----save data------ //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("profile-contact");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    saveData("seebook", data);

    window.location.href = "/index.html";
  });
});

// -----show modal------ //
