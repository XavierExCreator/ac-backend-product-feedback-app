

export default function FeedbackCard({variant, feedback_title, category, feedback_detail}) {

    

    return(
        <>
        <div class={variant}>
        <h2>{feedback_title}</h2>
        <p>{feedback_detail}</p>
        <p>{category}</p>
        </div>
        </>
    )
}