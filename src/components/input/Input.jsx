import "./input.css";

export default function Input({ value, type = "text", onChange, min, max }) {
  const handlerOnChange = (e) => {
    if (e?.target.value) onChange(e);
  };

  return (
    <input
      id="numberInput"
      type={type}
      value={value}
      min={min}
      max={max}
      onChange={handlerOnChange}
    />
  );
}
