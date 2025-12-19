import Button from '../Components/Button.jsx';
import FeedbackCard from '../Components/FeedbackCard.jsx';
import { Link } from 'react-router-dom'; //importing install dom
// import styles from './AddFeedbackApp.module.css'; //importing a css module for CountryCard 
import {useState} from 'react'; //Importing useState and useEffect from react to use its' feature 
import { useParams } from 'react-router-dom';
import lightbulb from "../assets/suggestions/icon-suggestions.svg"
import detective from "../assets/suggestions/illustration-empty.svg"

export default function Home() {

    const [suggestionData, setSuggestionData] = useState ('');
    const [count, setCount] = useState(0)
    const [category, setCategory] = useState ('');

    const CategoryUserClicked = useParams().CategoryUserClicked;
/*
    //Function that fetches all suggestions
*/

    const getAllCategories = async () => {
        try {const response = await fetch (`/api/get-all-suggestions`, {
        
          method: 'GET', 
          
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json();
        setSuggestionData(data);
       } catch (err) {
        console.error("Error showing saved countries to user", err);
      }
}

/*
    This function:
    - tries
     - to wait until the fetch for the api is called for category
     - using a dynamic link
     - uses get as a method in order to call the api
     - has the content type be json
     - declares data as a variable and awaits the response for the data than holds json in it
     -passes the data through the useState 'setSuggestionData
*/
const getCategory = async () => {
    try {const response = await fetch (`/api/get-suggestions-by-category/${CategoryUserClicked}`, {
        
        method: 'GET', 
        
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json();
      setCategory(data);
     } catch (err) {
      console.error(`Error showing the ${CategoryUserClicked} to user`, err);
    }

}
    return(
        <>
        <div>

            <div className='company-Board'>
             <h1>My Company</h1>
             <h2>Feedback Board</h2>
            </div>

            <div className='feedback-Suggestions-Bar'>
                <div className=''><img src={lightbulb} alt="Image of an illustrated lightbulb in the color white that has an electric current in it and outside of it too." />
                <p> {'count'} Suggestions</p></div>
            <Link to="/add-feedback-page"><h3>+ Add Feedack</h3></Link>
      </div>

      <div className='button-holder'>
         <Button variant='getAllCategoriesButton' onClick={getAllCategories} buttonName='All'/>
         <Button variant='filterCategoryButton' onClick={getCategory} buttonName='UI'/>
         <Button variant='filterCategoryButton' onClick={getCategory} buttonName='UX'/>
         <Button variant='filterCategoryButton' onClick={getCategory} buttonName='Enhancement'/>
         <Button variant='filterCategoryButton' onClick={getCategory} buttonName='Bug'/>
         <Button variant='filterCategoryButton' onClick={getCategory} buttonName='Feature'/>
         </div>

        <div className='card-holder'>

          
          <FeedbackCard variant='original tablet desktop' feedback_title='' feedback_detail='' category=''/>
             <img src={detective} alt="An illustrated image of a cartoonie character that has a magnifying glass on it's left hand, looking through it's left eye. It has a hat and a nose, no mouth. It's wearing a trench coat." />
             <h2>There is no feed yet.</h2>
             <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing abut new ideas to improve our app.</p>
             <Link to="/add-feedback-page"><h3>+ Add Feedack</h3></Link>

             
               {/*
             This section will have an if statement where it says 
             "If the button has a category that matches it's title in the endpoint, than it'll show up, if not- 
            
             than it'll say 'There is no feedback yet. Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.'
            
             It'll than have the AddFeedback button that leads to the link where you can add feedback! "
             */}
        </div>

        </div>
        </>
    )
}