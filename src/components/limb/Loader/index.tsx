import React from "react";

type SocialPlatform = {
  forWhich?: "Facebook" | "Instagram";
};
type LoaderProps = SocialPlatform & {
  placeAt: "page" | "block";
};

function Loader({ placeAt, forWhich }: LoaderProps) {
  return (
    <div
      className={`flex ${
        placeAt === "page" ? `flex-col h-screen` : `space-x-2`
      } items-center justify-center`}
    >
      {placeAt === "page" ? (
        <>
          {forWhich === "Facebook" && (
            <div className="fill-facebook-primary w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          )}
          {forWhich === "Instagram" && (
            <div className="fill-instagram-primary w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
          )}
        </>
      ) : (
        <>
          <div
            className={`w-3 h-3 ${
              forWhich === "Facebook"
                ? `bg-facebook-primary`
                : `bg-instagram-primary`
            } animate-fade-in-down`}
          />
          <div
            className={`w-3 h-3 ${
              forWhich === "Facebook"
                ? `bg-facebook-primary`
                : `bg-instagram-primary`
            } animate-fade-out-down`}
          />
          <div
            className={`w-3 h-3 ${
              forWhich === "Facebook"
                ? `bg-facebook-primary`
                : `bg-instagram-primary`
            } animate-fade-in-up`}
          />
        </>
      )}
    </div>
  );
}

export default Loader;
