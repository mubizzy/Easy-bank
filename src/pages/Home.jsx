import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:place-items-center ">
      <article className="px5- py-20  text-center max-w-xl  mx-auto lg:text-left m-auto">
        <h1 className="text-slate-800 text-3xl mb-6 lg:text-5xl md:mt-7 ">
          Next generation digital banking
        </h1>

        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="btn">Request Invite</button>
      </article>

      <article className="relative">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="./images/bg-intro-desktop.svg"
          />
          <img src="./images/bg-intro-mobile.svg" alt="" className="w-full" />
        </picture>

        <img
          src="./images/image-mockups.png"
          alt=""
          className="absolute -top-32 lg:-right-20"
        />
      </article>
    </section>
  );
};

export default Home;
