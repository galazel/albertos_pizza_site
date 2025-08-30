import React from "react";

export default function Locations() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col justify-center items-center h-[550px] ">
        <div>
          <div className="px-4 py-5 my-1 text-center">
            <p className="text-red-700 mb-6 font-bold">OUR LOCATION</p>
            <h1 className="text-5xl fw-bold text-black mb-3">
              FIND THE PIZZERIA NEAR YOU
            </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4 text-black">
                Cursus ultricies in maecenas pulvinar ultrices integer quam
                amet, semper dictumst sit interdum ut venenatis pellentesque.
              </p>
            </div>
          </div>
        </div>
        <div className="flex h-[450px] gap-5">
          <div className="flex flex-col items-center gap-3 w-[200px]">
            <p className="text-2xl text-red-700 font-bold">ROME</p>
            <p className="text-center font-bold">
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy. +39 123 456 7890
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 w-[200px]">
            <p className="text-2xl text-red-700 font-bold ">Florence</p>
            <p className="text-center font-bold">
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy. +39 123 456 7890
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 w-[200px]">
            <p className="text-2xl text-red-700 font-bold">Bologna</p>
            <p className="text-center font-bold">
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy. +39 123 456 7890
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 w-[200px]">
            <p className="text-2xl text-red-700 font-bold">NEW YORK</p>
            <p className="text-center font-bold">
              Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy. +39 123 456 7890
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
