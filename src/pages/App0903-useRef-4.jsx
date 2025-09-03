import React, { useRef } from 'react'

const App = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function inputFocus1() {
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function inputFocus2() {
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function inputFocus3() {
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }


    return (
        <div>
            <h1>useRef-變色</h1><hr />

            文字方塊1<input ref={inputRef1} type="text" onFocus={inputFocus1} /><br />
            文字方塊2<input ref={inputRef2} type="text" onFocus={inputFocus2} /><br />
            文字方塊3<input ref={inputRef3} type="text" onFocus={inputFocus3} />
        </div>
    )
}

export default App