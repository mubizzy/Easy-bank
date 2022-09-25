import React from "react";

function Nav() {
  return (
    <header className="relative z-50 bg-white shadow shadow-neutral-200">
      <div className="p-5 max-w-7xl mx-auto flex items-center justify-between xl:px-0">
        <div>
          <img src="./images/logo.svg" alt="" />
        </div>

        <nav>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
          </ul>
        </nav>

        <button className="btn hidden lg:block">Request Invite</button>

        <div className="lg:hidden">
          <button id="menu-button">
            <img src="./images/icon-hamburger.svg" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
