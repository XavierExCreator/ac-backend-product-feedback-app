import feedbackStyles from '../Pages/AddFeedbackApp.module.css'; //importing a css module for AddFeedbackApp buttons 
import homeStyles from '../Pages/Home.module.css'; //importing a css module for AddFeedbackApp buttons 

export default function Button({onClick, buttonName, variant}) {


    return(
        <>

        {/*
             -Depending on the variant name, it'll style it accordingly to which module.css it belongs to
             -If the variants name doesnt match any of the declared variant names, than it'll default to a style I've chosen for it to do.
         */}
        <button className={variant === 'cancelButton'
        ? feedbackStyles.cancelButton
        : variant === 'backButton'
        ? feedbackStyles.backButton
        : variant === 'feedbackButton'
        ? feedbackStyles.feedbackButton
        : homeStyles.home} onClick={onClick}>{buttonName}</button>
        </>
    )
}