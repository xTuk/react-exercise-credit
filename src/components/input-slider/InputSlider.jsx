import Slider from "rc-slider";
import "./input-slider.css";

const track = {
  backgroundColor: "white",
};

const handle = {
  backgroundColor: "white",
  borderColor: "white",
  opacity: "1",
  width: "20px",
  height: "20px",
  bottom: "50%",
  transform: "translateY(50%)",
};

export default function InputSlider({
  min = 0,
  max = 100,
  labelMin,
  labelMax,
  value,
  onChange,
}) {
  return (
    <div>
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        styles={{
          track,
          handle,
        }}
      />
      <div className="container-labels">
        <span>{labelMin || max}</span>
        <span>{labelMax || max}</span>
      </div>
    </div>
  );
}
