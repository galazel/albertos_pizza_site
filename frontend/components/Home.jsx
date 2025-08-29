import React from "react";
import NavigationBar from "./common/NavigationBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <main className="bg-[url('/home-images/pizza-bg-home.jpg')] h-[90vh] w-full bg-cover bg-center flex flex-col gap-y-20 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10">
        <div>
          <NavigationBar />
        </div>
        <div>
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-white">
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
        <div className="grid grid-rows-2 justify-center pt-20 m-20">
          <div className="flex justify-center">
            <img
              src="/about-images/pizza4-removebg-preview.png"
              alt="pizza"
              className="w-[700px] rounded-full"
            />
          </div>
          <div className="flex gap-5 p-2">
            <div className=" w-[350px] p-2 flex flex-col gap-2 justify-center items-center">
              <img
                src="/home-images/fresh-ingredients.jpg"
                alt="fresh-ingredients"
                className="w-[280px] h-[280px] rounded-full"
              />
              <p className="text-red-600 text-3xl">FRESH INGREDIENTS</p>
              <p className="text-center">
                Risus egestas felis, purus ultricies tortor feugiat aliquam
                euismod senectus sed amet felis viverra mi bibendum.
              </p>
            </div>
            <div className=" w-[360px] p-2 flex flex-col gap-2 justify-center items-center">
              <img
                src="/home-images/home-made-mozarella.jpg"
                alt="fresh-ingredients"
                className="w-[280px] h-[280px] rounded-full"
              />
              <p className="text-red-600 text-3xl">HANDMADE MOZARELLA</p>
              <p className="text-center">
                Risus egestas felis, purus ultricies tortor feugiat aliquam
                euismod senectus sed amet felis viverra mi bibendum.
              </p>
            </div>
            <div className=" w-[350px] p-2 flex flex-col gap-2 justify-center items-center">
              <img
                src="/home-images/home-made-sauce.jpg"
                alt="fresh-ingredients"
                className="w-[280px] h-[280px] rounded-full"
              />
              <p className="text-red-600 text-3xl">"SECRET RECIPE" SAUCE</p>
              <p className="text-center">
                Risus egestas felis, purus ultricies tortor feugiat aliquam
                euismod senectus sed amet felis viverra mi bibendum.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/home-images/grab-pizza.jpg')] relative w-full bg-cover bg-center flex h-[600px] items-center justify-center gap-1">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="z-10 flex">
            <div className="w-[400px]">
              <h1 className="text-7xl justify-self-start text-white">
                BRINGING HAPPINES TO YOU
              </h1>
              <p className="text-lg   text-white">
                Tellus id nisl quis at sollicitudin nisl nisi <br /> tincidunt
                purus .{" "}
              </p>
            </div>
            <div className="flex p-2 gap-5">
              <div className="flex flex-col items-center ">
                <img
                  src="/common-images/delivery-app.jpg"
                  alt="deliver-from-app"
                  className="w-[200px] h-[200px] rounded-full"
                />
                <p className="text-white text-2xl">ONLINE DELIVERY</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/common-images/grab_food.jpg"
                  alt="grab-food"
                  className="w-[200px] h-[200px] rounded-full"
                />
                <p className="text-white text-2xl">CLICK & COLLECT</p>
              </div>
              <div className="flex flex-col items-center">
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
        <div>
          sdfadf
        </div>
      </div>
    </main>
  );
}
