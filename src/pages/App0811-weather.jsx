import { useEffect } from 'react';
import '../css/App0811-weather.css';
import { FaUmbrella } from "react-icons/fa";
import axios from "axios";

const App = () => {
    //useEffect()=>渲染後，只呼叫一次json
    useEffect(() => {
        //非同步取出資料
        (async () => {
            //取得public中的json檔
            // const data = await axios.get('./json/F-C0032-001.json');
            //取得src中的json檔
            const data = await axios.get('./src/json/F-C0032-001.json');
            //檢查是否連上json
            console.log(data.data.cwaopendata.dataset);
        })();

    }, []);

    return (
        <>
            {/*36小時天氣預報的版型*/}
            <h2>36小時天氣預報版型</h2>
            <div className='cards'>
                {/*取得縣市陣列跑迴圈*/}
                <div className='card'>
                    {/*卡片標題*/}
                    <div className='card-header'>
                        台北市
                    </div>
                    {/*卡片內容*/}
                    <div className='card-body'>
                        {/*取得陣列資料跑迴圈*/}
                        <div className='item'>
                            {/*日期*/}
                            <div className='date'>
                                11日
                            </div>
                            <div className='time'>
                                上午6:00 <br />
                                ~<br />
                                下午6:00 <br />
                            </div>
                            <div className='weatherPic'>
                                <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" />
                            </div>
                            <div className='weatherName'>
                                晴午後短暫雷陣雨
                            </div>
                            <div className='pop'>
                                <FaUmbrella />
                                80%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App