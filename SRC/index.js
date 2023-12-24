function showSelectedCity(event) {
  let parisTime = moment.tz("Europe/Paris").format("dddd, MMMM D, YYYY h:m A");
  if (event.target.value.length > 0) {
    if (event.target.value === "Paris") {
      alert(`It is ${parisTime} in Paris`);
    }
  }
  let tokyoTime = moment.tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");
  if (event.target.value === "Tokyo") {
    alert(`It is ${tokyoTime} in Tokyo`);
  }
  let sydneyTime = moment
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY h:m A");
  if (event.target.value === "Sydney") {
    alert(`It is ${sydneyTime} in Sydney`);
  }
}
let citiesSelect = document.querySelector("#cities");

citiesSelect.addEventListener("change", showSelectedCity);
