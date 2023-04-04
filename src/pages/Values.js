import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function Values() {
    return(
    <div>
     <Header/>
     <div className="values-container">
        
        <h1 className="page-heading">
         My core values as a Web Developer and as a person
        </h1>
        
        <h2>
         1. Learn new things, everyday.
        </h2>

        <p className="page-text">
         Whether or not it's web related, I strive to be a little bit smarter at the end of each day.
         I find it important to keep an eye on the state of the world, economic and political. A lot 
         of people don't find this stuff very interesting or important. They live ignorant to the state 
         of the politics, culture, and economics that surrounds them...that is until it ends up affecting
         their own lives. I'm also keen on learning about the latest developments in web technology. The rate 
         at which this industry moves makes it one of my top priorities. 
        </p>
        
        <h2>
         2. Work smarter, not harder
        </h2>
        
        <p className="page-text">
          I'm thankful to have learned this lesson from a couple of different father figures I look up to.
          It doesn't make sense to work harder than needed when there is an easier, faster, more efficient
          way of doing things. That's NOT to say that hard work isn't important because it 100% is. It's necessary
          to give every project you embark on maximum effort. It may take some time to learn the most effective way 
          of completing a task, but in most cases, it's beneficial to know the best way of doing something.
        </p>
        
        <h2>
         3. Get comfortable being uncomfortable
        </h2>

        <p className="page-text">
          Learning isn't alwasys going to be exciting, or fun. Web development and programing in general
          is really challenging and offten times it can make you feel stupid. You're motivation isn't alwasys
          going to get you through your study session, or your work day. I've learned that you can't rely on your
          motivation to get you through a difficult task. You need consistency and dedication. You need to 
          ultimately like what you're doing and to have the reason why you're doing what you're doing in mind.
        </p>
        
        <h2>
         4. Be ok with failure as long as you grow from it.
        </h2>

        <p className="page-text">
         We will all fail at some point in our lives. It's part of the learning experience. Getting angry or bitter
         about it will only make it harder for you to see where you went wrong and improve the next time. I feel like 
         every failure is an opportunity to grow and learn as a person.   
        </p>
        
        <h2>
         5. Take accountability   
        </h2>

        <p className="page-text">
         It's really important to take accountability for your actions, despite the consequences. When you're accountable, 
         you tend to stay on task and focused. Transparency is also very important, being open and honest with others is one of the
         best ways to gain trust, and be accountable. When you're making websites for people, trust is a key factor
        </p>

    <BackButton/>
     </div>
    </div>);
    
}