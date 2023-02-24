import axios from "axios"
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList"; 
import {useState, useEffect } from "react";

const Home = () => {
const [tutorials, setTutorials] = useState([])


  const getTutor =async()=>{
    try {
       const url ="https://tutorial-api.fullstack.clarusway.com/tutorials/"
    const {data} =  await axios(url)
    console.log(data)  
   setTutorials(data)
    } catch (error) {
      console.log(error)
    }
   
  }

useEffect(() => {
  
getTutor()
  
}, [])


  return (
    <>
      <AddTutorial gettutor={getTutor} />
      <TutorialList tutor={tutorials} gettutor={getTutor}/>
    </>
  );
};

export default Home;
