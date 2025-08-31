import React from "react";

import NavigationBar from "./common/NavigationBar";
import Locations from "./common/Locations";
import FreeDelivery from "./common/FreeDelivery";
import Footer from "./common/Footer";
import Deals from "./common/Deals";
import Hero from "./common/Hero";
export default function Offers() {
  return (
      <Hero div={<Deals/>} name={'OFFERS'}/>
  );
}
