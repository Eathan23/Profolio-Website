import Header from "../components/Header";
import BackButton from "../components/BackButton";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Experience() {
    return(
    <div>
     <Header/>
     
     <div className="page-container">
        
        <h1 className="page-heading">
         What I can do for you?
        </h1>

        <p className="page-text">
         A responsive, clean, and an intuitive UI/UX experience is what I strive for the most.
         The technologies I have learned in my 2+ years of experience are HTML, CSS,
         JavaScript, CSS Bootstrap, JQuery, Node.js, Express with Node.js, git and github, SQL,
         MongoDB, Mongoose with MongoDB, and React.js. But Im constantly trying out and experimenting
         With new and different technologies. While im mostly experienced with front-end development,
         I do know how the back end works and could work on back ends as well. I put all of my noteworthy 
         Projects on my personal github page just click the <GitHubIcon/> button at the top to check them out
        </p>
    <BackButton/>
     </div>
     
    </div>);
    
}