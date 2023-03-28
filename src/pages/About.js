import BackButton from "../components/BackButton";
import Header from "../components/Header";

export default function About() {
    return(
    <div>
     <Header/>
     <div className="page-container ">
      
      <h1 className="page-heading">
      Get To Know me A Little
      </h1>
      <p className="page-text">
       Im an aspiring web-developer who's 24 years old. Born and raised in the United States of America. 
       I live in Lenoir City Tennessee. I really appriciate the community oriented nature of small towns. 
       I've been teaching myself HTML CSS, and JavaScript for the past 2 years. I got into web-development because
       1. I noticed there was a lack of freedom oriented people in the tech space. I want to be apart of the 
       movment that changes that, and 2. Because im really passionate about building websites. I  really want help good people
       build Usefull, practical, intuitive, and good looking websites that help them grow their bussiness to the next level.
       Or to solve a problem that they have. Or even to help them launch an entirely new bussiness with a reliable, dependable, website. 
      </p>
      <BackButton/>
    </div>
    </div>);
    
}