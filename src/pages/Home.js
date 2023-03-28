import Header from "../components/Header"


export default function Home() {
    return(
    <div>
     <Header/>
     <ul class="nav-list">
        <li class="nav-item"><a class="nav-link" href="/about">About Me</a></li>

        <li class="nav-item"><a class="nav-link" href="/contact">Get In Touch</a></li>

        <li class="nav-item"><a class="nav-link" href="/experience">My Experience</a></li>

        <li class="nav-item"><a class="nav-link" href="/values">Values</a></li>
      </ul>
    </div>)
    
}