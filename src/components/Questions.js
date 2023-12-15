
import { useEffect, useState } from "react";
import { useFetch } from "../Hooks/UseFetch"
import "./Questions.css"
export default function Questions({ questionLevel, setQuestionLevel, setShowCorect, setShowWrong, setStartTimer, setActiveElement, activeElement }) {
  const { data, isLoading, error } = useFetch("http://localhost:3000/questions/" + questionLevel);
  const [canClick, setCanClick] = useState(true);
  const [dorost, setDorost] = useState(null);

  useEffect(() => {
    if (data) {
      const correctAns = data.answers.find(a => a.correct);
      setDorost(correctAns)
    }
  }, [data])


  const handeClick = (correct, ans) => {
    if (!canClick) {
      return
    }
    setActiveElement(ans);
    setStartTimer(false);
    if (correct) {
      setCanClick(false);
      setTimeout(() => {
        setShowCorect(true);
        setCanClick(true);
      }, 4000)


    } else {
      setTimeout(() => {
        setShowWrong(true);
      }, 4000)
    }
  }
  const getClassName = (ans) => {
    if (activeElement === ans) {
      if (ans.correct) {
        return "choice corect"
      } else {
        return "choice wrong"
      }
    } else {
      return "choice"
    }
  }
  const getFinal = (ans) => {
if(activeElement===dorost){
  return ""
}else{
  if(dorost===ans){
    return "dorost"
  }else{
    return ""
  }
}

  }
  const getLabel = (index) => {
    switch (index) {
      case 0: return "الف :"
      case 1: return "ب :"
      case 2: return "ج :"
      case 3: return "د :"
    }
  }
  return (
    <>
      {error && <p>مشکلی پیش آمده</p>}
      {isLoading && <p>کمی صبر کنید ...</p>}
      {data &&
        <div>
          <h1>{data.question}</h1>
          <div className="answer-sec">
            {data.answers.map((ans, index) => {
              return (
                <div
                  key={index}
                  className={getClassName(ans) + " " + (activeElement ? getFinal(ans) : "")}
                  onClick={() => handeClick(ans.correct, ans)}
                >
                  <span>{getLabel(index)}</span>
                  <span>{ans.value}</span>
                </div>
              )
            })}
          </div>
        </div>

      }
    </>
  )
}
