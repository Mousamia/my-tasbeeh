import { useState } from "react";

/* eslint-disable no-unused-vars */
export default function BgTasbeeh() {
    const [add, setAdd]  = useState(0);

    const addOne = () =>{     
      setAdd(add+1);
    }
    function reset(){
       const  newNum = 0;
      setAdd(newNum);

    }
    return (
        <>
            <div className="w-7/9 h-3/4  mx-auto mt-20">
                <h3 className="text-9xl mt-5 font-bold"> { add} </h3>
                <div>
                    <button onClick={addOne} className="text-2xl bg-sky-500 rounded-md mx-2 px-8 py-4  mt-8">
                        ADD
                    </button>
                    <button onClick={reset} className="text-2xl bg-sky-500 rounded-md mx-2 px-8 py-4  my-6">
                        RESET
                    </button>
                </div>
            </div>
        </>
    )
}