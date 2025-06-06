import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { InputBox } from "./components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [ConvertedAmount, setConvertedAmount] = useState(0);

  const CurrencyData = useCurrencyInfo(From); 
  const options = Object.keys(CurrencyData || {}); 

  const swap = () => {
    setFrom(To);
    setTo(From);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = CurrencyData?.[To] || 1;
    setConvertedAmount(amount * rate);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
      }}
    >
      <div className="w-full max-w-md bg-white/80 dark:bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="flex flex-col gap-6"
        >
          {/* From Box */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(val) => setAmount(val)}
            selectedCurrency={From}
          />

          {/* Swap Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={swap}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              ⥂ Swap
            </button>
          </div>

          {/* To Box */}
          <InputBox
            label="To"
            amount={ConvertedAmount}
            amountDisabled={true}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={To}
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Convert {From.toUpperCase()} To {To.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
