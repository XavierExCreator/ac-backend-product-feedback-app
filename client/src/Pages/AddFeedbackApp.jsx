import { Link } from 'react-router-dom'; //importing install dom
// import styles from './AddFeedbackApp.module.css'; //importing a css module for CountryCard 


export default function AddFeedbackApp() {

    //Function that does a fetch to post when a new suggestion is added

    //

    return(
        <>
        <div>
        <Link to={`/`} style={{display: 'inline-block', gap: '1rem'} }>Add Feedback</Link>
        </div>
        </>
    )
}