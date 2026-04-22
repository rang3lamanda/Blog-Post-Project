import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>

      <div className="hero-text">
        <h1>Welcome To Space Blog</h1>
        <p>Explore the Universe — Discover news, space missions, and cosmic stories</p>
      </div>

      <div className="hero"></div>

      <div className="cta-buttons">
        <Link to="/login" className="cta-btn primary">Login</Link>
        <Link to="/posts" className="cta-btn primary">Blog</Link>
      </div>

      <div className="feature-section">
        <div className="feature-image">
          <img src="/Team.jpg" alt="feature" />
        </div>

        <div className="feature-text">
          <h2>Stay Connected To Space Discoveries</h2>
          <p>
            Explore curated space news, missions, and discoveries. Stay inspired by the
            universe and never miss an update from the cosmos. Join us on this journey
            through space!
          </p>
          <Link to="/posts" className="cta-btn primary">Read More</Link>
        </div>
      </div>

      <div className="section">
        <h2>Latest Space News</h2>
      </div>

      <section className="projects">
        <ProjectCard
          image="/artemisII.jpg"
          title="Artemis II Crew Visits Their Ride Around the Moon"
          description="It has been over 50 years since humans last walked on the Moon (Apollo 17 in December 1972)."
        />

        <ProjectCard
          image="/ocean.jpg"
          title="Artemis II Back Home"
          description="Artemis II crew talk about their Moon mission."
        />

        <ProjectCard
          image="/Spaceship.jpg"
          title="NASA gears up before launching Artemis II to the Moon"
          description="NASA gears up for one more key test before launching Artemis II to the Moon."
        />

        <ProjectCard
          image="/Moon.jpg"
          title="What the Artemis II astronauts saw from space"
          description="New imaging techniques reveal more details."
        />
      </section> 


      <div className="about-section">
        <div className="about-image">
         <img src="/Before.jpg" alt="About us" />
        </div>

        <div className="about-text">
         <h2>About Space Blog</h2>
        <p>
      Welcome to Space Blog, your go-to destination for the latest discoveries,
      missions, and insights about the universe. We are passionate about making
      space exploration accessible and exciting for everyone.
     </p>
     <p>
      From NASA missions to deep space discoveries, we bring you closer to the
      cosmos.
         </p>
  </div>
</div>





    </div>
  );
};

export default HomePage;
