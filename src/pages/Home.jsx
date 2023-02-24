import axios from "axios"
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList"; 
import {useState, useEffect } from "react";

const Home = () => {
const [tutorials, setTutorials] = useState([])


  const getTutor =async()=>{
    const url ="https://tutorial-api.fullstack.clarusway.com/tutorials/"
    const {data} =  await axios(url)
    console.log(data)  
   setTutorials(data)
  }

useEffect(() => {
  
getTutor()
  
}, [])


  return (
    <>
      <AddTutorial gettutor={getTutor} />
      <TutorialList tutor={tutorials} />
    </>
  );
};

export default Home;
