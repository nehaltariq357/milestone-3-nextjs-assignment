"use client"
import React, { useState } from 'react'
const Comment_Section = () => {
    const [input,setInput] =useState<string>("")
    const [allComments,setAllComments]=useState<string[]>([])
    console.log(allComments)
   
    //add method
    const add_Comment=()=>{
        if(input.trim()){
    setAllComments([input,...allComments])
    setInput("")
    }
}

    //delete method 
    const delete_Comment=(index:number)=>{
        const update_comment = allComments.filter((val:string,i:number)=>i !==index)
        setAllComments(update_comment)
    }
    return (
        <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 my-10 w-full md:w-3/4 lg:w-1/2 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-customPurple mb-6 text-center">
            Comment Section
          </h2>
    
          <div className="flex items-center space-x-4 mb-6">
            <input
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customPurple text-gray-700"
              placeholder="Write a comment..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button
              className="bg-customPurple text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
              onClick={add_Comment}
            >
              Add Comment
            </button>
          </div>
    
          <ul className="space-y-4">
            {allComments.map((comment, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
              >
                <span className="text-gray-800">{comment}</span>
                <button
                  className="text-sm text-red-500 hover:text-red-700 font-semibold transition"
                  onClick={() => delete_Comment(i)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Comment_Section