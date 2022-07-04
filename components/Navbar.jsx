import {
  ShoppingBagIcon,
  HomeIcon,
  ShoppingCartIcon,
  ClipboardListIcon,
  ChatIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

export default function Navbar() {
  const resetState = {
    home: false,
    orders: false,
    cart: false,
    chat: false,
    bag: false,
  };
  const [state, setState] = useState({
    home: true,
    orders: false,
    cart: false,
    chat: false,
    bag: false,
  });

  const clickHandler = (item) => {
    setState({ ...resetState, [item]: true });
    console.log(state);
  };
  const lifted = "bg-primary border-4 border-white p-3 rounded-full -mt-12";
  return (
    <div className="px-4 fixed bottom-2 left-0 z-50 w-screen">
      <div className="sm:hidden flex justify-around items-center rounded-full shadow-xl px-6 py-4 bg-primary">
        <div
          onClick={() => {
            clickHandler("home");
          }}
          className={`cursor-pointer transition-all ${state.home && lifted}`}
        >
          <HomeIcon className="text-white h-7 w-7" />
        </div>
        <div
          onClick={() => {
            clickHandler("orders");
          }}
          className={`cursor-pointer transition-all ${state.orders && lifted}`}
        >
          <ClipboardListIcon className="text-white h-7 w-7" />
        </div>
        <div
          onClick={() => {
            clickHandler("cart");
          }}
          className={`cursor-pointer transition-all ${state.cart && lifted}`}
        >
          <ShoppingCartIcon className="text-white h-7 w-7" />
        </div>
        <div
          onClick={() => {
            clickHandler("chat");
          }}
          className={`cursor-pointer transition-all ${state.chat && lifted}`}
        >
          <ChatIcon className="text-white h-7 w-7" />
        </div>
        <div
          onClick={() => {
            clickHandler("bag");
          }}
          className={`cursor-pointer transition-all ${state.bag && lifted}`}
        >
          <ShoppingBagIcon className="text-white h-7 w-7" />
        </div>
      </div>
    </div>
  );
}
