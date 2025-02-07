import DisplayCats from './displayCats/DisplayCats';
import DisplaySavedCats from './displaySavedCats/DisplaySavedCats';
import './App.css';
import { useState,useEffect } from 'react';



console.log(process.env);

function App() {
  const api_key = process.env.API_KEY;

  const [currentImage, setCurrentImage] = useState(null);
  const [listOfLikedCat, setListOfLikedCat] = useState([null]);
  const [imgCount, setImgCount] = useState(0);


 
  const handleNextImage = () => {
    if(imgCount === 9 ){
      fetchData()
      setImgCount(0);      
    }else{
      setImgCount(imgCount + 1)
    }
    
  }

  const handleClick = () => {
    listOfLikedCat.push(currentImage[imgCount].url) 

    handleNextImage()
    
  }

  const fetchData = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10`,{headers: {
      'x-api-key': api_key
    }})
      .then((response) => {
         return response.json();
       })
        .then((data) => {    
             setCurrentImage(data)            
        })
         .catch(function(error) {
   console.log(error);
         });            
 
  }

  useEffect(()=> {
    fetchData()
    
  },[]);
 

  return (
    <div className="app">

     {currentImage && <DisplayCats currentImage={currentImage} handleClick={() => handleClick()}
      handleNextImage={() => handleNextImage()} imgCount={imgCount}/>}
      <DisplaySavedCats listOfLikedCat={listOfLikedCat}/>
    </div>
  );
}

export default App;
