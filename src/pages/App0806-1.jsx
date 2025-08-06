import '../css/App0806-1.css'

const App = () => {
    //資料抽離
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
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnN}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.imgURL} className="btn">{photos.photo2.btnN}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.imgURL} className="btn">{photos.photo3.btnN}</a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default App;