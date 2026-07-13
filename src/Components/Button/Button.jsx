import React from "react";

const Button = ({ content }) => {

    return (

        <button className="bg-gradient-to-b from-orange-400 to-orange-500 
        text-white px-5 py-3 mt-3 rounded-full hover:scale-105 text-lg hover:to-orange-600 transition-all duration-300ms
        cursor-pointer">
            {content}</button>

    )
}



export default Button;