import React from "react";
import Event from "./Event";

const Row = (props) => {
  return (
    <tr>
      <td className="time">{props.time}</td>
      <Event {...props.events["Sunday"]} />
      <Event {...props.events["Monday"]} />
      <Event {...props.events["Tuesday"]} />
      <Event {...props.events["Wednesday"]} />
      <Event {...props.events["Thursday"]} />
      <Event {...props.events["Friday"]} />
      <Event {...props.events["Saturday"]} />
    </tr>
  );
};

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <Row
            time="8 am "
            events={{
              Saturday: {
                event: "Breakfast 🥣",
                color: "blue",
                location: "The Ivy Hotel",
              },
              Monday: {
                event: "Breakfast 🥣",
                color: "pink",
                location: "Swissotel Chicago",
              },
              Tuesday: {
                event: "Breakfast 🥣",
                color: "green",
                location: "Swissotel Chicago",
              },
              Wednesday: {
                event: "Breakfast 🥣",
                color: "blue",
                location: "The Westin",
              },
              Thursday: {
                event: "Breakfast 🥣",
                color: "pink",
                location: "Loews Chicago Hotel",
              },
              Friday: {
                event: "Breakfast 🥣",
                color: "green",
                location: "The Westin",
              },
              Sunday: {
                event: "Breakfast 🥣",
                color: "blue",
                location: "The Ivy Hotel",
              },
            }}
          />
          <Row
            time="9 am "
            events={{
              Saturday: {
                event: "Happy Hour 🎶",
                color: "blue",
                location: "The Ivy Hotel",
              },
              Monday: {
                event: "Meditation 🧘‍♀️",
                color: "green",
                location: "The Westin",
              },
              Tuesday: { event: "", color: "", location: "" },
              Wednesday: { event: "", color: "", location: "" },
              Thursday: { event: "", color: "", location: "" },
              Friday: { event: "", color: "", location: "" },
              Sunday: { event: "", color: "", location: "" },
            }}
          />
          <Row
            time="10 am "
            events={{
              Saturday: {
                event: "Friends 👯",
                color: "green",
                location: "Beach House",
              },
              Monday: { event: "", color: "", location: "" },
              Tuesday: { event: "", color: "", location: "" },
              Wednesday: {
                event: "Family 👨‍👩‍👧‍👦",
                color: "green",
                location: "Beach House",
              },
              Thursday: {
                event: "Home Deco 🖼️",
                color: "pink",
                location: "Beach House",
              },
              Friday: { event: "", color: "", location: "" },
              Sunday: {
                event: "Do Nothing 😎",
                color: "blue",
                location: "Beach House",
              },
            }}
          />
          <Row
            time="11 am "
            events={{
              Saturday: {
                event: "Friend Call 🍟",
                color: "green",
                location: "The Ivy Hotel",
              },
              Monday: {
                event: "Downtown 🏘️",
                color: "blue",
                location: "Downtown Chicago",
              },
              Tuesday: { event: "", color: "", location: "" },
              Wednesday: { event: "", color: "", location: "" },
              Thursday: { event: "", color: "", location: "" },
              Friday: { event: "", color: "", location: "" },
              Sunday: { event: "", color: "", location: "" },
            }}
          />
          <Row
            time="1 pm "
            events={{
              Saturday: {
                event: "Lunch 🎩",
                color: "green",
                location: "Maple & Ash",
              },
              Monday: {
                event: "Lunch 🎩",
                color: "green",
                location: "Maple & Ash",
              },
              Tuesday: {
                event: "Lunch 🎩",
                color: "green",
                location: "The Westin",
              },
              Wednesday: {
                event: "Lunch 🎩",
                color: "green",
                location: "The Westin",
              },
              Thursday: {
                event: "Lunch 🎩",
                color: "green",
                location: "Swissotel Chicago",
              },
              Friday: {
                event: "Lunch 🎩",
                color: "green",
                location: "Swissotel Chicago",
              },
              Sunday: {
                event: "Lunch 🎩",
                color: "green",
                location: "The Ivy Hotel",
              },
            }}
          />
          <Row
            time="2 pm "
            events={{
              Saturday: { event: "", color: "", location: "" },
              Monday: { event: "", color: "", location: "" },
              Tuesday: { event: "", color: "", location: "" },
              Wednesday: { event: "", color: "", location: "" },
              Thursday: { event: "", color: "", location: "" },
              Friday: { event: "", color: "", location: "" },
              Sunday: { event: "", color: "", location: "" },
            }}
          />
          <Row
            time="3 pm "
            events={{
              Saturday: { event: "", color: "", location: "" },
              Monday: { event: "", color: "", location: "" },
              Tuesday: { event: "", color: "", location: "" },
              Wednesday: { event: "", color: "", location: "" },
              Thursday: { event: "", color: "", location: "" },
              Friday: { event: "", color: "", location: "" },
              Sunday: {
                event: "Snack 🎩",
                color: "blue",
                location: "Beach House",
              },
            }}
          />
          <Row
            time="4 pm "
            events={{
              Saturday: { event: "Beach 🌊", color: "blue", location: "Beach" },
              Monday: { event: "", color: "", location: "" },
              Tuesday: { event: "", color: "", location: "" },
              Wednesday: { event: "", color: "", location: "" },
              Thursday: { event: "", color: "", location: "" },
              Friday: { event: "", color: "", location: "" },
              Sunday: {
                event: "Downtown ",
                color: "blue",
                location: "Downtown Chicago",
              },
            }}
          />
          <Row
            time="5 pm "
            events={{
              Saturday: {
                event: "Movies 🎦",
                color: "pink",
                location: "Beach House",
              },
              Monday: {
                event: "Dinner 🎩",
                color: "green",
                location: "The Westin",
              },
              Tuesday: {
                event: "Dinner 🎩",
                color: "green",
                location: "The Westin",
              },
              Wednesday: {
                event: "Dinner 🎩",
                color: "green",
                location: "The Ivy Hotel",
              },
              Thursday: {
                event: "Dinner 🎩",
                color: "green",
                location: "The Ivy Hotel",
              },
              Friday: {
                event: "Dinner 🎩",
                color: "green",
                location: "The Westin",
              },
              Sunday: {
                event: "Dinner 🎩",
                color: "green",
                location: "The Westin",
              },
            }}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
