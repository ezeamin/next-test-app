"use client";

const Error = ({ error, reset }) => {
  return (
    <div>
      <h1>Error: {error.message}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Error;
