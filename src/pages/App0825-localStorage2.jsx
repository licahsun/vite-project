import React from 'react'

const App = () => {
    const arrCitys = [
        {
            cityId: 1,
            cityName: '台北市',
        },
        {
            cityId: 2,
            cityName: '桃園市',
        }
    ]
    return (
        <div>
            <h1>Local storage-陣列物件資料存取</h1>
            <button onClick={() => {
                console.log('before:');
                console.log(arrCitys);
                //陣列物件轉字串
                let strCity = JSON.stringify(arrCitys);
                console.log('after');
                console.log('after' + strCity);

                //寫入local storage
                window.localStorage.setItem('citys', strCity)
                console.log(typeof strCity)
            }}>寫入</button>

            <button onClick={() => {
                //取出local storage 資料
                let getData = window.localStorage.getItem('citys');
                //字串轉陣列物件
                let getArrData = JSON.parse(getData);
                console.log(getArrData);
                console.log(typeof getArrData)
            }}>讀取</button>
        </div >
    )
}

export default App
