import { CheckCircle } from "lucide-react";
import { Signal, Wifi, BatteryFull } from "lucide-react";
export default function Features() {
  const Features = [
    "Realtime Inventory Tracking",
    "Expiry date alerts",
    "Automated stock updates",
    "Grocery list generator",
    "Recipe suggestions",
    "Multi-user Collaboration",
  ];
  return (
    <div id="phone-container" className="bg-[#EAEDE5] w-[21vw] h-[25vw] relative top-[11.2vw] left-[76vw] rounded-tr-[3vw] rounded-tl-[3vw] pt-[1vw] border-2 border-black">
        <div className="flex justify-between items-center px-10 py-2 w-full rounded-t-3xl ">
      <span className="text-black text-sm font-semibold">10:32</span>
      <div className="flex gap-2 items-center">
        <Signal className="w-4 h-4 text-black" />
        <Wifi className="w-4 h-4 text-black" />
        <div className="relative flex items-center">
          <BatteryFull className="w-6 h-6 text-black" />
          <span className="absolute right-1 text-xs font-bold text-black bg-yellow-400 px-1 rounded-md">
            78
          </span>
        </div>
      </div>
    </div>
    <div className="max-w-sm mx-auto p-4 bg-[#EAEDE5] rounded-3xl">
      <div className="flex justify-between  items-center text-yellow-500 text-lg font-semibold mb-2">
        <span>← Notes</span>
        <span>...</span>
      </div>
      <p className="text-gray-400 text-center text-sm">25 March 2025 at 10:31</p>
      <ul className="mt-3 space-y-3">
        {Features.map((Feature, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-700 text-[16px]">
            <CheckCircle className="text-yellow-500 w-5 h-5" />
            <span>{Feature}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
