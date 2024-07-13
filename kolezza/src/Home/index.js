import './index.css';
import { Link } from 'react-scroll';
import Blog from '../Blog';
import Portfolio from '../Portfolio';

const Home = () => {
  return (
    <div>
      <div className="navBar">
        <div>
          <img src="/images /logokolezza-removebg-preview.png" alt="logo" className="logo" />
        </div>
        <div id="nav">
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="Blog" smooth={true} duration={500}>
            Blogs
          </Link>
          <Link to="Portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
          <Link to="How_things_work" smooth={true} duration={500}>
            Videos
          </Link>
        </div>
      </div>
      <div className="body">
        <div id="Home">
          <h1>
            Hell<span id="o">o</span>
            <br />
            Pe<span id="o">o</span>ple
          </h1>
          <h1></h1>
          <b>__________________________________</b>
          <p>Welcome to Kolezza group's website</p>
          <p>We believe that with Tech much more light was thrown onto the world with problem solving.</p>
          <button className="button">Get Started</button>
        </div>
       
        <img src="/images /brain-lightbulb.avif" className="img" />
      </div>
      <div id="Blog">
          <Blog />
        </div>
        <div id="Portfolio">
          <Portfolio />
        </div>
        <div id="How_things_work">
          {/* Add your video content here */}
        </div>
    </div>
  );
};

export default Home;