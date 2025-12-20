export default function Button({onClick, buttonName, className}) {


    return(
        <>

        {/*
             -Depending on the variant name, it'll style it accordingly to which module.css it belongs to
             -If the variants name doesnt match any of the declared variant names, than it'll default to a style I've chosen for it to do.
         */}
        <button className={className} onClick={onClick}>{buttonName}</button>
        </>
    )
}