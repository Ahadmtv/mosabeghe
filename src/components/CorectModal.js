import "./corectModal.css"
export default function CorectModal({questionLevel, setQuestionLevel, setShowCorect,setStartTimer,setTime,setActiveElement,setShowResign }) {
    const nextLevel = () => {
        setActiveElement(null);
        setQuestionLevel((prev) => prev + 1);
        setShowCorect(false);
        setTime(30);
        setStartTimer(true);
    }
    const reSign = () => {
        setShowCorect(false);
        setShowResign(true);
    }
    return (
        <div>
            <div className="backdrop">
                <div className="modal">
                    <h2>بریم برای مرحله {questionLevel+1} ؟</h2>
                    <div className="group-btn">
                    <button onClick={nextLevel}>بزن بریم</button>
                    <button onClick={reSign}>انصراف </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
