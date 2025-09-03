import { useState } from "react";
import Hero from "./common/Hero";

export default function Contact() {
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    location: "",
    message: ""
  });

  const handleChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch("http://localhost:7070/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerDetails),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.log("Validation errors:", errorData);
        alert("Validation failed: " + JSON.stringify(errorData));
        return;
      }

      const data = await res.text();
      console.log("Success:", data);
      alert("Form submitted successfully!");

      // reset form
      setCustomerDetails({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        location: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form", err);
      alert("Something went wrong!");
    }
  };

  const customDiv = (
    <div className="grid grid-cols-[25vw,1fr] bg-white w-[60vw] border-2 rounded-3xl">
      {/* Left column omitted for brevity */}
      <div className="flex flex-col gap-5 py-5 px-20">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-3 group">
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                name="firstName"
                value={customerDetails.firstName}
                onChange={handleChange}
                required
                type="text"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div className="relative z-0 w-full mb-3 group">
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                name="lastName"
                value={customerDetails.lastName}
                onChange={handleChange}
                required
                type="text"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-3 group">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              name="email"
              value={customerDetails.email}
              onChange={handleChange}
              required
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="relative z-0 w-full mb-3 group">
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              value={customerDetails.phoneNumber}
              onChange={handleChange}
              required
              type="tel"
              id="phoneNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="relative z-0 w-full mb-3 group">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              name="subject"
              value={customerDetails.subject}
              onChange={handleChange}
              required
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="relative z-0 w-full mb-3 group">
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">
              Select Location
            </label>
            <select
              name="location"
              value={customerDetails.location}
              onChange={handleChange}
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="">Select one</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
            </select>
          </div>

          <div className="relative z-0 w-full mb-3 group">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              name="message"
              value={customerDetails.message}
              onChange={handleChange}
              id="message"
              rows="4"
              placeholder="Leave a comment..."
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  return <Hero div={customDiv} name={"CONTACT"} />;
}
