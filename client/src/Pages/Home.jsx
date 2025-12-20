import Button from '../Components/Button.jsx';
import FeedbackCard from '../Components/FeedbackCard.jsx';
// import styles from './AddFeedbackApp.module.css'; //importing a css module for CountryCard 
import {useState} from 'react'; //Importing useState and useEffect from react to use its' feature 
import { Link  } from 'react-router-dom';
import lightbulb from "../assets/suggestions/icon-suggestions.svg"
import detective from "../assets/suggestions/illustration-empty.svg"
import home from "./Home.module.css";

export default function Home() {

  //This useState holds the suggested data the api has to show the users
    const [suggestionData, setSuggestionData] = useState ([]);

    //Holds the counts of the user
    const [count, setCount] = useState(0)

/*
    //Function that fetches all suggestions
*/

    const getAllsuggestions = async () => {
        try {const response = await fetch (`/api/get-all-suggestions`, {
        
          method: 'GET', 
          
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const data = await response.json();
        setSuggestionData(data);
        getTotalCategoriesCount();
       } catch (err) {
        console.error("Error showing saved countries to user", err);
      }
}

const getTotalCategoriesCount = async () => {
  try {const response = await fetch (`/api/count-all-categories`, {
    
    method: 'GET', 
    
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await response.json();
  setCount(data.all_categories_counted);
 } catch (err) {
  console.error(`Error showing the counted categories total to user`, err);
}};

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
const getSpecificCategory = async (categoryName) => {
    try {const response = await fetch (`/api/get-suggestions-by-category/${categoryName}`, {
        
        method: 'GET', 
        
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json();
      setSuggestionData(data);
      getCategoryCount(categoryName);
     } catch (err) {
      console.error(`Error showing the ${categoryName} category to user`, err);
    }}

    const getCategoryCount = async (categoryName) => {
      try {const response = await fetch (`/api/count/${categoryName}/catgeory`, {
        
        method: 'GET', 
        
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json();
      setCount(data.category_count);
      console.log(setCount);
     } catch (err) {
      console.error(`Error showing the counted categories total to user`, err);
    }};

    return(
        <>
        <div className={home.mainBody}>
          <div className={home.boardAndButtons}>
            <div className={home.companyBoard}>
             <h1>My Company</h1>
             <h2>Feedback Board</h2>
            </div>

            <div className={home.buttonHolder}>
         <Button className={home.getAllsuggestionsButton} onClick={getAllsuggestions} buttonName='All'/>
         <Button className={home.filterCategoryButton} onClick={() => getSpecificCategory('UI')} buttonName='UI'/>
         <Button className={home.filterCategoryButton} onClick={() => getSpecificCategory('UX')} buttonName='UX'/>
         <Button className={home.filterCategoryButton} onClick={() => getSpecificCategory('Enhancement')} buttonName='Enhancement'/>
         <Button className={home.filterCategoryButton} onClick={() => getSpecificCategory('Bug')} buttonName='Bug'/>
         <Button className={home.filterCategoryButton} onClick={() => getSpecificCategory('Feature')} buttonName='Feature'/>
         </div>
         </div>

         <div className={home.suggestionAndFeedback}>
            <div className={home.feedbackSuggestionsBar}>
                <div className={home.lightbulb}>
                  <img src={lightbulb} alt="Image of an illustrated lightbulb in the color white that has an electric current in it and outside of it too." />
                <p className={home.suggestions}> {count} Suggestions</p>
                </div>
            <Link to="/add-feedback-page"><h3>+ Add Feedack</h3></Link>
      </div>

        <div className={home.cardHolder} style={{ backgroundColor: suggestionData.length > 0 ?'':'#ffffff'}}>

          { suggestionData.length > 0 ?
            (suggestionData.map((suggestion) => (<FeedbackCard key={suggestion.id} variant={home.cards} feedback_title={suggestion.feedback_title} feedback_detail={suggestion.feedback_detail} category={suggestion.category}/>))) 
            : 
            (<div><img src={detective} alt="An illustrated image of a cartoonie character that has a magnifying glass on it's left hand, looking through it's left eye. It has a hat and a nose, no mouth. It's wearing a trench coat." />
              <h2 className={home.detective}>There is no feed yet.</h2>
              <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing abut new ideas to improve our app.</p>
              <Link to="/add-feedback-page"><h3>+ Add Feedack</h3></Link></div>) 
          }

        </div>
        </div>
        </div>
        </>
    )
  }