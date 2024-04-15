import ErrorMessage from "../../../../components/error-message/ErrorMessage";
import InputSlider from "../../../../components/input-slider/InputSlider";
import Input from "../../../../components/input/Input";
import { maxQuota, minQuota } from "../../../../utils/constants";
import { useCreditSimulationContext } from "../../contexts/creditContext";

export default function SelectQuota() {
  const { quota, changeQuota, quotaErr } = useCreditSimulationContext();

  const handlerQuota = (event) => {
    if (event?.target.value) {
      const numericValue = event.target.value.replace(/[^\d]/g, "");
      changeQuota(Number(numericValue));
    }
  };

  return (
    <div className="container">
      <div className="container-input">
        <label className="label-input">Plazo</label>
        <Input
          min={minQuota}
          max={maxQuota}
          type="number"
          value={quota}
          onChange={handlerQuota}
        />
      </div>
      <ErrorMessage> {quotaErr} </ErrorMessage>
      <InputSlider
        min={minQuota}
        max={maxQuota}
        labelMax={maxQuota}
        labelMin={minQuota}
        value={quota}
        onChange={(value) => changeQuota(value)}
      />
    </div>
  );
}
