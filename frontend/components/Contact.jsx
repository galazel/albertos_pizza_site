import { useState } from "react";
import Deals from "./common/Deals";
import Footer from "./common/Footer";
import Hero from "./common/Hero";
import NavigationBar from "./common/NavigationBar";
import axios from "axios";
export default function Contact() {
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    location: "",
    message: "",
  });
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const alerts = [
    <div
      class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <svg
        class="shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Danger alert!</span> Change a few things up
        and try submitting again.
      </div>
    </div>,
    <div
      className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <svg
        className="shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Success alert!</span> Change a few things
        up and try submitting again.
      </div>
    </div>,
  ];

  const handleOnChange = (event) => {
    setCustomerDetails({
      ...customerDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:7070/save",
        customerDetails
      );
      setIsSuccessAlert(true);
      setTimeout(() => {
        clearEverything();
      }, 2000);
    } catch (error) {
      console.log("There is something wrong");
      setIsErrorAlert(true);
      setTimeout(() => {
        clearEverything();
      }, 2000);
    }
  };
  function clearEverything() {
    setIsSuccessAlert(false);
    setIsErrorAlert(false);
    setCustomerDetails({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      location: "",
      message: "",
    });
  }
  const customDiv = (
    <div className="grid grid-cols-[25vw,1fr] bg-white w-[60vw] border-2 rounded-3xl">
      <div className="bg-orange-100 p-5 rounded-3xl">
        <div>
          <h1>CORPORATE OFFICE</h1>
          <ul>
            <li>Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.</li>
            <li>+39 123 456 7890</li>
            <li>mail@example.com</li>
          </ul>
        </div>
        <div>
          <h2>PRESS INQUIRIES</h2>
          <p>Matteo Damian</p>
          <ul>
            <li>+39 123 456 7890</li>
            <li>mail@example.com</li>
          </ul>
        </div>
        <div>
          <h3>STAY CONNECTED</h3>
          <ul className="flex">
            <li>a</li>
            <li>d</li>
            <li>v</li>
            <li>b</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-5 px-20">
        <div className=" flex flex-col gap-3">
          <h4>WE LOVE TO HEAR FROM YOU</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div>
          <form
            className="w-full"
            method="post"
            action="http://localhost:7070/post"
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-3 group">
                <label
                  htmlFor="firstName_label"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  name="firstName"
                  value={customerDetails.firstName}
                  onChange={(event) => handleOnChange(event)}
                  required
                  type="text"
                  id="firstname_input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="relative z-0 w-full mb-3 group">
                <label
                  htmlFor="lastName_label"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  required
                  name="lastName"
                  value={customerDetails.lastName}
                  onChange={(event) => handleOnChange(event)}
                  type="text"
                  id="lastname_input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <label
                htmlFor="email_label"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                name="email"
                required
                onChange={(event) => handleOnChange(event)}
                value={customerDetails.email}
                type="email"
                id="email_input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="relative z-0 w-full mb-3 group">
              <label
                htmlFor="phone_number_label"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <input
                required
                name="phoneNumber"
                value={customerDetails.phoneNumber}
                onChange={(event) => handleOnChange(event)}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                id="phone_number_input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <label
                htmlFor="subject_label"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                required
                name="subject"
                value={customerDetails.subject}
                onChange={(event) => handleOnChange(event)}
                type="email"
                id="subject_input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="relative z-0 w-full mb-3 group">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Location
              </label>
              <select
                name="location"
                value={customerDetails.location}
                onChange={(event) => handleOnChange(event)}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your message
              </label>
              <textarea
                name="message"
                value={customerDetails.message}
                onChange={(event) => handleOnChange(event)}
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          {isErrorAlert && alerts[0]}
          {isSuccessAlert && alerts[1]}
        </div>
      </div>
    </div>
  );

  return <Hero div={customDiv} name={"CONTACT"} />;
}
