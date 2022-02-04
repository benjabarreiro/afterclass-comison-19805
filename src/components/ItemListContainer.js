import { personajes } from "../data";
import ItemList from "./ItemList";

export default function ItemListContainer() {

  return <ItemList  name={personajes} />;
}
