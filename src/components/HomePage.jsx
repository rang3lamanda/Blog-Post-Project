import ProjectCard from "./ProjectCard";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Space Blog </h1> 

            <div className="hero"></div>
                <div className="hero-text">
                    <h1>Explore the Universe</h1>
                    <p>Discover news, space missions, and cosmic stories</p>
                </div>

             <img src="/90.jpeg"  alt="90" /> 


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

        
        </div>
    );
};

export default HomePage;