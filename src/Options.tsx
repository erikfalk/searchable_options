import React from "react";

interface IOptionsComponent {
  searchValue: string;
}

export const Options: React.FC<IOptionsComponent> = ({ searchValue }) => {
  const firstName: JSX.Element = (
    <div id="first_name_option">
      <p>
        First Name:
        <input id="first_name_input" type="text"></input>
      </p>
    </div>
  );

  const lastName = (
    <div id="last_name_option">
      <p>
        Last Name:
        <input id="last_name_input" type="text"></input>
      </p>
    </div>
  );

  const age = (
    <div id="age_option">
      <p>
        Age:
        <input id="age_input" type="text"></input>
      </p>
    </div>
  );

  const options = [firstName, lastName, age];

  return (
    <>
      {searchValue === ""
        ? options
        : options.filter((o) => o.props.id.includes(searchValue))}
    </>
  );
};
