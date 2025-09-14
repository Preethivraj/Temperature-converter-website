function convertTemp() {
  const tempValue = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(tempValue) || tempValue === "") {
    resultDiv.textContent = "Please enter a valid number!";
    resultDiv.style.color = "red";
    return;
  }

  const temp = parseFloat(tempValue);
  let c, f, k;

  if (unit === "C") {
    c = temp;
    f = (temp * 9/5) + 32;
    k = temp + 273.15;
  } else if (unit === "F") {
    f = temp;
    c = (temp - 32) * 5/9;
    k = c + 273.15;
  } else if (unit === "K") {
    k = temp;
    c = temp - 273.15;
    f = (c * 9/5) + 32;
  }

  resultDiv.style.color = "#333";
  resultDiv.innerHTML = `
    <p>${c.toFixed(2)} °C</p>
    <p>${f.toFixed(2)} °F</p>
    <p>${k.toFixed(2)} K</p>
  `;
}
