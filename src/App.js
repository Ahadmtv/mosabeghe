import { useState } from 'react';
import './App.css';
import Money from './components/Money';
import Questions from './components/Questions';
import FirstModal from './components/FirstModal';
import CorectModal from './components/CorectModal';
import WrongModal from './components/WrongModal';
import Timer from './components/Timer';``
import TimeIsOver from './components/TimeIsOver';

function App() {
  const [questionLevel, setQuestionLevel] = useState(1);
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showCorect, setShowCorect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(30);
  const restart=()=>{
    setTime(30);
    setShowWrong(false);
    setShowFirstModal(true);
    setStartTimer(false);
}
  const startGame = () => {
    setShowFirstModal(false);
    setStartTimer(true);
  }
  return (
    <div className="App">
      <div className='main-wrapper'>
        <div className='main-sec'>
          <div className='timer'>
           <Timer time={time} setStartTimer={setStartTimer} startTimer={startTimer} setTime={setTime}/>
          </div>
          <div className='question-sec'>
            {!showFirstModal && <Questions questionLevel={questionLevel} setQuestionLevel={setQuestionLevel} setShowCorect={setShowCorect} setShowWrong={setShowWrong} setStartTimer={setStartTimer} />}
          </div>
        </div>
        <div className='money-sec'>
          {!showFirstModal && <Money questionLevel={questionLevel} />}
        </div>
      </div>
      {showFirstModal && <FirstModal startGame={startGame} />}
      {showCorect && <CorectModal setQuestionLevel={setQuestionLevel} setShowCorect={setShowCorect} setShowWrong={setShowWrong} setStartTimer={setStartTimer} setTime={setTime} />}
      {showWrong && <WrongModal restart={restart} />}
      {!time && <TimeIsOver restart={restart}/>}
    </div>
  );
}

export default App;
