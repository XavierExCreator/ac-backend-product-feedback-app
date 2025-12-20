

export default function FeedbackCard({variant, feedback_title, category, feedback_detail}) {

    

    return(
        <>
        <div className={variant}>
        <h2 style={{fontWeight:'bold', color:'#3a4374', paddingLeft:'0rem'}}>{feedback_title}</h2>
        <p style={{ marginTop:'-1rem'}}>{feedback_detail}</p>
        <p style={{backgroundColor: '#f2f4ff', color:'#4661e6', display:'inline-block', fontWeight:'bold', padding:' .5rem', borderRadius:'10px', marginTop:'-1rem'}}>{category}</p>
        </div>
        </>
    )
}