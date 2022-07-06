import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import PinItem from "./PinItem";

// inputBoxLen=>createinputboxes

const Pin = ({ lenght, setOtpHandler }) => {
  const [inputBoxValue, setinputBoxValue] = useState(
    // 7 create array with empty it will contain input box value
    new Array(lenght).fill("")
  );

  const inputRef = useRef([]); //4

  const [createinputboxes] = useState(new Array(lenght).fill(1)); // 1 create inputboxes for otp
  //   console.log(inputRef.current)
  const hnadlechange = (e, index) => {
    //5

    inputBoxValue[index] = e.target.value; //8 onclick we store the value in index of array

    setinputBoxValue(inputBoxValue); //9 set the inputbox value

    if (e.target.value.length > 0 && index < lenght - 1) {
      // 6 it will focus the input box after filling last input
      inputRef.current[index + 1].focus();
    }
    setOtpHandler(inputBoxValue.join("")); //10 it will show the input box value eon Ui
  };

  const handlebackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value; //11 onclick  baxkspace we remove the value in index of array
    setinputBoxValue(inputBoxValue); //12 it will remove value from ui
    setOtpHandler(inputBoxValue.join(""));
  };

  const handlepaste = (e) => { //14 past
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < lenght);
      data.forEach((value, index) => {
        inputBoxValue[index] = value;
        inputRef.current[index].value = value;
        if (index < lenght-1) { // focus last on paste
          inputRef.current[index + 1].focus();
        }
      })
      console.log(data);
  };
  return (
    <div
      onPaste={handlepaste} //13
      style={{ display: "flex", justifyContent: "center" }}
    >
      {createinputboxes.map((item, index) => {
        // 2 and map inputboxes in PinItem pass props
        return (
          <PinItem
            key={index}
            changehandler={(e) => hnadlechange(e, index)}
            onbackspacehandler={(e) => handlebackspace(e, index)}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
          />
        );
      })}
    </div>
  );
};

Pin.propTypes = {
  lenght: PropTypes.number,
  onChange: PropTypes.func,
};

export default Pin;

//  <PinItem 4
