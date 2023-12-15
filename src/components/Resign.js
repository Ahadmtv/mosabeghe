
export default function Resign({restart,data,questionLevel}) {
    const getPrice=()=>{
        const priceLevel=questionLevel-1;
          return data[priceLevel].price
      }
      return (
        <div>
            <div className="backdrop">
                <div className="modal">
                    <h2>شما انصراف دادید</h2>
                    <h3> شما تا اینجا برنده {getPrice()} شدید </h3>
                    <button onClick={restart}>بازی دوباره</button>
                </div>
            </div>
        </div>
      )
    }
