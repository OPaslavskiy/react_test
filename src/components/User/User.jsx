import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nameAction, ageAction } from "../../redux/actions/userAction";

export function User() {
  const { name, age } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleInput = ({ target: { value, id } }) =>
    id === "name" ? dispatch(nameAction(value)) : dispatch(ageAction(value));

  return (
    <div className="boxGreeting">
      <input
        className="input"
        onChange={handleInput}
        type="text"
        id="name"
        placeholder="name"
      />
      <input
        className="input"
        onChange={handleInput}
        type="number"
        placeholder="age"
      />
      <div>
        My name is {name}. I am {age} old.
      </div>
    </div>
  );
}
