const currencyList = ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"];

const fromDropdown = document.getElementById("fromCurrency");
const toDropdown = document.getElementById("toCurrency");

currencyList.forEach(currency => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  option1.value = option2.value = currency;
  option1.text = option2.text = currency;
  fromDropdown.add(option1);
  toDropdown.add(option2);
});

fromDropdown.value = "USD";
toDropdown.value = "INR";

async function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = fromDropdown.value;
  const to = toDropdown.value;

  if (isNaN(amount)) {
    alert("Enter a valid number");
    return;
  }

  const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const rate = data.rates[to];
    const result = amount * rate;
    document.getElementById("result").innerText =
      `${amount} ${from} = ${result.toFixed(2)} ${to}`;
  } catch (err) {
    document.getElementById("result").innerText = "Error fetching rates";
  }
}
