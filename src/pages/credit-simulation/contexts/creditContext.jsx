import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  maxAmount,
  maxQuota,
  minAmount,
  minQuota,
} from "../../../utils/constants";

export const creditSimulationContext = createContext();

export default function CreditSimulationContextProvider({ children }) {
  const [quota, setQuota] = useState(minQuota);
  const [amount, setAmount] = useState(minAmount);

  const [quotaErr, setQuotaErr] = useState("");
  const [amountErr, setAmountErr] = useState("");

  const validateValue = (value, min, max, setError) => {
    let error = "";
    if (value > max) {
      error = `El valor debe ser menor o igual a ${max}`;
    } else if (value < min) {
      error = `El valor debe ser mayor o igual a ${min}`;
    }
    setError(error);
  };

  const changeQuota = (value) => {
    setQuota(value);
    validateValue(value, minQuota, maxQuota, setQuotaErr);
  };

  const changeAmount = (value) => {
    setAmount(value);
    validateValue(value, minAmount, maxAmount, setAmountErr);
  };

  return (
    <creditSimulationContext.Provider
      value={{ quota, changeQuota, amount, changeAmount, quotaErr, amountErr }}
    >
      {children}
    </creditSimulationContext.Provider>
  );
}

export const useCreditSimulationContext = () => {
  const context = useContext(creditSimulationContext);

  if (context === undefined)
    throw new Error(
      "creditSimulationContext tiene que ser utilizado dentro del provider"
    );
  return context;
};
