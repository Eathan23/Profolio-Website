
export default function BackButton() {
    
    function homePage() {
        window.location.href="/"
        }
    
    return(
        <button type="button" onClick={homePage} className="back-button">
          Go back home
        </button>
    )
}