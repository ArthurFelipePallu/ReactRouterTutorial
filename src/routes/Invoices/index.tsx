import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data";
import "./styles.css";

export default function Invoices() {
  const invoices = getInvoices();
  const [searchParam, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
            value={searchParam.get("param") || ""}
            onChange={ (event)=> {
                    let param = event.target.value;
                    if(param){
                        setSearchParams({param});
                    }
                    else{
                        setSearchParams({});
                    }
                }
            }
        />
        {invoices
        .filter((invoice)=>{
            let param = searchParam.get("param");
            if(!param) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(param.toLowerCase());
        })
        .map((invoice) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-block nav-red" : "nav-block nav-blue"
            }
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
