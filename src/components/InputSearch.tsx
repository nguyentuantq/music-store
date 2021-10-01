import React, { ChangeEvent, useEffect, useState } from "react";

function InputSearch(props: { handleInputSearch(keyWord: string): void }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      props.handleInputSearch(query);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const handleQueryValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.currentTarget.value);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        value={query}
        onChange={handleQueryValue}
        placeholder="Enter your key word here!"
      />
    </>
  );
}

export default InputSearch;
