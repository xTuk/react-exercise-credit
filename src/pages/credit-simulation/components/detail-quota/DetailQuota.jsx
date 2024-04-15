import { formatCurrency } from "../../../../utils/utils";
import { useCreditSimulationContext } from "../../contexts/creditContext";
import "./detail-quota.css";

export default function DetailQuota() {
  const { quota, amount } = useCreditSimulationContext();

  const monthlyDetail = () => {
    const months = [];
    for (let index = 0; index < quota; index++) {
      const date = new Date();
      date.setMonth(date.getMonth() + index);
      months.push(date.toLocaleDateString());
    }
    const division = (amount / quota).toFixed(2);
    const perMounth = formatCurrency(division, "$");

    return (
      <ul className="month-list">
        {months.map((month, index) => {
          return (
            <li key={index}>
              {month} se pagara: {perMounth}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <h2>Detalle de cuotas:</h2>
      <p>
        Se pagara la cantidad de {formatCurrency(amount, "$")} en un total de{" "}
        {quota} cuotas
      </p>

      {monthlyDetail()}
    </div>
  );
}
