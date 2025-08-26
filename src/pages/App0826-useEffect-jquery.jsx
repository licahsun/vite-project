import { useEffect } from 'react'
import $ from 'jquery'
import '../css/App0826-useEffect-jquery.css'


const App = () => {
    //js要放在useEffect裡面做，並加上,[]
    useEffect(()=>{
        //當滑鼠移到圖片上時，圖片放大
        $('.zoom').on('mouseover', function () {
            $(this).addClass('imgScale');
        })
    
        //當滑鼠離開時，還原團片
        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    },[])

    return (
        <div>
            <h1>useEffect</h1>
            <h2>jQuery-圖片縮放</h2>
            <a href="#" className='zoom'>
                <img src="./images/p3.jpg" alt="" />
            </a>
        </div>
    )
}

export default App