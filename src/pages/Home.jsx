import {useState, useEffect} from "react";
import axios from "axios"
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList"; 

const Home = () => {
  const [tutorials, setTutorials] = useState([])
  const BASE_URL =" https://tutorial-api.fullstack.clarusway.com/tutorials/"

const getTutorials = async()=>{
  try {
    const {data }= await axios(BASE_URL)
 setTutorials(data)
  } catch (error) {
    console.log(error)
  }
 
}
console.log(tutorials)
//?componentdidmount mantığı ile sonsuz veri çekmesin sadece ilk açılışta çeksin
useEffect(() => {
  
getTutorials()
 
}, [])


  return (
    <>
      <AddTutorial  gettutor={getTutorials}/>
      <TutorialList tutor={tutorials} gettutor={getTutorials}/>
    </>
  );
};

export default Home;
