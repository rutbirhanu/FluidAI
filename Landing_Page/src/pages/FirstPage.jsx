import ScrollDownBtn from "../components/ScrollDownBtn"
import "./pages.css"

function FirstPage() {

  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    setScrolling(true);
  };

  useEffect(() => {
    if (scrolling) {
      const timer = setTimeout(() => {
        setScrolling(false);
      }, 1000); // Adjust the timing for how long the second page is visible

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [scrolling]);


  return (
     <div className={`first-page-container ${scrolling ? 'fade-out' : ''}`}>
      <nav>
        <div className="left-side-nav">
          <p>What we believe</p>
          <p>Our features</p>
        </div>
        <div className="right-side-nav">
          <p>Our story</p>
          <p>The waitlist</p>
        </div>
      </nav>
      <div className="logo">
        <img src="/logo.svg" alt="logo"/>
      </div>
      <ScrollDownBtn/>
    </div>
  )
}

export default FirstPage