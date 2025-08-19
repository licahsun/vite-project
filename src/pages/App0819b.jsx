//次元件
function SecondComponent({ c }) {
    //console.log(props)
    return <>
        <h1>我是secondComponent元件</h1>
        <p>SecondComponent的屬性是:{c}</p>
    </>
}

//子元件接收主元件傳遞過來的元件
function MyComponent({ a, children }) {
    //console.log(props)
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, esse. Nemo impedit sapiente aliquam, consequatur quidem eveniet soluta dolor id? Voluptates fugit aut delectus deserunt. Inventore ratione at natus cumque?</p>
            {children}
            我是{a}
        </>
    )
}

//子元件接收主元件傳遞過來的元件
function MyComponent2({ b }) {
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, esse. Nemo impedit sapiente aliquam, consequatur quidem eveniet soluta dolor id? Voluptates fugit aut delectus deserunt. Inventore ratione at natus cumque?</p>
            <SecondComponent c={b}/>
            我是{b}
        </>
    )
}

//主元件
const App0819b = () => {
    return (
        <div>
            <h1>元件之間，傳遞元件</h1>
            {/* 較進階做法，理解即可 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性a"/>
            </MyComponent>

            <hr />
            {/* 現階段使用此方法(逐層各自呼叫元件) */}
            <MyComponent2 b="屬性b" />
        </div>
    )
}

export default App0819b