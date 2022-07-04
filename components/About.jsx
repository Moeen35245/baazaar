import React from "react";

export default function About() {
  return (
    <div className="bg-lightbg p-3 lg:p-5 lg:rounded mt-8 flex-1 ">
      <h3 className="text-primary text-3xl font-bold mt-6 text-center">
        Introducing Baazaar
      </h3>
      <h2 className="text-2xl font-bold font-roboto mt-4 text-center ">
        A small business app for the Lodha Eternis Neighbourhood
      </h2>

      <p className="p1 font-roboto text-center text-lg mt-4 font-medium">
        For the past 7 months we have been calling Lodha Eternis our home and
        will continue to do so for at least another year. The experience, right
        from security to the other little things that are always kept in check
        by the commitee and it&#39;s members has been nothing but delightful.
      </p>

      <p className="p2 font-roboto text-center text-lg mt-7 font-medium">
        Given our active community&#39;s inclination and accustomed nature of
        using digital apps like &#39;Adda&#39; {"&"} &#39;Telegram&#39; for
        internal communication an daily niggles we could think of no better
        place than home to launch the beta phase of our app
        &#39;&#39;Baazaar&#39;&#39;. We would like to request the help of this
        active community in trying out and reviewing our efforts over the past
        18 months with the singular goal of empowering local businesses by
        getting them online and creating a marketplace. The app is now available
        on the google play store, limited to android phones only and iOS will be
        launched soon.
      </p>
    </div>
  );
}
