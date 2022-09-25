import React from "react";

function Content() {
  return (
    <section className="bg-gray-100 py-20 px-5 text-center lg:text-left">
      <article className="max-w-7xl mx-auto mb-20 ">
        <h2>Why choose Easybank?</h2>
        <p className="lg:w-1/2">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </article>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        <article>
          <img
            src="./images/icon-online.svg"
            alt=""
            className="block mx-auto mb-6 md:inline"
          />
          <h3>Online Banking</h3>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </article>

        <article>
          <img
            src="./images/icon-budgeting.svg"
            alt=""
            className="block mx-auto mb-6 md:inline"
          />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </article>

        <article>
          <img
            src="./images/icon-onboarding.svg"
            alt=""
            className="block mx-auto mb-6 md:inline"
          />
          <h3>Fast Onboarding</h3>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </article>

        <article>
          <img
            src="./images/icon-api.svg"
            alt=""
            className="block mx-auto mb-6 md:inline"
          />
          <h3>Open API</h3>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Content;
