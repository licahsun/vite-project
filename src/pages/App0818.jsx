import { useState } from "react";

//建立元件方法1
function MyComponent() {
    const [counts, setCounts] = useState(0);
    const handleClick = () => {
        setCounts(counts + 1);
    }
    return (
        // 呼叫自訂函式不用加()
        <button id='btn1' onClick={handleClick}>點擊次數:{counts}</button>
    )
}
//方法2
// const MyComponent=()=>{
//     return(

//     )
// }

const App0818 = () => {
    // let counts = 0;
    // const [counts,setCounts]=useState(0);

    return (
        <div>
            {/* <button id='btn1' onclick={() => {
                // counts++;
                // setCounts(counts + 1);
                console.log(counts);
            }}>點擊次數:{counts}</button> */}
            <MyComponent />
        </div >
    )
}
export default App0818