import React, { useState } from "react";
import "../assets/styles/card.css";

const Prices = () => {
  const [event, setEvent] = useState([
    {
      name: "IEEE Members",
      event: [
        {
          name: "Faculty Member",
          price: "Rs. 6500",
        },
        {
          name: "Student",
          price: "Rs. 4400",
        },
        {
          name: "Industry Professionals",
          price: "Rs. 7650",
        },
        {
          name: "Foreign Delegates, Professionals",
          price: "255 USD",
        },
        {
          name: "Foreign Delegates, Student",
          price: "125 USD",
        },
      ],
    },
    {
      name: "Non IEEE Members",
      event: [
        {
          name: "Faculty Member",
          price: "Rs. 8000",
        },
        {
          name: "Student",
          price: "Rs. 5500",
        },
        {
          name: "Industry Professionals",
          price: "Rs. 100",
        },
        {
          name: "Foreign Delegates, Professionals",
          price: "300 USD",
        },
        {
          name: "Foreign Delegates, Student",
          price: "150 USD",
        },
      ],
    },
    {
      name: "Others",
      event: [
        {
          name: "Listeners (Inside India)",
          price: "Rs. 500",
        },
        {
          name: "Listeners (Outside India)",
          price: "15 USD",
        },
      ],
    },
  ]);
  return (
    <div className="price_container">
      <div class="text-center price-div">
        <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
          Event <span class="text-indigo-600">Price List</span>
        </h3>
        <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
          The fee allows full access to all the sessions, workshops and
          proceedings
        </p>
      </div>
      <div className="cards">
        {event.map((data) => (
          <div className="card-out">
            {/* name={data.name} */}
            <h3 className="card-head">{data.name}</h3>
            <div className="price-list">
              {data.event.map((price) => (
                <div className="price">
                  <span className="price-name">{price.name}</span>
                  <span className="price-cost">{price.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div class="text-center price-div">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mt-5">
          Book your seat
        </button>
      </div>
    </div>
  );
};

export default Prices;
