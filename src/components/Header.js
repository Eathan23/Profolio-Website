import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';



export default function Header() {

  function githubLink() {
    window.location.href="https://github.com/Eathan23/MyProjects"
    }
  
  function linkedinLink() {
    window.location.href="https://www.linkedin.com/in/eathan-washington-189383213/"
  }  

  function emailLink() {
    window.location.href="mailto:WashingtonWebWorks@protonmial.com"
  }
  
  function telegramLink() {
    window.location.href="https://t.me/VoidTravler"
  }

  return(
 <header>
   <h1 className="heading">Hello im Eathan Washington <br></br> and I build websites 
   <hr className="horizontal-line"></hr>
   </h1>
   <ul className="link-container">
    
     <li className="link-item" onClick={linkedinLink}>
        <LinkedInIcon color='secondary' fontSize='large' /> 
     </li>
     
      <li className="link-item" onClick={githubLink}> 
         <GitHubIcon color='secondary' fontSize='large'/> 
      </li> 
         
      <li className="link-item" onClick={emailLink}> 
         <EmailIcon color='secondary' fontSize='large'/> 
      </li>
      
      <li className="link-item" onClick={telegramLink}> 
         <TelegramIcon color='secondary' fontSize='large'/> 
      </li>
      
   </ul>
   
  </header>
); 
}

