import React from "react";
import { forwardRef } from "react";
// we cant pass ref direct as a argumt so we must 
// use "forwardRef" end pass second argument as "ref";
// when we use ref from parent component to chiled component use forwardRef ref is second argument
const PinItem = forwardRef(({ changehandler,onbackspacehandler },ref) => { 


  const handlekeyup=(e) => {
    console.log(e)
    //  if the user click backspace persone this action or else 
    //  called changehandler function
    if(e.keyCode === 8){
      onbackspacehandler(e);
    }else{
       changehandler(e);
    }


  }
  return (
    <div>
      <input ref={ref} maxLength={1} onKeyUp={handlekeyup} /> 
    </div>
  );
});

export default PinItem;
// input =//3

// maxLength={1} we can onlt fill 1 elemnet in each input box 
// bcs of {1} argument if we want fill 4 value in each input box 
// maxLength={4} use