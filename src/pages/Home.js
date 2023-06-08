import React from "react";
import { useNavigate } from "react-router-dom";
import TopContent from "../components/general/TopContent";
import Cards from "../components/general/Cards";
import ContactUs from "../components/general/ContactUs";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
   <TopContent height={"screen"}/>
   <Cards/>
   <ContactUs/>
    </div>
  );
};

export default Home;
