
import "./App.css";
import Cards from "./Components/Cards";



function App() {
  return (
    <div className="App">
      <div className="grid">
        <Cards />
      </div>
    </div>
  );
}

export default App;

// setRandomizedCards((prevCards) => {
//   return prevCards.map((card) => {
//     const { flipped } = card;
//     return card.name === name ? { ...card, flipped: !flipped } : card;
//   });
// });
