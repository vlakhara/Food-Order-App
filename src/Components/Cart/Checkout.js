import { useRef } from "react";
import style from "./Checkout.module.css";

const Checkout = (props) => {
  const nameRef = useRef();
  const cityRef = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const city = cityRef.current.value;
    const nameIsValid = name.trim().length > 0;
    const cityIsValid = city.trim().length > 0;

    const formIsValid = nameIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name,
      city,
    });
  };
  return (
    <form onSubmit={formSubmitHandler} className={style.checkout}>
      <div className={style.formControls}>
        <div className={style.inputGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref={nameRef} />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="city">City</label>
          <input type="text" name="city" ref={cityRef} />
        </div>
        <div className={style.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit" className={style.button}>
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
