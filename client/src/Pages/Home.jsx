import Button from '../Components/Button.jsx';
import FeedbackCard from '../Components/FeedbackCard.jsx';

export default function Home() {

/*
    //Function that fetches all suggestions
*/

function getAllCategories() {

}

/*
    //function that goes to the next page when you click it
*/

/*
    //Function that will fetch the specific category the user wants to see
*/
function getCategory() {
    //needs a fetch
    //a try
    //a catch
    //a method
    //the request body
    //the api link
    //should add async features

}
    return(
        <>
        <div>
            <Button variant='getAllCategoriesButton' onClick={getAllCategories} buttonName='All'/>
            <Button variant='filterCategoryButton' onClick={getCategory} buttonName='UI'/>
            <Button variant='filterCategoryButton' onClick={getCategory} buttonName='UX'/>
            <Button variant='filterCategoryButton' onClick={getCategory} buttonName='Enhancement'/>
            <Button variant='filterCategoryButton' onClick={getCategory} buttonName='Bug'/>
            <Button variant='filterCategoryButton' onClick={getCategory} buttonName='Feature'/>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <FeedbackCard/>
        </div>
        </>
    )
}