import React from "react";

function Footer() {
  return (
    <footer class="py-10 px-5 xl:px-0">
      <div class="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 max-w-7xl mx-auto">
        <div>
          <article>
            <img src="./images/logo.svg" alt="" class="block mx-auto" />
          </article>

          <article class="my-8">
            <ul class="flex flex-wrap items-center justify-center gap-2">
              <li>
                <img src="./images/icon-facebook.svg" alt="" />
              </li>
              <li>
                <img src="./images/icon-youtube.svg" alt="" />
              </li>
              <li>
                <img src="./images/icon-twitter.svg" alt="" />
              </li>
              <li>
                <img src="./images/icon-pinterest.svg" alt="" />
              </li>
              <li>
                <img src="./images/icon-instagram.svg" alt="" />
              </li>
            </ul>
          </article>
        </div>

        <article class="mt-8 mb-2 md:m-0">
          <ul class="text-center md:text-left flex flex-col items-center justify-center md:justify-start md:items-start gap-2">
            <li class="text-white">About Us</li>
            <li class="text-white">Contact</li>
            <li class="text-white">Blog</li>
          </ul>
        </article>

        <article class="mb-8 md:m-0">
          <ul class="text-center md:text-left flex flex-col items-center justify-center md:justify-start md:items-start gap-2">
            <li class="text-white">Careers</li>
            <li class="text-white">Support</li>
            <li class="text-white">Privacy Policy</li>
          </ul>
        </article>

        <div class="md:text-right">
          <article class="text-center md:text-right">
            <button class="btn">Request Invite</button>
          </article>

          <article>
            <p class="text-slate-400 text-center my-8 md:text-right">
              © Easybank. All Rights Reserved
            </p>
          </article>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
