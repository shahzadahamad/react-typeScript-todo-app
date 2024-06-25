import { Items, ReactSetState } from "../types/utils";
import Button from "./Button"
import { MdDelete } from "react-icons/md";
import alert from "../sweetAlert";


type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>
}

const ItemList = ({items,setItems}:ItemList) => {

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
    alert("Remove Item", "success");
  };

  return (
    <div className="h-52 overflow-y-auto">
    {items.map((data) => (
      <div
        key={data.id}
        className="flex justify-between items-center border rounded mb-2 border-slate-600 pl-2 mr-1 py-2"
      >
        <p>{data.tittle}</p>
        <button></button>
        <Button onClick={() => handleDelete(data.id)}>
          <MdDelete />
        </Button>
      </div>
    ))}
  </div>
  )
}

export default ItemList
