import ImageHeader from "./ImageHeader";
import Form from "./Form";
import ItemList from "./ItemList";
import { type Items } from "../types/utils";
import { useState } from "react";

const Wrapper = () => {
  const [items, setItems] = useState<Items[]>([]);
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />
      <div className="w-[350px]">
        <Form setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default Wrapper;
