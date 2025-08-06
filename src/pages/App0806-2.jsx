
import Card from '../components/Card';
import '../css/App0806-1.css'

const arrPhotos = [
    {
        id:1,
        imgURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '別人的房間',
        desc: "都很酷",
        btnN: '住你房間',
        btnURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id:2,
        imgURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '宜家家居',
        desc: '宜家家居新店店店長長痘痘',
        btnN: '看痘痘',
        btnURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id:3,
        imgURL: 'https://images.unsplash.com/photo-1753748689944-9147de3608e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
        title: '高速公路旁',
        desc: '住那裡很吵',
        btnN: '我要搬家',
        btnURL: 'https://images.unsplash.com/photo-1753748689944-9147de3608e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
    },

]


const App = () => {
    //資料抽離
    //物件資料
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '別人的房間',
            desc: "都很酷",
            btnN: '住你房間',
            btnURL: 'https://images.unsplash.com/photo-1752407828488-1c6fafa47c50?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2: {
            imgURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '宜家家居',
            desc: '宜家家居新店店店長長痘痘',
            btnN: '看痘痘',
            btnURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1753748689944-9147de3608e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
            title: '高速公路旁',
            desc: '住那裡很吵',
            btnN: '我要搬家',
            btnURL: 'https://images.unsplash.com/photo-1753748689944-9147de3608e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
        }
    }


    return (
        <>
            <div className='container'>
                <Card
                    imgURL={photos.photo1.imgURL}
                    title={photos.photo1.title}
                    desc={photos.photo1.desc}
                    btnN={photos.photo1.btnN}
                    btnURL={photos.photo1.btnURL}
                ></Card>

                <Card
                    imgURL={photos.photo2.imgURL}
                    title={photos.photo2.title}
                    desc={photos.photo2.desc}
                    btnN={photos.photo2.btnN}
                    btnURL={photos.photo2.btnURL}
                ></Card>

                <Card
                    imgURL={photos.photo3.imgURL}
                    title={photos.photo3.title}
                    desc={photos.photo3.desc}
                    btnN={photos.photo3.btnN}
                    btnURL={photos.photo3.btnURL}
                ></Card>

            </div>
        </>

    )
}

export default App;