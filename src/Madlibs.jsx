import {useState} from 'react';
import Story from "./Story";
import MadlibsForm from "./MadlibsForm";
//Madlibs
//A main component that stores the words as an object from user input
const Madlibs = () => {
    //Stores an object that contains different types of words
    const [words, setWords] = useState(null);
    //Function that will be passed through Forms to get input from User
    const getInfo = (info) => {
        setWords(info)
    }
    
    //If we dont have any words yet, then it should be null. Display text
    //stating that the user must input information 
    return (
      <>
      <h1>Madlibs!</h1>
        <MadlibsForm getInfo={getInfo}/>

        {words ? <Story wordsObj={words} /> : <p>Insert information!</p>}
      </>
    )
}
  
export default Madlibs;
  