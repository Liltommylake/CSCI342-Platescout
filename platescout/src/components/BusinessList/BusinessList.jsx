import React from "react"
import "./BusinessList.css"
import Business from "../Business/Business"

function BusinessList({ businesses }) {
    return (
        <div className='BusinessList'>
            {/* Use .map() to display the given array of businesses*/}
            {businesses.map ((business, index) => (
                <Business business={business} key={index}/>
            ))}
        </div>
    );
}

export default BusinessList
