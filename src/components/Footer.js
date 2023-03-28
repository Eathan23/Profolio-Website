
export default function Footer() {
  const year = new Date().getFullYear(); 
  
  return(
    <footer className="footer">
        Eathan Washington ⓒ {year}
    </footer>
  )

};