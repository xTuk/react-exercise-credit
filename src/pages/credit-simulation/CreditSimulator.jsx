import CalculatorCredit from "./components/calculator-credit/CalculatorCredit";
import CreditSimulationContextProvider from "./contexts/creditContext";
import SelectAmount from "./components/select-amount/SelectAmount";
import SelectQuota from "./components/select-quota/SelectQuota";
import CreditActions from "./components/credit-actions/CreditActions";
import "./credit-simulator.css";

export default function CreditSimulator() {
  return (
    <div className="card-credit">
      <h1 className="title">Simulá tu crédito</h1>

      <CreditSimulationContextProvider>
        <SelectAmount />
        <SelectQuota />
        <div>
          <CalculatorCredit />
          <CreditActions />
        </div>
      </CreditSimulationContextProvider>
    </div>
  );
}
