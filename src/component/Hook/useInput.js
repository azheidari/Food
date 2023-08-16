import { useReducer } from "react";

const initiallInputState = {
  value: "",
  isTouch: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouch: state.isTouch };
  }
  if (action.type === "BLUR") {
    return { isTouch: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouch: false, value: "" };
  }

  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initiallInputState
  );

  const ValuIsValid = validateValue(inputState.value);
  const hasError = !ValuIsValid && inputState.isTouch;

  const valueChangehandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: ValuIsValid,
    hasError,
    valueChangehandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
