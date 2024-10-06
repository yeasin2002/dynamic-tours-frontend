"use client";
export default function Button(props) {
  return (
    <>
      <button
        className="bg-green-300 text-white px-7 py4 rounded-3xl duration-200 hover:bg-black"
        {...props}
      >
        {props.children}
      </button>
    </>
  );
}
