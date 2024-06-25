
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import alert from "../sweetAlert";
import { Items, ReactSetState } from "../types/utils";


const Form = ({ setItems }: { setItems: ReactSetState<Items[]> }) => {
  const [inputVal, setInputVal] = useState<string>("");
  const handleSubit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal) {
      alert("Enter Values", "error");
      return;
    }
    setItems((prev) => [
      ...prev,
      { tittle: inputVal, id: Date.now().toString() },
    ]);
    alert("Item Added", "success");
    setInputVal("");
  };
  return (
    <form className="mb-5" onSubmit={handleSubit}>
      <Input type="text" inputValue={inputVal} setInputValue={setInputVal} />
      <Button className="bg-gray-700 w-full p-2">Add</Button>
    </form>
  );
};

export default Form;
