import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

function FreeDelivery() {
  return (
    <div className="bg-gray-200 h-[77vh]">
      <div className="container col-xxl-8 px-4 py-5  h-[100%]">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="/home-images/download-now.jpg"
              className="d-block mx-lg-auto img-fluid rounded-lg"
              alt="Bootstrap Themes"
              width="380"
              height="380"
              loading="lazy
              "
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              FREE DELIVERY!
            </h1>
            <h1 className="display-3 fw-bold text-body-emphasis lh-1 mb-3">
              DOWNLOAD THE APP NOW!
            </h1>
            <p>
              Malesuada dignissim non, aliquam id tincidunt amet in sed et
              gravida pulvinar ipsum mauris etiam mattis nisl.
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
        </div>
      </div>
    </div>
  );
}

export default FreeDelivery;
