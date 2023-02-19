//Nav bar in tailwind

import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray w-full p-5">
      <nav className="w-1200px m-auto flex items-center justify-between">
        <h1 className="text-lg font-bold">Panaverse</h1>
        <ul className="flex gap-2">
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">Home</li>
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">About</li>
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">Contact</li>
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">Testimanial</li>
        </ul>
      </nav>
    </div>
  );
}
<div className="w-3/4 scale-90">
  <Image src={"/developer.svg"} width="300" height="300" alt="illustration" />
</div>;
