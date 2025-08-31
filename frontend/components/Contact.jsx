import Deals from "./common/Deals";
import Footer from "./common/Footer";
import NavigationBar from "./common/NavigationBar";
export default function Contact() {
  return (
    <main className="bg-fixed bg-[url('/menu-images/menu-bg.jpg')] h-[60vh] w-full bg-cover bg-center flex flex-col gap-y-20 relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10">
        <NavigationBar />
        <div className="flex flex-col justify-center items-center gap-5 mt-10">
          <h1 className="text-8xl font-bold text-white">OFFERS</h1>
        </div>
      </div>
      <div className="flex justify-center items-center z-10 ">
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
          <div className="flex flex-col gap-5 py-5 px-20">
            <div className=" flex flex-col gap-3">
              <h4>WE LOVE TO HEAR FROM YOU</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div>
              <form class="w-full">
                <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-3 group">
                    <label
                      for="firstName_label"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      id="firstname_input"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div class="relative z-0 w-full mb-3 group">
                    <label
                      for="lastName_label"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      id="lastname_input"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                <div class="relative z-0 w-full mb-3 group">
                  <label
                    for="email_label"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email_input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div class="relative z-0 w-full mb-3 group">
                  <label
                    for="phone_number_label"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    id="phone_number_input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="relative z-0 w-full mb-3 group">
                  <label
                    for="subject_label"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    required
                    type="email"
                    id="subject_input"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div class="relative z-0 w-full mb-3 group">
                  <label
                    for="countries"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Location
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div class="relative z-0 w-full mb-3 group">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
