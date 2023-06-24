import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const user = [
  {
    FullName: 'Mohammad Seyfi Marandi',
    UserName: 'Msm79',
    Email: 'Mohammadmarandi89@gmail.com',
    MobileNumber: '09109968992',
  },
];

export default function UserProfile() {
  return (
    <div>
      <Header />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Profile
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8  lg:flex justify-between py-10 lg:space-x-4">
        <div className="bg-white shadow lg:w-[70%] px-6 py-10">
          {user.map((user) => (
            <div className="lg:flex w-full justify-around flex-wrap ">
              <div className="space-y-4">
                <div>
                  <span className="font-medium">Full Name</span>
                  <p>{user.FullName}</p>
                </div>
                <div>
                  <span className="font-medium">UserName</span>
                  <p>Msm79</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-medium">Email</span>
                  <p>Mohammadmarandi89@gmail.com</p>
                </div>
                <div>
                  <span className="font-medium">Mobile Number</span>
                  <p>09109968992</p>
                </div>
              </div>
            </div>
          ))}

          <div className="lg:px-20 mt-8">
            <button className='mb-4 mt-4 px-6 py-2 text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"'>
              Change
            </button>
          </div>
        </div>
        <div className="bg-white shadow lg:w-[30%] flex justify-center items-center p-4 flex-col mt-0 xs:mt-4">
          <img
            src="./images/mohammad.jpg"
            alt="mohammad"
            className="w-[200px] rounded-[200px]"
          />
          <button className='mb-4 mt-4 px-6 py-2 text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"'>
            Take Picture
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
