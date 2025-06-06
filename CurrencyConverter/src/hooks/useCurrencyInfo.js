import { useState, useEffect } from "react";

function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    if (!baseCurrency) return;

    fetch(`https://open.er-api.com/v6/latest/${baseCurrency.toUpperCase()}`)
      .then(res => res.json())
      .then(res => {
        if (res.result === "success" && res.rates) {
          setRates(res.rates);
        } else {
          console.error("API error:", res["error-type"]);
          setRates({});
        }
      })
      .catch(err => {
        console.error("Fetch failed:", err);
        setRates({});
      });
  }, [baseCurrency]);

  return rates;
}

export default useCurrencyInfo;
