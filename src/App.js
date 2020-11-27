import { useEffect, useState } from "react";
import "./App.css";
import PurchasedServices from "./components/PurchasedServices";
import TotalPrice from "./components/TotalPrice";
import axios from "axios";

function App() {
  const [services, setServices] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://jsonkeeper.com/b/356L"
      );
      const items = res.data;
      setServices(items);
    };
    fetchData();
  }, []);
  /**
   * purchased_office_services -> has service_selected then display in purchased and display above the total section
   * service_selected=null consider as additional services display below the total section
   * Display the list and the total amount of purchased services in total section.
   */

  // URL = https://jsonkeeper.com/b/356L.

  return (
    <div>
      <PurchasedServices services={services} />
      <TotalPrice services={services} />
    </div>
  );
}

export default App;
