import React from "react";

const Search = () => {
  return (
    <div>
      <div className="flex  gap-2">
        <div>
          <select className="select select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              Small
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
