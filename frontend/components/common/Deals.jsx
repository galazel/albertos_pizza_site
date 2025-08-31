import React from "react";

function Deals() {
  return (
    <div className="flex flex-col gap-5 w-[70vw] p-20 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-6xl fw-bold text-red-700">BEST DEALS!</h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="relative col-span-2 w-[100%] bg-red-300 rounded-3xl overflow-hidden">
          <div className="absolute right-20 top-20 bg-white w-44 h-44 rounded-full flex justify-center items-center">
            <p className="text-5xl text-center">SAVE 35%</p>
          </div>
          <img
            src="/offers-images/big-meat-monsta.jpg"
            className="object-cover w-full "
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 rounded-3xl pl-5 pb-5">
            <h1 className="text-8xl fw-bold text-white">BIG MEAT MONSTA</h1>
            <p className="text-white">
              Dignissim sed suscipit mattis neque, in nibh blandit at nec in.
              
            </p>
             <h1 className="text-6xl fw-bold text-white">$18</h1>
          </div>
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
  );
}
export default Deals;
