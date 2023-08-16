import useInput from "../Hook/useInput";

const CheckOut = (props) => {
  const {
    value: enterName,
    isValid: enterNameIsValid,
    hasError: nameinputHasError,
    valueChangehandler: nameInputChangehandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterCity,
    isValid: enterCityIsValid,
    hasError: cityInputHasError,
    valueChangehandler: cityInputChangehandler,
    inputBlurHandler: cityInputBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enterPostalCode,
    isValid: enterpostalIsValid,
    hasError: postalCodeinputHasError,
    valueChangehandler: postalCodeInputChangehandler,
    inputBlurHandler: postalCodeInputBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput((value) => value.trim() > 0);

  const {
    value: enterStreet,
    isValid: enterStreetIsValid,
    hasError: streetinputHasError,
    valueChangehandler: StreetInputChangehandler,
    inputBlurHandler: streetInputBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== "");
  let formValid = false;

  if (
    enterCityIsValid &&
    enterpostalIsValid &&
    enterStreetIsValid &&
    enterNameIsValid
  ) {
    formValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enterCityIsValid &&
      !enterPostalCode &&
      !enterStreetIsValid &&
      !enterNameIsValid
    ) {
      return;
    }

    props.onConfirm({
      name: enterName,
      city: enterCity,
      postalCode: enterPostalCode,
      street: enterStreet,
    });

    resetNameInput();
    resetCityInput();
    resetPostalCodeInput();
    resetStreetInput();
  };

  const nameInputClasses = nameinputHasError
    ? "form-control invalid"
    : "form-control ";
  const streetInputClasses = streetinputHasError
    ? "form-control invalid"
    : "form-control ";
  const postalInputClasses = postalCodeinputHasError
    ? "form-control invalid"
    : "form-control ";
  const citynputClasses = cityInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputChangehandler}
          type="text"
          id="name"
          value={enterName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameinputHasError && <p>Name Is Not Valid</p>}

      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          onChange={StreetInputChangehandler}
          type="text"
          id="street"
          value={enterStreet}
          onBlur={streetInputBlurHandler}
        />
      </div>
      {streetinputHasError && <p>Street Is Not Valid</p>}

      <div className={postalInputClasses}>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          onChange={postalCodeInputChangehandler}
          type="number"
          id="postalCode"
          value={enterPostalCode}
          onBlur={postalCodeInputBlurHandler}
        />
      </div>
      {postalCodeinputHasError && <p>Postal Code Is Not Valid</p>}

      <div className={citynputClasses}>
        <label htmlFor="city">City</label>
        <input
          onChange={cityInputChangehandler}
          type="text"
          id="city"
          value={enterCity}
          onBlur={cityInputBlurHandler}
        />
      </div>
      {cityInputHasError && <p>City Is Not Valid</p>}
      <div className="form-actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button disabled={!formValid}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
