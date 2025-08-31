import React from "react";
import NavigationBar from "./common/NavigationBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./common/Footer";
import Locations from "./common/Locations";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FreeDelivery from "./common/FreeDelivery";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // ms
      once: true,     // animate only once
    });
  }, []);
  return (
    <main className="bg-[url('/home-images/pizza-bg-home.jpg')] h-[100vh] w-full bg-cover bg-center flex flex-col gap-y-20 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10">
        <div>
          <NavigationBar />
        </div>
        <div>
          <div className="px-4 py-5 my-5 text-center "  data-aos="fade-up">
            <h1 className="text-5xl fw-bold text-white">
              AUTHENTIC ITALIAN PIZZERIA
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 text-white">
                Welcome to The Pizzeria, where tradition meets taste! Enjoy our
                handcrafted pizzas made with fresh ingredients, classic Italian
                recipes, and a warm, inviting atmosphere. Whether you're dining
                in or taking out, we promise an unforgettable experience for
                pizza lovers of all ages.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button
                  type="button"
                  className="btn bg-red-800 btn-lg px-4 gap-3 text-white"
                  fdprocessedid="iq7j9"
                >
                  BOOK A TABLE
                </button>
                <button
                  type="button"
                  className="btn border-white text-white btn-lg px-4"
                  fdprocessedid="24sg5g"
                >
                  TAKEAWAY
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 justify-center pt-20 m-20" data-aos="zoom-in">
          <div className="flex justify-center"  data-aos="zoom-in">
            <img
              src="/about-images/pizza4-removebg-preview.png"
              alt="pizza"
              className="w-[700px] rounded-full"
            />
          </div>
          <div className="flex gap-5 p-2  h-[60vh]" >
            <div className="pb-5 w-[350px] flex flex-col gap-2 justify-center items-center"  data-aos="fade-right">
              <img
                src="/home-images/fresh-ingredients.jpg"
                alt="fresh-ingredients"
                className="w-[280px] h-[280px] rounded-full"
              />
              <p className="text-red-600 text-lg">FRESH INGREDIENTS</p>
              <p className="text-center">
                Risus egestas felis, purus ultricies tortor feugiat aliquam
                euismod senectus sed amet felis viverra mi bibendum.
              </p>
            </div>
            <div className=" pt-5 w-[360px]  flex flex-col gap-1 justify-center items-center" data-aos="fade-up">
              <img
                src="/home-images/home-made-mozarella.jpg"
                alt="fresh-ingredients"
                className=" w-[280px] h-[280px] rounded-full"
              />
              <p className="text-red-600 text-lg">HANDMADE MOZARELLA</p>
              <p className="text-center">
                Risus egestas felis, purus ultricies tortor feugiat aliquam
                euismod senectus sed amet felis viverra mi bibendum.
              </p>
            </div>
            <div className=" w-[350px] pb-5 flex flex-col gap-2 justify-center items-center" data-aos="fade-left">
              <img
                src="/home-images/home-made-sauce.jpg"
                alt="fresh-ingredients"
                className="w-[280px] h-[280px] rounded-full"
              />
              <p className="text-red-600 text-lg">"SECRET RECIPE" SAUCE</p>
              <p className="text-center">
                Risus egestas felis, purus ultricies tortor feugiat aliquam
                euismod senectus sed amet felis viverra mi bibendum.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/home-images/grab-pizza.jpg')]  relative w-full bg-cover bg-center flex h-[600px] items-center justify-center gap-1"  data-aos="fade-up">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="z-10 flex gap-5">
            <div className="w-[500px]">
              <h1 className="text-7xl justify-self-start text-white">
                BRINGING HAPPINES TO YOU
              </h1>
              <p className="text-lg   text-white">
                Tellus id nisl quis at sollicitudin nisl nisi <br /> tincidunt
                purus .
              </p>
            </div>
            <div className="flex p-2 gap-5">
              <div className="flex flex-col items-center " data-aos="zoom-in">
                <img
                  src="/common-images/delivery-app.jpg"
                  alt="deliver-from-app"
                  className="w-[200px] h-[200px] rounded-full"
                />
                <p className="text-white text-2xl">ONLINE DELIVERY</p>
              </div>
              <div className="flex flex-col items-center" data-aos="zoom-in">
                <img
                  src="/common-images/grab_food.jpg"
                  alt="grab-food"
                  className="w-[200px] h-[200px] rounded-full"
                />
                <p className="text-white text-2xl">CLICK & COLLECT</p>
              </div>
              <div className="flex flex-col items-center" data-aos="zoom-in">
                <img
                  src="/common-images/restaurant_dining.jpg"
                  alt="restaurant dining"
                  className="w-[200px] h-[200px] rounded-full"
                />
                <p className="text-white text-2xl">RESTAURANT DINING</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-20">
          <div>
            <div className="px-4 py-5 my-1 text-center">
              <p className="text-red-700 mb-6 font-bold">CHOOSE YOUR FLAVOR</p>
              <h1 className="text-5xl fw-bold text-black">
                FOOD THAT BRINGS PEOPLE TOGETHER!
              </h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 text-black">
                  Cursus ultricies in maecenas pulvinar ultrices integer quam
                  amet, semper dictumst sit interdum ut venenatis pellentesque
                  nunc.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn  btn-lg px-4 gap-3 font-bold text-red-700 border-red-700"
                    fdprocessedid="iq7j9"
                  >
                    VIEW ALL MENU
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            <div className="flex flex-col items-center">
              <img
                src="/menu-images/pasta-menu.jpg"
                alt="deliver-from-app"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-2xl text-red-700 font-bold">PASTA</p>
            </div>
            <div className="pt-10 flex flex-col items-center">
              <img
                src="/menu-images/pizza-menu.jpg"
                alt="deliver-from-app"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-2xl text-red-700 font-bold">PIZZA</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/menu-images/dessert-menu.jpg"
                alt="deliver-from-app"
                className="w-[200px] h-[200px] rounded-full"
              />
              <p className="text-2xl text-red-700 font-bold">DESSERT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-[70vw] p-20 mx-auto">
        <div className="flex justify-between">
          <h1 className="text-6xl fw-bold text-red-700">BEST DEALS!</h1>
          <button
            type="button"
            className="btn  btn-lg px-4 gap-3 font-bold text-red-700 border-red-700"
            fdprocessedid="iq7j9"
          >
            VIEW ALL MENU
          </button>
        </div>
        <div className="grid grid-cols-[1fr,1fr] gap-10">
          <div className="col-span-2 w-[100%] bg-green-300 rounded-full">
            <img
              src="/offers-images/big-meat-monsta.jpg"
              className="rounded-3xl"
              alt=""
            />
          </div>
          <div className="flex gap-10">
            <img
              src="/offers-images/combo-double-box.jpg"
              className="rounded-3xl"
              alt=""
            />
            <img
              src="/offers-images/italian-stalion.jpg"
              className="rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </div>
      {<Locations />}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-20 ">
          <div className="justify-self-start w-[300px]">
            <p className="mb-3 text-red-700">JOIN THE TABLE</p>
            <h1 className="text-5xl fw-bold text-red-700 mb-3">
              FRANCHISE OPPORTUNITIES
            </h1>
          </div>
          <div className="justify-self-start w-[500px]">
            <p className="mb-4">
              Fermentum non quis vitae viverra ipsum eget tincidunt consequat ac
              velit leo, rutrum tellus augue dolor leo massa augue rhoncus
              pellentesque pulvinar pellentesque potenti cras arcu praesent urna
              a, vitae mattis pellentesque rhoncus cursus enim ac eu justo.
            </p>
            <button
              type="button"
              className="btn  btn-lg px-4 gap-3 font-bold text-red-700 border-red-700"
              fdprocessedid="iq7j9"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2">
        <div className="grid grid-cols-6 ">
          <div>
            <img
              src="/home-images/group1.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div>
            <img
              src="/home-images/group2.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div>
            <img
              src="/home-images/group3.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="col-span-2 flex items-center p-5 bg-red-500">
            <div>
              <h1 className="text-4xl fw-bold text-white mb-3">
                FOLLOW THE @PIZZERIA
              </h1>
              <p className="text-white">
                Leo nulla cras augue eros, diam vivamus et lectus volutpat at
                facilisi tortor porta.
              </p>
              <button
                type="button"
                className="btn  btn-lg px-4 gap-3 font-bold text-white border-white"
                fdprocessedid="iq7j9"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div>
            <img
              src="/home-images/group4.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div>
            <img
              src="/home-images/group5.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div>
            <img
              src="/home-images/group6.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div>
            <img
              src="/home-images/group7.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div>
            <img
              src="/home-images/group8.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div>
            <img
              src="/home-images/group9.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
          <div>
            <img
              src="/home-images/group10.jpg"
              alt=""
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
      
      <FreeDelivery/>
      <Footer />
    </main>
  );
}