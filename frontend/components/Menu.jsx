import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "./common/NavigationBar";
import Locations from "./common/Locations";
import FreeDelivery from "./common/FreeDelivery";
import Footer from "./common/Footer";

export default function Menu() {
  const pastaItems = [
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "SPAGHETTI BOLOGNESE",
      description: "With Chianti-braised meat sauce and fresh basil.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "FETTUCCINE ALFREDO",
      description: "With Chianti-braised meat sauce and fresh basil.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "CAPRESE PASTA",
      description:
        "Roma tomatoes, fresh basil, Sicilian extra-virgin olive oil, pine nuts, and fresh mozzarella.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "TRUFFLE TORTELLONI",
      description:
        "Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula.",
    },
  ];

  const pizzaItems = [
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "PAESANO",
      description:
        "Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "SPICY FENNEL",
      description:
        "House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, caramelized onions, goat cheese, and Wisconsin mozzarella.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "ITALIAN MARKET",
      description:
        "Prosciutto di Parma, ricotta cheese, pepperoni, red onions, Wisconsin mozzarella, and pizza sauce, drizzled with pesto sauce.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "TRUFFLE TORTELLONI",
      description:
        "Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "TUSCAN VEGAN",
      description:
        "No Cheese. Marinara sauce, zucchini & squash, Portabella mushrooms, black olives, eggplant, roasted peppers, artichoke hearts, red onions, and fresh arugula.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "SHRIMP ALFREDO",
      description:
        "Pancetta, shrimp, red onions, Alfredo sauce, mozzarella, and fresh arugula.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "BUFALINA PIZZA",
      description:
        "Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella.",
    },
  ];

  const dessertItems = [
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "ITALIAN CANNOLI",
      description:
        "An Italian handcrafted pastry shell filled with fresh ricotta cheese and chocolate.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "CARROT CAKE",
      description:
        "Studded with raisins, walnuts, and pineapple, finished with a smooth cream cheese icing.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "ITALIAN CREAM CAKE",
      description:
        "Sweet cream cake with coconut, pecans, and cream cheese frosting.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "TRUFFLE CHOCOLATE",
      description:
        "Crafted with layers of dark, moist chocolate and a silky truffle chocolate filling.",
    },
    {
      image: "/menu-images/pasta-menu.jpg",
      name: "Pizzeria's Tiramisu",
      description:
        "Homemade with ladyfingers soaked in espresso, layered with fresh mascarpone cheese.",
    },
  ];

  const menuNames = [
    {
      name: "Pasta",
      description:
        "Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci",
      items: pastaItems,
    },
    {
      name: "Pizza",
      description:
        "Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.",
      items: pizzaItems,
    },
    {
      name: "Dessert",
      description:
        "Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.",
      items: dessertItems,
    },
  ];

  const handleItems = (items) => (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex gap-4 w-full "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[200px] h-[200px] object-cover rounded-lg"
            loading="lazy"
          />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const handleMenuContainer = (menu, index) => (
    <>
      <motion.div
        id={menu.name.toLowerCase()}
        key={index}
        className="flex justify-center py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-rows-[auto,1fr] w-[60vw] gap-6">
          <div className="grid grid-cols-[1fr,1fr] gap-4">
            <h2 className="text-5xl font-bold">{menu.name}</h2>
            <p>{menu.description}</p>
          </div>
          {handleItems(menu.items)}
        </div>
      </motion.div>
      <div className="flex justify-center  items-center">
        {menu.name.toLowerCase() == "pizza" && (
          <div className=" flex flex-col gap-3">
            <div className="flex  flex-col justify-center items-center gap-3">
              <h3 className="text-5xl font-bold">CRAFT YOUR OWN</h3>
              <p>
                Erat pharetra suscipit tincidunt in eget ultricies lectus
                posuere arcu.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5 " >
              <div className="border-b border-black">
                <p>STEP 1</p>
                <p>CHOOSE YOUR SIZE</p>
                <p>8", 12", 14", 18"</p>
              </div>
              <div className="row-span-2 border-l border-black pl-2">
                <p>STEP 3</p>
                <p>CHOOSE YOUR TOPPINGS</p>
                <ul className="flex flex-col gap-2">
                  <p>TRADITIONAL TOPPING</p>
                  <div className="grid grid-cols-2">
                    <div>
                      <li>Extra Mozzarella</li>
                      <li>Canadian Bacon</li>
                      <li>Sliced Sausage</li>
                      <li>Sun-Dried Tomatoes</li>
                      <li>Roasted Peppers</li>
                    </div>
                    <div>
                      <li>Fresh Basil</li>
                      <li>Bell Peppers</li>
                      <li>Caramelized Onions</li>
                      <li>Feta Cheese</li>
                      <li>Italian Beef</li>
                    </div>
                  </div>
                  <p>PREMIUM TOPPING</p>
                  <div className="grid grid-cols-2">
                    <div>
                      <li>Ricotta Cheese</li>
                      <li>Goat Cheese</li>
                      <li>Prosciutto di Parma</li>
                    </div>
                    <div>
                      <li>Fresh Mozzarella</li>
                      <li>Portabella Mushrooms</li>
                      <li>Fresh Arugula</li>
                    </div>
                  </div>
                </ul>
              </div>
              <div>
                <p>STEP 2</p>
                <p>CHOOSE YOUR SAUCE</p>
                <p>Marinara, BBQ, Spicy BBQ, oil, alfredo, or hot sauce</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <main className="bg-[url('/menu-images/menu-bg.jpg')] h-[60vh] w-full bg-cover bg-center flex flex-col gap-y-20 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10">
        <NavigationBar />
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
          <h1 className="text-8xl font-bold text-white">OUR MENU</h1>
          <div className="flex gap-5 p-2 h-[60vh]">
            <div className="pb-5 w-[350px] flex flex-col gap-2 justify-center items-center">
              <img
                src="/menu-images/capresa-pasta.jpg"
                alt="PASTA"
                className="w-[280px] h-[280px] rounded-full hover:-translate-y-5 cursor-pointer object-cover"
                loading="lazy"
              />
              <p className="text-red-600 text-lg">PASTA</p>
            </div>
            <div className="pt-5 w-[360px] flex flex-col gap-1 justify-center items-center">
              <img
                src="/menu-images/pizza6.jpg"
                alt="PIZZA"
                className="w-[280px] h-[280px] rounded-full hover:-translate-y-5 cursor-pointer object-cover"
                loading="lazy"
              />
              <p className="text-red-600 text-lg">PIZZA</p>
            </div>
            <div className="w-[350px] pb-5 flex flex-col gap-2 justify-center items-center">
              <img
                src="/menu-images/dessert1.jpg"
                alt="DESSERT"
                className="w-[280px] h-[280px] rounded-full hover:-translate-y-5 cursor-pointer object-cover"
                loading="lazy"
              />
              <p className="text-red-600 text-lg">DESSERT</p>
            </div>
          </div>
        </div>
      </div>
      {menuNames.map((menu, index) => handleMenuContainer(menu, index))}
      <Locations/>
      <FreeDelivery/>
      <Footer/>
    </main>
  );
}
