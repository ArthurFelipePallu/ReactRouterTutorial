import "./styles.css"
import { InvoiceDTO } from "../../Models/Invoice"


type Props={
    invoiceProp : InvoiceDTO;
}

export default function Invoice( {invoiceProp} :Props){
   return(
    <>
        <h1>{invoiceProp.name}</h1>
        <h3>{invoiceProp.number}</h3>
        <h1>{invoiceProp.ammount}</h1>
        <h3>{invoiceProp.due}</h3>
    </>
   ); 
}