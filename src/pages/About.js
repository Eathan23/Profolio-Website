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
       I'm an aspiring web developer who's 24 years old. Born and raised in the United States of America. 
       I live in Lenoir City Tennessee. I appreciate the community-oriented nature of small towns. 
       I've been in the process teaching myself web development for the past two years. I got into this because
       1. I noticed there was a lack of freedom-oriented people in the tech space. I want to be a part of the 
       movement that changes that, and 2. Because I'm passionate about building websites. I  want to help good people
       build useful, practical, intuitive, and good looking websites that help them grow their business to the next level.
       Or to solve a problem that they have. Or even to help them launch an entirely new business with a reliable, good looking website. 
      </p>
      <BackButton/>
    </div>
    </div>);
    
}