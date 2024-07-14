import { useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoice } from "../../../data";

export default function Invoice() {
  const navigate = useNavigate();
  const params = useParams();
  const inv = getInvoice(Number(params.invoiceId));

  return (
    inv && (
      <main>
        <h2>Total Due : {inv.ammount}</h2>
        <p>
          {inv.name} : {inv.number}{" "}
        </p>
        <p>Due Date: {inv.due}</p>
        <p>
          <button
            onClick={() => {
              deleteInvoice(inv.number);
              navigate("/invoices" + location.search);
            }}
          >
            Delete
          </button>
        </p>
      </main>
    )
  );
}
