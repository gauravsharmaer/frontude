// import React from "react";
// import Card from "./Card";
// const CardContainer = () => {
//   return (
//     <div className="text-white grid grid-cols-3 gap-4 w-[55%]">
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//       <Card
//         title="Conversion exceeded our expectations!
// Their approach to paid advertising is
// unparalleled, resulting in a substantial
// growth in our revenue stream."
//         icon="https://github.com/shadcn.png"
//       />
//     </div>
//   );
// };

// export default CardContainer;

import React from "react";
import "./App.css"; // Import custom CSS for keyframe animation
import Card from "./Card";

const cardData = [
  {
    title:
      "Conversion exceeded our expectations! Their approach to paid advertising is unparalleled, resulting in a substantial growth in our revenue stream.",
    icon: "https://github.com/shadcn.png",
  },
  {
    title:
      "The insights provided have been instrumental in optimizing our marketing strategies, resulting in an increased ROI.",
    icon: "https://github.com/shadcn.png",
  },
  {
    title:
      "Their approach is unparalleled and their guidance has driven measurable business results.",
    icon: "https://github.com/shadcn.png",
  },
  {
    title:
      "Our conversion rates have improved significantly thanks to their paid advertising strategies.",
    icon: "https://github.com/shadcn.png",
  },
];

const LoopSlider = ({ cards, duration, direction }) => {
  return (
    <div
      className="loop-slider"
      style={{ "--duration": `${duration}ms`, "--direction": direction }}
    >
      <div
        className="inner flex gap-3"
        style={{ animation: `loop ${duration}ms linear infinite ${direction}` }}
      >
        {[...cards, ...cards].map((card, index) => (
          <Card key={index} title={card.title} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="tag-list max-w-full relative overflow-hidden flex flex-col gap-6">
        <LoopSlider cards={cardData} duration={20000} direction="normal" />
        <LoopSlider cards={cardData} duration={22000} direction="reverse" />
        <LoopSlider cards={cardData} duration={18000} direction="normal" />
        <LoopSlider cards={cardData} duration={24000} direction="reverse" />
        <div className="fade absolute inset-0 pointer-events-none bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
      </div>
    </div>
  );
};

export default App;
