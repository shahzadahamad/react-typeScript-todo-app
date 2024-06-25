import { ReactSetState } from "../types/utils";

type Input = {
  type: "text" | "checkbox" | "color";
  inputValue: string;
  setInputValue: ReactSetState<string>;
};

const Input = ({ type, inputValue, setInputValue }: Input) => {
  return (
    <input
      type={type}
      value={inputValue}
      className="w-full p-2 rounded-sm mb-2"
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

export default Input;
