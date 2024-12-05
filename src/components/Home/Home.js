import videoHomePage from '../../assets/video-homepage.webm'
import './Home.scss'

const Home =(props)=>{
    return(
        <>
            <div className="home-container">
                <div className='background-video'>

                    <video width="584" autoPlay muted loop>
                    <source src={videoHomePage} type="video/webm" />
                            Your browser does not support the video tag.
                    </video>

                </div>
                <div className='home-content'> 
                    <h1>Nếu chúng ta muốn thì nó sẽ có đường.</h1>
                    <p>Bạn chỉ cần tiến lên!</p>
                    <button>Get-stated</button>

                </div>

            </div>
        </>
    )
}
export default Home