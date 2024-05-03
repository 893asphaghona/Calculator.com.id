let display = document.getElementById("display");

function appendToDisplay(value) {
  // Mencegah multiple operators terakhir
  const lastChar = display.value.slice(-1);
  if (
    ["+", "-", "*", "/"].includes(lastChar) &&
    ["+", "-", "*", "/", "(", ")"].includes(value)
  ) {
    return;
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Mencegah evaluasi ekspresi berbahaya
    let expression = display.value
      .replace(/cos/g, "Math.cos")
      .replace(/sin/g, "Math.sin")
      .replace(/tan/g, "Math.tan")
      .replace(/\^/g, "**");
    const result = eval(expression);
    display.value = parseFloat(result.toFixed(10));
  } catch (error) {
    display.value = "Error";
  }
}
