
let invoices  =[

    {
        name:"Santa Monica",
        number:1995,
        ammount:"R$ 10.000",
        due:"12/05/1995",
    },
    {
        name:"Stankonia",
        number:2000,
        ammount:"R$ 8.000",
        due:"10/31/2000",
    },
    {
        name:"Ocean Avenue",
        number:2003,
        ammount:"R$ 9.500",
        due:"07/22/2003",
    },
    {
        name:"TubThumper",
        number:1997,
        ammount:"R$ 14.000",
        due:"09/01/1997",
    },
];

export function getInvoices(){
    return invoices;
}
export function getInvoice(number : any){
    return invoices.find((invoice)=> invoice.number===number);
}
export function deleteInvoice(number : any){
    invoices = invoices.filter(
            (invoice)=>invoice.number !== number
    );
}