import React from 'react';

const CustomAnimationComponent = ({ title, text1, text2, buttonText }) => {
  return (
    <div className="text-center md:h-screen grid place-content-center relative" id="solution">
      <style>
        {`
          /* Define a custom animation */
          @keyframes slideIn {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* Apply the animation to the "Solution" element */
          #solution h2 {
            animation: slideIn 1s ease forwards;
          }

          /* Define another custom animation */
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          /* Apply the animation to the paragraph element */
          #solution p {
            animation: fadeIn 1s ease forwards;
          }
        `}
      </style>
      <div>
        <scroll-show>
          <h2 className="bg-green-500 inline-block text-gray7 px-6 py-4 text-6xl shadow-xl">{title}</h2>
        </scroll-show>
        <scroll-show>
          <p className="text-3xl text-gray4 max-w-3xl">
            {text1} <img-reveal src="/img/build.gif"  alt="guif"/> <span className="text-green-500 font-display animate-pulse">{text2}</span>
          </p>
          <a className="animate-bounce mb-[200px] text-2xl no-underline block" href="#fun">
            {buttonText}
          </a>
        </scroll-show>
      </div>
    </div>
  );
};

export default CustomAnimationComponent;