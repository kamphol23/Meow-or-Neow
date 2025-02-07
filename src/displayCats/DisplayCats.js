import "./DisplayCats.css";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
const DisplayCats = ({currentImage, handleClick, handleNextImage, imgCount}) =>{


    return(
        <div className="container" >
            <div className="display">      
                <h1>Meow or Neow</h1>       
                <div>
                    <div>
                        <img src={currentImage[imgCount].url} alt="MEOW"/>

                        <div className="buttonContanier" >
                             <button className="neow" onClick={() => handleNextImage()}><FaHeartBroken /></button>
                             <button className="meow" onClick={() => handleClick()}> <FaHeart /></button>
                         </div>
                    </div>                 
                </div>                
            </div>
        </div>
    );
}

export default DisplayCats;