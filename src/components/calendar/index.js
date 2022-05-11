// Libraries and Style
import "./Calendar.css";
import { useEffect, useState } from "react";

// Components
import Modal from "../Modal";

const initialState = {
  Sun: {
    name: "Sun",
    restaurants: {
      Hummus: { name: "Hummus", participants: {}, numOfParticipants: 0 },
      Hamburger: { name: "Hamburger", participants: {}, numOfParticipants: 0 },
      Pasta: { name: "Pasta", participants: {}, numOfParticipants: 0 },
      Falafel: { name: "Falafel", participants: {}, numOfParticipants: 0 },
      Sushi: { name: "Sushi", participants: {}, numOfParticipants: 0 },
    },
  },
  Mon: {
    name: "Mon",
    restaurants: {
      Hummus: { name: "Hummus", participants: {}, numOfParticipants: 0 },
      Hamburger: { name: "Hamburger", participants: {}, numOfParticipants: 0 },
      Pasta: { name: "Pasta", participants: {}, numOfParticipants: 0 },
      Falafel: { name: "Falafel", participants: {}, numOfParticipants: 0 },
      Sushi: { name: "Sushi", participants: {}, numOfParticipants: 0 },
    },
  },
  Tue: {
    name: "Tue",
    restaurants: {
      Hummus: { name: "Hummus", participants: {}, numOfParticipants: 0 },
      Hamburger: { name: "Hamburger", participants: {}, numOfParticipants: 0 },
      Pasta: { name: "Pasta", participants: {}, numOfParticipants: 0 },
      Falafel: { name: "Falafel", participants: {}, numOfParticipants: 0 },
      Sushi: { name: "Sushi", participants: {}, numOfParticipants: 0 },
    },
  },
  Wed: {
    name: "wed",
    restaurants: {
      Hummus: { name: "Hummus", participants: {}, numOfParticipants: 0 },
      Hamburger: { name: "Hamburger", participants: {}, numOfParticipants: 0 },
      Pasta: { name: "Pasta", participants: {}, numOfParticipants: 0 },
      Falafel: { name: "Falafel", participants: {}, numOfParticipants: 0 },
      Sushi: { name: "Sushi", participants: {}, numOfParticipants: 0 },
    },
  },
  Thu: {
    name: "Thu",
    restaurants: {
      Hummus: { name: "Hummus", participants: {}, numOfParticipants: 0 },
      Hamburger: { name: "Hamburger", participants: {}, numOfParticipants: 0 },
      Pasta: { name: "Pasta", participants: {}, numOfParticipants: 0 },
      Falafel: { name: "Falafel", participants: {}, numOfParticipants: 0 },
      Sushi: { name: "Sushi", participants: {}, numOfParticipants: 0 },
    },
  },
};

export default function Calender() {
  const [calendar, setCalendar] = useState(initialState);

  const addParticipant = (day, restaurantName, participant) => {
    setCalendar((formerState) => {
      let newState = JSON.parse(JSON.stringify(formerState));
      const restaurant = newState[day].restaurants[restaurantName];
      if (!restaurant.participants[participant.email]) {
        restaurant.participants[participant.email] = participant.name;
        restaurant.numOfParticipants++;
      }
      return newState;
    });
  };

  return (
    <div className="calendar">
      {/* day-view */}
      {Object.entries(calendar).map((day, i) => {
        return (
          <div className="day-view" key={i}>
            {day[1].name}
            {/* restaurants-view */}
            <div className="restaurants">
              {Object.entries(day[1].restaurants).map((restaurant, i) => {
                return (
                  <div className="restaurant" key={i}>
                    {restaurant[1].name}
                    <div>
                      <span className="participant-amount">
                        {restaurant[1].numOfParticipants}
                      </span>
                      <Modal
                        title={restaurant[1].name}
                        onSubmit={addParticipant}
                        day={day[0]}
                      />
                    </div>

                    {/* <div className="restaurant__participants">
                      <ul>
                        {Object.values(calendar[day[0]].restaurants[restaurant[1].name].participants).map((name, i) => {
                          return <li key={`participant list ${i}`}>{name}</li>
                        })}
                      </ul>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
