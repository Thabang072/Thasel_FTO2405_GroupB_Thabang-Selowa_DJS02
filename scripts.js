const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check for empty inputs return results when requirement are not met
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }
  
  // Check if inputs are valid numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  //Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number)
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    console.error("Error: Invalid input types", new Error().stack);
    return;
  }

  // Check for division by zero is valid
  if (dividerNum === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Error: Division by zero", new Error().stack);
    return;
  }

  // Perform the division and display result
  // Returns the greatest integer less than or equal to its numeric argument.
  const data = Math.floor(dividendNum / dividerNum);
  result.innerText = data;
});
