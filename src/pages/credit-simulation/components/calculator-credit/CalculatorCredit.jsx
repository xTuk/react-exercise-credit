import { formatCurrency } from "../../../../utils/utils";
import { useCreditSimulationContext } from "../../contexts/creditContext";
import "./calculator-credit.css";

export default function CalculatorCredit() {
  const { quota, amount, quotaErr, amountErr } = useCreditSimulationContext();

  const calculateCredit = () => {
    if (quotaErr || amountErr) return <p className="no-calc">No calculable</p>;

    const division = (amount / quota).toFixed(2);
    const perMounth = formatCurrency(division, "$", "en-US");
    return <p className="amount">{perMounth}</p>;
  };

  return (
    <div className="calculator">
      <p className="text-calc"> CUOTA FIJA POR MES</p> {calculateCredit()}
    </div>
  );
}
