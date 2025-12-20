import { Link } from 'react-router-dom'; //importing install dom
// import styles from './AddFeedbackApp.module.css'; //importing a css module for CountryCard 
import {useState} from 'react'; //Importing useState and useEffect from react to use its' feature 
import feedbackIcon from "../assets/icons/icon-new-feedback.svg";
import backArrow from "../assets/icons/icon-arrow-left.svg"
import Button from '../Components/Button'
import styles from './AddFeedbackApp.module.css';

export default function AddFeedbackApp() {

     /*
   This variable will be used to have an organized look in the useState
  */
  const emptyFormState =  {feedback_title: "", category: "", feedback_detail: ""}
  /*
   This useState starts as empty strings 
   formData will hold information the setFormData passes it
  */
    const [formData, setFormData] = useState (emptyFormState);

     /*
       showSavedCountries is an async arrow function that:
       -tries to get a fetch call from the REST api using GET
        it will:
         -Delcare a variable called data and await a reponse
         -pass the data through setUserSavedCountry
       -Catch if there's an error and log that an error has occurred
     */

    /*
     -'handleChange' targets the name of the inputs in the form below
     -It targets name and value in order to update the information on the form
     -setFormData looks at the previous responses written by the user before submitting the form and changes it to the current value
    */
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

      async function storeUsersSuggestion() { 
          //  When it’s a POST request we need to pass a second parameter: an Object
        await fetch ('/api/add-one-suggestion', {
          /*
           We need to say we're sending a POST request because by default it's always a GET request
          */
          method: 'POST', 
          /*
           -The headers is where we put metadata about our request, including the data type that we pass in the body
           -In this case, we're saying we're passing in JSON data in the body
          */
          headers: {
            'Content-Type': 'application/json',
          },
          /*
           -This data needs to be stringified into a string in order for it to be stored
           -We're stringifying the form version of this data.
           -We're stringifying the feedback_title, category and feedback_detail
           -Some of my names/id's don't match the API's names for some objects which will cause errors, what this does is that it makes the stringified form understand how the code is 
          */
          body: JSON.stringify({
            feedback_title: formData.feedback_title,
            category: formData.category,
            feedback_detail: formData.feedback_detail,
          })
        })
        console.log(formData);
      }

    return(
        <>
        <div className={styles.div}>
            <div style={{alignItems:'left'}}> <img src={backArrow} alt="Image of a purplish circle with a white plus symbol in the middle" className={styles.backArrow} /> <Link to={`/`} style={{display: 'inline-block', gap: '1rem', color:"#647196", fontSize:".85rem", fontWeight:"bold"}}> Go Back</Link></div>

        <img src={feedbackIcon} alt="Image of a purplish circle with a white plus symbol in the middle" className={styles.feedbackIcon} width="60px" height="60px"/>

        <div className={styles.form}>
        <legend>
        <h2 style={{color:'#3a4374', fontWeight:'bold', padding:'0rem'}}>Create New Feedback</h2>
    <form className={styles.feedback_Form} onSubmit={storeUsersSuggestion}>
        <label htmlFor='feedback_title'><span style={{fontWeight:"bold", color:"#3a4374"}}>Feedback Title</span><br/>
        <span>Add a short, descriptive headline</span>
        <br/>
        <input id='feedback_title' name='feedback_title' type='text' value={formData.feedback_title} onChange={handleChange}/></label><br/>



        <label htmlFor='category'>
        <span style={{fontWeight:"bold", color:"#3a4374"}}>Category</span><br/>
        <span>Choose a category for your feedback</span>
        <br/>
        <select id='category' name='category' onChange={handleChange}>
        <option value=''></option>
        <option value={formData.category.all}>All</option>
        <option value={formData.category.ui}>UI</option>
        <option value={formData.category.ux}>UX</option>
        <option value={formData.category.enhancement}>Enhancement</option>
        <option value={formData.category.bug}>Bug</option>
        <option value={formData.category.feature}>Features</option>
        </select>
        </label>
        <br/>




        <label htmlFor='feedback_detail'>
        <span style={{fontWeight:"bold", color:"#3a4374"}}>Feedback Detail</span><br/>
        <span>Include any specific comments on what should be improved, added, etc.</span>
        <br/>
        <textarea style={{paddingBottom: '5rem'}} value={formData.feedback_detail} onChange={handleChange} name='feedback_detail'></textarea></label><br/>

        <div className={styles.button}>
        <Button buttonName={<Link to={`/`} style={{display: 'inline-block', gap: '1rem'} }>Cancel</Link>} variant={styles.cancelButton}/>

        <button type='submit' className={styles.submitButton} style={{backgroundColor:'#ad1fea'}}>Submit Feedback</button>
        </div>
    </form>
    </legend>
        </div>
        </div>
        </>
    )
}