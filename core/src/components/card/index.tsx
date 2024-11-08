"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  name: string;
  price: number;
  description: string;
  discount?:number
}
const Card: React.FC<Props> = ({ name, price, description,discount }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="border border-rose-950 rounded-sm p-3 w-fit">
      <p>{name}</p>
      <p><span className="">{price}</span> <span>{discount}</span>rub</p>
      <p>{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <button  onClick={() =>{
            if(count>0){
                setCount(count-1)
            }
        }} className="p-2 border border-red-600 rounded-md">минус</button>
        <p>{count}</p>
        <button
          onClick={() => setCount(count+1)}
          className="p-2 border border-red-600 rounded-md"
        >
          плюс
        </button>
      </div>


    </div>
  );
};

export default Card;
