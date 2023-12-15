import { useState } from 'react';
import './App.css';
import Money from './components/Money';
import Questions from './components/Questions';
import FirstModal from './components/FirstModal';
import CorectModal from './components/CorectModal';
import WrongModal from './components/WrongModal';
import Timer from './components/Timer';
import TimeIsOver from './components/TimeIsOver';
import { useFetch } from './Hooks/UseFetch';
import Resign from './components/Resign';

function App() {
  const [questionLevel, setQuestionLevel] = useState(1);
  const [showFirstModal, setShowFirstModal] = useState(true);
  const [showCorect, setShowCorect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [showResign, setShowResign] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(30);
  const [activeElement,setActiveElement]=useState(null);
  const { data, isLoading, error } = useFetch("http://localhost:3000/money");
  const restart=()=>{
    setActiveElement(null);
    setQuestionLevel(1);
    setTime(30);
    setShowWrong(false);
    setShowFirstModal(true);
    setStartTimer(false);
    setShowResign(false);
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
            {!showFirstModal && <Questions questionLevel={questionLevel} setQuestionLevel={setQuestionLevel} setShowCorect={setShowCorect} setShowWrong={setShowWrong} setStartTimer={setStartTimer} activeElement={activeElement} setActiveElement={setActiveElement} />}
          </div>
        </div>
        <div className='money-sec'>
          {!showFirstModal && <Money questionLevel={questionLevel} data={data} isLoading={isLoading} error={error} />}
        </div>
      </div>
      {showFirstModal && <FirstModal startGame={startGame} />}
      {showCorect && <CorectModal questionLevel={questionLevel} setQuestionLevel={setQuestionLevel} setShowCorect={setShowCorect} setShowResign={setShowResign} setStartTimer={setStartTimer} setTime={setTime} setActiveElement={setActiveElement} />}
      {showWrong && <WrongModal restart={restart} data={data} questionLevel={questionLevel} />}
      {!time && <TimeIsOver restart={restart} data={data} questionLevel={questionLevel}/>}
      {showResign && <Resign restart={restart} data={data} questionLevel={questionLevel} />}
    </div>
  );
}

export default App;
