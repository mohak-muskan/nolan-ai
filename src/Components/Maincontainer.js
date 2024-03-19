import { useRef } from "react";
import { BG_IMG } from "../Constants/resources";
import openai from "../Utils/openai";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContent } from "../Utils/ResponseSlice";


const Results = async (searchTextValue,dispatch) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content:"Act as a script writing software. Write a script of youtube short:" + searchTextValue + ".Dont write anything Optional or Note at the end." }],
      model: 'gpt-3.5-turbo',
    });
    
    dispatch(addContent(chatCompletion?.choices[0].message.content)) 
};

const Maincontainer = () => {
  const searchTextRef = useRef(null);
  const dispatch=useDispatch()

  const handleClick = async () => {
    const searchTextValue = searchTextRef.current.value;
    await Results(searchTextValue,dispatch);
  };

  return (
    <>
      <div className="relative">
        <img
          className="absolute inset-0 w-screen h-screen object-cover"
          src={BG_IMG}
          alt="main-bg"
        />
        <div className="flex items-center justify-center h-screen">
          <input
            ref={searchTextRef}
            type="text"
            placeholder="What's in your mind?"
            className="z-10 relative border border-gray-300 p-3 rounded-md shadow-md text-gray-700 bg-white w-96 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out"
          />
          <Link to="output"><button onClick={handleClick} className="z-10 ml-2 inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-blue-200">
            Create now
          </button></Link>
          
        </div>
      </div>
    </>
  );
};

export default Maincontainer;
