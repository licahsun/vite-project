import '../css/App0826b-slide.css'
import { useState } from 'react'
import { FaArrowAltCircleLeft,FaArrowAltCircleRight } from "react-icons/fa";

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { url: './images/p3.jpg' },
        { url: './images/p5.jpg' },
        { url: './images/p7.jpg' },
        { url: './images/p9.jpg' },
    ]

    //上一張
    const prevSlide = () => {
        //切換目前圖片的索引位置
        setCurrentIndex((prevIndex) => {
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        })
    }
    //下一張
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            prevIndex === slides.length - 1 ? 0: prevIndex + 1
        })
    }


    //按鈕列
    const Arrow = ({ direction, onClick }) => {
        <div>
            {
                direction === 'left'
                    ? (
                        //左按鈕
                        <FaArrowAltCircleLeft />
                    )
                    : (
                        //右按鈕
                        <FaArrowAltCircleRight />
                    )
            }
        </div>
    }
    return (
        <div className='wrap'>
            <h1>輪播</h1>
            <div className="slide">
                <div className="slideImg" style={{
                    backgroundImage: `url(${slides[currentIndex].url})`
                }}>
                    {/* 顯示圖片區 */}
                </div>
                {/* 左 */}
                <Arrow direction={'left'} onClick={prevSlide} />
                {/* 右 */}
                <Arrow direction={'right'} onClick={nextSlide} />
            </div>
        </div>
    )
}

export default App