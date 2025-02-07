import './DisplaysavedCats.css' 

const DisplaySavedCats = ({listOfLikedCat})=>{     
        return(
               <div className="displayCatContanier">
                {                 
                     listOfLikedCat.map( data => {
                      
                        if(data != null){
                            return(
                                <div className="item" id={listOfLikedCat.indexOf(data)}>
                                     <img className="savedImage" src={data} alt='MEOW'/>
                                 </div>
                            )
                        }                  
                     })                                 
                }
                </div>
        )
}

export default DisplaySavedCats