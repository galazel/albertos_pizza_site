import React from "react";

function Deals() {
  return (
    <div className="flex flex-col gap-5 w-[70vw] p-20 mx-auto">
      <div className="flex justify-between">
        <h1 className="text-6xl fw-bold text-red-700">BEST DEALS!</h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
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
  );
}
export default Deals;
