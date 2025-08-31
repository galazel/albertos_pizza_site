import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

function FreeDelivery() {
  return (
    <section className="bg-red-400 h-[77vh] flex justify-center">
      <div className=" px-4 py-5 h-[100%] flex flex-col items-center">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          FREE DELIVERY!
        </h1>
        <h1 className="display-3 fw-bold text-body-emphasis lh-1 mb-3">
          DOWNLOAD THE APP NOW!
        </h1>
        <p>
          Malesuada dignissim non, aliquam id tincidunt amet in sed et gravida
          pulvinar ipsum mauris etiam mattis nisl.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button
            type="button"
            className="btn  btn-lg px-4 gap-3 font-bold border-red-700 text-red-700"
            fdprocessedid="iq7j9"
          >
            <FontAwesomeIcon icon={faGooglePlay} />
            GOOGLE PLAY
          </button>
          <button
            type="button"
            className="btn  btn-lg px-4 gap-3 font-bold border-red-700 text-red-700"
            fdprocessedid="iq7j9"
          >
            <FontAwesomeIcon icon={faApple} />
            APP STORE
          </button>
        </div>
      </div>
    </section>
  );
}

export default FreeDelivery;
