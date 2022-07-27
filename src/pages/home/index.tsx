import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "../../icon";


const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-x-8">
      <Link
        to="/facebook"
        className="flex flex-col gap-y-2 items-center"
      >
        <Facebook width={80} height={80}  className="e" />
        <p className="text-facebook-primary text-sm md:text-base font-semibold">
          Go to Facebook
        </p>
      </Link>
      <Link
       to="/instagram"
        
        className="flex flex-col gap-y-2 items-center"
      >
        <Instagram  width={80} height={80} className="fill-instagram-primary" />
        <p className="text-instagram-primary text-sm md:text-base font-semibold">
          Go to Instagram
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
