import React from "react";

function Distro() {
  return (
    <section className="px-5 py-20">
      <article className="max-w-7xl mx-auto">
        <h2 className="text-center md:text-left">Latest Articles</h2>
      </article>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
        <article>
          <img
            src="./images/image-currency.jpg"
            alt=""
            class="rounded-t-lg md:h-56 md:object-cover w-full lg:w-72"
          />

          <article class="p-8 bg-white shadow rounded-b-lg">
            <h3 class="text-sm text-slate-800 opacity-75">
              By Claire Robinson
            </h3>

            <h2 class="text-xl">Receive money in any currency with no fees</h2>

            <p>
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </article>
        </article>

        <article>
          <img
            src="./images/image-restaurant.jpg"
            alt=""
            class="rounded-t-lg md:h-56 md:object-cover w-full lg:w-72"
          />

          <article class="p-8 bg-white shadow rounded-b-lg">
            <h3 class="text-sm text-slate-800 opacity-75">By Wilson Hutton</h3>
            <h2 class="text-xl">Treat yourself without worrying about money</h2>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </article>
        </article>

        <article>
          <img
            src="./images/image-plane.jpg"
            alt=""
            class="rounded-t-lg md:h-56 md:object-cover w-full lg:w-72"
          />

          <article class="p-8 bg-white shadow rounded-b-lg">
            <h3 class="text-sm text-slate-800 opacity-75">By Wilson Hutton</h3>
            <h2 class="text-xl">Take your Easybank card wherever you go</h2>
            <p>
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </article>
        </article>

        <article>
          <img
            src="./images/image-confetti.jpg"
            alt=""
            class="rounded-t-lg md:h-56 md:object-cover w-full lg:w-72"
          />

          <article class="p-8 bg-white shadow rounded-b-lg">
            <h3 class="text-sm text-slate-800 opacity-75">
              By Claire Robinson
            </h3>
            <h2 class="text-xl">Our invite-only Beta accounts are now live!</h2>
            <p>
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </article>
        </article>
      </div>
    </section>
  );
}

export default Distro;
