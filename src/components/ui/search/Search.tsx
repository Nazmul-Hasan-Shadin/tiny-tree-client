

const Search = () => {

  return (
    // style={{boxShadow: '2px 5px 5px 0px rgba(0,0,0,0.75)'}}
    <div >
      <div   className="flex  border-2 justify-around bg-[#fff]  p-8   shadow-x ">
        <div className="flex-1">
          <select className="select select-bordered select-sm  w-full max-w-xs ">
            <option disabled selected>
              select categories
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
        <div  className="flex-1">
        <select className="select select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              price range
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
        <div  className="flex-1">
        <select className="select select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              coming soon
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
