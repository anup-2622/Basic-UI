import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Home</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            cumque voluptatum temporibus distinctio aliquid fuga eum quos quasi
            obcaecati deleniti maiores dignissimos ea non architecto vitae quia
            amet voluptate sit mollitia facere sapiente doloremque. Mollitia
            eligendi tempore, delectus iusto aut veritatis porro molestias
            itaque.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ? </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed
            voluptates numquam quae praesentium voluptatem laboriosam similique
            eveniet, corporis debitis hic et!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: ".25s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: ".50s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: ".75s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
