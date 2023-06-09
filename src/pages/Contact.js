import Header from "../components/Header";
import BackButton from "../components/BackButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
    return(
    <div>
     <Header/>
     <div className="page-container">
        
        <h1 className="page-heading">
         Lets Make Something Happen
        </h1>

        <p className="page-text">
         If you want a website made for you, exactly how you want it, whether It's for your small business, 
         your brand, or just a personal site just for you. I'm here to help with that. The best way
         to contact me is my <EmailIcon/>business email: WashingtonWebWorks@protonmial.com. You can also 
         contact me on <LinkedInIcon/>LinkedIn, and <TelegramIcon/>telegram. Links to all of those are at the top
        </p>
    <BackButton/>
     </div>
    </div>)
    
}