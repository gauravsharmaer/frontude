import { OrbitingCircles } from "./OrbitingCircle";
import Star1 from "@/assets/star1.svg";
import Star2 from "@/assets/star2.svg";
import Star3 from "@/assets/star3.svg";
import Star4 from "@/assets/star4.svg";
import Star5 from "@/assets/star5.svg";
import Star6 from "@/assets/star6.svg";
import Star7 from "@/assets/star7.svg";
import Star8 from "@/assets/star8.svg";
import Image from "next/image";

export function OrbitingCirclesDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Circles
            </span> */}

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <Image src={Star1} alt="Star 1" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={120}
            >
                <Image src={Star2} alt="Star 2" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                radius={160}
            >
                <Image src={Star3} alt="Star 3" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={200}
            >
                <Image src={Star4} alt="Star 4" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                radius={240}
                duration={20}
                reverse
            >
                <Image src={Star5} alt="Star 5" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                radius={280}
                duration={20}
                delay={20}
                reverse
            >
                <Image src={Star6} alt="Star 6" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                radius={320}
                duration={20}
                delay={10}
                reverse
            >
                <Image src={Star7} alt="Star 7" />
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                radius={360}
                duration={20}
                reverse
            >
                <Image src={Star8} alt="Star 8" />
            </OrbitingCircles>

            {/* Inner Circles */}
            {/* <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <Icons.whatsapp />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <Icons.notion />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            
        </div>
    );
}
