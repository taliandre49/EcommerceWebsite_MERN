import React from 'react';
import '../NewsLetter/NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className="news-letter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated!</p>
        <div>
            <input type= "email" placeholder='Your Email Address'/>  
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default NewsLetter;  