
export default function TimeIsOver({restart,data,questionLevel}) {
    const getPrice=()=>{
        const priceLevel=questionLevel-2;
        if(priceLevel===-1){
          return 0
        }else{
          return data[priceLevel].price
        }
    
      }
      return (
        <div>
            <div className="backdrop">
                <div className="modal">
                    <h2>زمان شما به اتمام رسید</h2>
                    <h3> شما تا اینجا برنده {getPrice()} شدید </h3>
                    <button onClick={restart}>بازی دوباره</button>
                </div>
            </div>
        </div>
      )
    }
