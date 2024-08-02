import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpeg",
      title: "Birthday Party decoration",
    },
    {
      id: 2,
      url: "/Anniversary-Decoration.jpg",
      title: "Anniversary Party Decoration",
    },
    {
      id: 3,
      url: "/engagement.jpg",
      title: "Engagement Party Decoration",
    },
    {
      id: 4,
      url: "/wedding.jpg",
      title: "Wedding Decoration",
    },
    {
      id: 5,
      url: "/first.jpg",
      title: "Room Decoration",
    },
    {
      id: 6,
      url: "/house.jpg",
      title: "House Decoration",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <p>{element.title}</p>
                
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;