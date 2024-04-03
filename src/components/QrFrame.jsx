import QrReader from "./QrReader.jsx";
import { AiOutlineClose } from "react-icons/ai";

export default function QrFrame({ className, isHidden, onClick, children }) {
  return (
    <>
      {!isHidden && (
        <div
          className={
            "mx-auto flex w-80 md:w-96 flex-col items-center justify-center rounded-2xl bg-whiteSmoke p-8 " +
            className
          }
        >
          <div className={"relative  h-72 w-64 md:h-80 md:w-full"}>
            <div
              className={
                "overflow-hidde flex h-full w-full rounded-2xl border-2 border-black"
              }
            >
              {children}
              <div
                className={
                  "absolute left-0  right-0 top-0 mx-auto h-0.5 w-20   bg-whiteSmoke"
                }
              ></div>
              <div
                className={
                  "absolute bottom-0  left-0 right-0 mx-auto h-0.5 w-20   bg-whiteSmoke"
                }
              ></div>
              <div
                className={
                  "absolute bottom-0  left-0 top-0 my-auto h-20 w-0.5   bg-whiteSmoke"
                }
              ></div>
              <div
                className={
                  "absolute bottom-0  right-0 top-0 my-auto h-20 w-0.5   bg-whiteSmoke"
                }
              ></div>
              {/*<div*/}
              {/*  className={*/}
              {/*    "bg-gray-400 absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-[1px] w-[90%] animate-pulse  rounded-2xl"*/}
              {/*  }*/}
              {/*></div>*/}
            </div>
          </div>
          <div
            className={
              "mt-4 flex flex-row-reverse items-center gap-1 rounded-2xl bg-vanilla px-2 py-1 text-xs "
            }
          >
            <p>Make sure you allow camera access</p>
            <span
              className={
                "flex h-4 w-4 items-center justify-center rounded-full  border-[1px] border-black font-bold"
              }
            >
              !
            </span>
          </div>

          {/*<AiOutlineClose*/}
          {/*  size={44}*/}
          {/*  color={"gold"}*/}
          {/*  onClick={onClick}*/}
          {/*  className={*/}
          {/*    "absolute left-0 right-0 top-20 z-[1000] mx-auto cursor-pointer "*/}
          {/*  }*/}
          {/*/>*/}
        </div>
      )}
    </>
  );
}
