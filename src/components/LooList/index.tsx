import React, { FC } from "react";
import { ILoo } from "@/interfaces/common";
import { useSession } from "next-auth/react";

interface ILooList{
	looData: ILoo[];
	selectedLoo: string | null;
	onLooSelect: (loo: string) => void;
  }
  
const LooList: FC<ILooList> = ({ looData, selectedLoo, onLooSelect }) => {
	const { data: session } = useSession();
	const isAuthenticated = !!session;

  return (
    <div className="w-[500px]">
      <ul className="list-none p-0">
        {looData &&
          looData.map((loo: ILoo) => (
            <li
              key={loo?.id}
              onClick={() => onLooSelect(loo?.id)}
              className={`cursor-pointer p-2.5 my-2.5 rounded-lg shadow-sm transition-colors duration-300 max-w-[500px] ${
                (selectedLoo === loo?.id && isAuthenticated)
                  ? "bg-blue-200 hover:bg-blue-300"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <p>{loo?.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LooList;
