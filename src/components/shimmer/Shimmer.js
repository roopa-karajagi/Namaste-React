import './shimmer.css'

const Shimmer = () =>{
    return (
        <div className="shimmer-body">
        <div className="shimmer-header">
            <div></div>
            </div>
        <div className='shimmer-content'>
            {
                Array(12).fill().map((e , i)=>{
                    return (
                        <div className='shimmer-card' key={i}>
                            <div className='shimmer-image'> </div>
                            <div className='shimmer-card-in'> </div>
                            <div className='shimmer-card-out'>
                            </div>
                             </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Shimmer;