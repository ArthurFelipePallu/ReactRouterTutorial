import { useParams } from "react-router-dom";
import { getInvoice } from "../../../data";

export default function Invoice() {
  const params = useParams();
  const inv = getInvoice(Number(params.invoiceId));
  return (
    inv && 
    <main>
      <h2>Total Due : {inv.ammount}</h2>
      <p>{inv.name} : {inv.number} </p>
      <p>Due Date: {inv.due}</p>
    </main>
  );
}
