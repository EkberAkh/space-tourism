import { Link } from 'react-router-dom';
import './Home.css'


const Home = ()=>{
    return(
        <>
         <section className="landing">
        <div className="container">
          <div className="content">
            <h1>
              So, you want to travel to
              <br />
              <span>Space</span>
            </h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link className='explore-link' to={'/'} >Explore</Link>
        </div>
      </section>
        </>
    )
}

export default Home;