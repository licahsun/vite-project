import { useEffect, useState } from 'react';
import '../css/App0811-weather.css';
import { FaUmbrella } from "react-icons/fa";
import axios from "axios";

const App = () => {
    //建立一個react變數，會使用useState Hook
    //存放各縣市資料
    //const [變數名稱,更改變數名稱的方法] = useState(預設值);
    const [citys, setCitys] = useState([]);

    //useEffect()=>渲染後，只呼叫一次json
    //取得渲染後的DOM元素，要寫在useEffect
    useEffect(() => {
        //非同步取出資料
        (async () => {
            //取得public中的json檔
            // const jsonData = await axios.get('./json/F-C0032-001.json');
            //取得src中的json檔
            const jsonData = await axios.get('./src/json/F-C0032-001.json');

            //檢查是否連上json
            // console.log(jsonData.data.cwaopendata.dataset);

            //取得各縣市的氣象資訊
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);

            //將各縣市資料透過setCitys方法，更新citys
            setCitys(location);

        })();

    }, []);


    //卡片內容
    const Cardbody = ({city,item,index}) => {
        return (
            <>
                {/*日期*/}
                <div className='date'>
                    {/* 11日 */}
                    {/*使用日期時間函數 toLocaleString() */}
                    {/* {weatherElement.elementName.time.parameter.startTime} */}
                    {
                        new Date(item.startTime).toLocaleString(undefined, {
                            day: 'numeric'
                        })
                    }
                </div>
                <div className='time'>
                    {
                        new Date(item.startTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                        })
                    }
                    <br />
                    ~<br />
                    {/* 結束 */}
                    {
                        new Date(item.endTime).toLocaleString(undefined, {
                            hour: 'numeric',
                            minute: 'numeric'
                        })
                    }
                </div>
                <div className='weatherPic'>
                    {/* <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" /> */}
                    <img style={{
                        width: "95px",
                        height: "95px"
                    }} src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                </div>
                <div className='weatherName'>
                    {/* 晴午後短暫雷陣雨 */}
                    {item.parameter.parameterName}
                </div>
                <div className='pop'>
                    <FaUmbrella />
                    {/* 80% */}
                    {
                        city.weatherElement[4].time[index].parameter.parameterName
                    }%
                </div>
            </>
        )
    }
    //卡片元件
    function Card({ city }) {
        return (
            <div>
                {/*取得縣市陣列跑迴圈*/}
                <div className='card'>
                    {/*卡片標題*/}
                    <div className='card-header'>
                        {/*台北市*/}
                        {city.locationName}
                    </div>
                    {/*卡片內容*/}
                    <div className='card-body'>
                        {/*取得陣列資料跑迴圈*/}
                        {/* 顯示各縣市的三個欄位資訊 */}
                        {
                            city.weatherElement[0].time.map((item, index) => {
                                return (
                                    <div className='item' key={index}>
                                        <Cardbody item={item} city={city} index={index}/>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {/*36小時天氣預報的版型*/}
            <h2>36小時天氣預報版型</h2>
            <div className='cards'>
                {
                    citys.map((city) => {
                        return (
                            //呼叫元件(字首大寫)
                            <Card city={city} key={city.locationName} />
                        )
                    })
                }

            </div>
        </>
    )
}

export default App