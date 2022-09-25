import React from 'react'

function footer() {
  return ( 
  <footer class="py-10 px-5 xl:px-0">
  <div
    class="md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 max-w-7xl mx-auto"
  >
    <div>
      <article>
        <img src="./images/footer-logo.svg" alt="" class="block mx-auto" />
      </article>

      <article class="my-8">
        <ul class="flex flex-wrap items-center justify-center gap-2">
          <li><img src="./images/icon-facebook.svg" alt="" /></li>
          <li><img src="./images/icon-youtube.svg" alt="" /></li>
          <li><img src="./images/icon-twitter.svg" alt="" /></li>
          <li><img src="./images/icon-pinterest.svg" alt="" /></li>
          <li><img src="./images/icon-instagram.svg" alt="" /></li>
        </ul>
      </article>
    </div>);
}

export default footer