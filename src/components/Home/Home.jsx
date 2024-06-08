import imageHome from '../../assets/imgHome/imageHome.png'
import './Home.css'

export function Home(){
    return(
        <>
            <div className="container">
                <div className="left">
                    <h1>
                        healthy and fresh <br />
                        grocery
                    </h1>
                    <p>
                        we pride ourselves on providing a curated <br />
                        of the finest, nutrient-rich products that <br />
                        cater to your health conscious lifestyle
                    </p>
                    <button>learn more</button>
                </div>
                <div className="right">
                    <img src={imageHome} alt="imagem produtos" />
                </div>
            </div>
        </>
    )
}