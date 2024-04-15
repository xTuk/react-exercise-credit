import { useEffect } from "react";
import { maxAmount, minAmount } from "../../../../utils/constants";
import { useCreditSimulationContext } from "../../contexts/creditContext";
import Slider from "rc-slider";
import Input from "../../../../components/input/Input";
import { useState } from "react";
import { formatCurrency } from "../../../../utils/utils";
import { useCallback } from "react";
import InputSlider from "../../../../components/input-slider/InputSlider";
import ErrorMessage from "../../../../components/error-message/ErrorMessage";
import "./select-amount.css";

export default function SelectAmount() {
  const { amount, changeAmount, amountErr } = useCreditSimulationContext();
  const [inputValue, setInputValue] = useState(amount);

  useEffect(() => {
    const formattedValue = formatCurrency(amount);
    setInputValue(`$${formattedValue}`);
  }, [amount]);

  const handleChangeInput = useCallback(
    (event) => {
      const numericValue = event.target.value.replace(/[^\d]/g, "");
      changeAmount(Number(numericValue));
      const formattedValue = formatCurrency(numericValue);
      setInputValue(`$${formattedValue}`);
    },
    [amount]
  );

  return (
    <div className="container">
      <div className="container-input">
        <label className="label-input">Monto total</label>
        <Input type="text" value={inputValue} onChange={handleChangeInput} />
      </div>
      <ErrorMessage> {amountErr} </ErrorMessage>
      <InputSlider
        min={minAmount}
        max={maxAmount}
        labelMax={formatCurrency(maxAmount, "$")}
        labelMin={formatCurrency(minAmount, "$")}
        value={amount}
        onChange={(value) => changeAmount(value)}
      />
    </div>
  );
}
