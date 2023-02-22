import "./App.css";
import Calendar from "./componets/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>Itenery for 7 Days in Chicago 🏙️ </h1>
      <h2>
        Welcome to Chicago, Mary! Check out this calendar to know the city and
        see all the sights during your stay.
      </h2>
      <Calendar />
    </div>
  );
};

export default App;
