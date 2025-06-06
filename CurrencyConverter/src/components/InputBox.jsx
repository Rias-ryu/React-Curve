import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div
      className={`flex flex-col gap-4 p-4 rounded-2xl shadow-md border
                 bg-white dark:bg-zinc-900 dark:border-zinc-800
                 transition-all duration-300 ${className}`}
    >
      {/* Label + Input */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className="text-sm font-semibold text-zinc-700 dark:text-zinc-200"
        >
          {label}
        </label>
        <input
          type="number"
          id={id}
          className="w-full px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700
                     bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100
                     placeholder:text-zinc-400 dark:placeholder:text-zinc-500
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     disabled:opacity-60 disabled:cursor-not-allowed"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>

      {/* Currency Dropdown */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${id}-currency`}
          className="text-sm font-semibold text-zinc-700 dark:text-zinc-200"
        >
          Currency Type
        </label>
        <select
          id={`${id}-currency`}
          className="w-full px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700
                     bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     disabled:opacity-60 disabled:cursor-not-allowed"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
