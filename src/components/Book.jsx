import React from "react";

const Book = () => {
  return (
    <div id="deals">
      <form>
        <div>
          <label>Where To?</label>
          <select name="" id="">
            <option>Moroco</option>
            <option>Mexico</option>
            <option>France</option>
            <option>Greece</option>
          </select>
          <div>
            <div>
              <label> Check-In </label>
              <input type="date" className="cursor-pointer"></input>
            </div>
            <div>
              <label> Check-Out </label>
              <input type="date"></input>
            </div>
          </div>
          <label></label>
          <button>Availabilities & Rates</button>
        </div>
      </form>
    </div>
  );
};

export default Book;
