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
import "./App.css";
import AutoScrollCardList2 from "./ScrollBottomToTop";
import AutoScrollCardList from "./ScrollTopToBottom";

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



const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <div className="tag-list max-w-full relative overflow-hidden flex  gap-6">
        <div className='overlay1'></div>
        <AutoScrollCardList reviews={cardData} />
        <AutoScrollCardList2 reviews={cardData} />
        <AutoScrollCardList reviews={cardData} />
        <div className='overlay2'></div>
      </div>
    </div>
  );
};

export default App;
