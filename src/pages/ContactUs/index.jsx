import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Title from '../../components/Title';

export default function AboutUs() {
  return (
    <div>
      <Header />
      <Title text="Contact Us" />
      <section className="py-20 lg:px-20 lg:py-26 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8 px-14">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-md">
                <div className="flex items-center justify-center mb-8 w-20 h-20 rounded-xl">
                  <img src="/images/logo.svg" alt="logo" />
                </div>
                <h3
                  className="mb-6 text-3xl font-semibold"
                  style={{ letterspacing: '-0.5px' }}
                >
                  &ldquo;Basko is a total game-changer! Streamlined workflow
                  &amp; productivity. Highly recommend!&rdquo;
                </h3>
                <h4 className="font-semibold tracking-tight mb-1">
                  Mohammad Seyfi Marandi
                </h4>
                <span>Co-Founder, Online Shop</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 space-y-10 items-start flex flex-col justify-center">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <p className="text-gray-600 font-semibold ml-4">
                  mohammadmarandi89@gmail.com
                </p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <p className="text-gray-600 font-semibold  ml-4">09109968992</p>
              </div>

              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-gray-600 font-semibold ml-4">
                  Shamsipour Technichal Collage
                </p>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.905544656781!2d51.45016651132627!3d35.703941928611826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0248182b1fdf%3A0x41b23deefbb9c666!2sShamsipour%20Technical%20and%20Vocational%20College!5e0!3m2!1sen!2sfr!4v1687272460330!5m2!1sen!2sfr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] p-12"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
}
