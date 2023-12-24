function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let cityTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:m A");
    alert(`It is ${cityTime} in ${event.target.value}`);
  }
}
let citiesSelect = document.querySelector("#cities");

citiesSelect.addEventListener("change", showSelectedCity);
