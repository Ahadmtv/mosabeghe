import { useFetch } from "../Hooks/UseFetch"
import "./money.css"
export default function Money({questionLevel,data,isLoading,error}) {
    
    return (
        <div className="wrapper">
            {isLoading && <p>کمی صبر کنید ...</p>}
            {error && <p>مشکلی پیش آمده</p>}
            {data &&
                <ul>
                    {data.map((num)=>{
                        return(<li key={num.stage} className={num.stage===questionLevel?"active":""}>{num.stage} -{num.price} هزار تومان </li>)
                    }).reverse()
                    }
                </ul>
            }
        </div>
    )
}
