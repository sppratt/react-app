import './App.css';
import {useState} from 'react';
import MoodButton from './components/MoodButton';
import MoodDisplay from './components/MoodDisplay';
import ResetButton from './components/ResetButton';



function App() {
    const [happiness, setHappiness] = useState(localStorage.getItem("happiness") || "");
    const [calm, setCalm] = useState(localStorage.getItem("calm") || "");
    const [anger, setAnger] = useState(localStorage.getItem("anger") || "");

    return (
    <div className="App" id='root'>
      <header className="App-header">
          <h1>Mood Tracker</h1>
          <p className="subtitle">by Sami Pratt</p>

          <div className="button-row">
              <MoodButton
                  label="Increase Happiness"
                  colorClass="happy"
                  onClick={() => {
                      const newValue = happiness + "😊";
                      setHappiness(newValue);
                      localStorage.setItem("happiness", newValue);
                  }}
              />

              <MoodButton
                  label="Increase Calm"
                  colorClass="calm"
                  onClick={() => {
                      const newValue = calm + "😌";
                      setCalm(newValue);
                      localStorage.setItem("calm", newValue);
                  }}
              />

              <MoodButton
                  label="Increase Anger"
                  colorClass="angry"
                  onClick={() => {
                      const newValue = anger + "😡";
                      setAnger(newValue);
                      localStorage.setItem("anger", newValue);
                  }}
              />
          </div>

          <div className="mood-display">
              <MoodDisplay title="Happiness" emojis={happiness} />
              <MoodDisplay title="Calm" emojis={calm} />
              <MoodDisplay title="Anger" emojis={anger} />
          </div>

          <ResetButton
              onReset={() => {
                  setHappiness("");
                  setCalm("");
                  setAnger("");
                  localStorage.clear();
              }}
          />
      </header>
    </div>
  );
}

export default App;
