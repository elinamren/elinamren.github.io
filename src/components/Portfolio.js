import cms1 from "../images/CMS1.png";
import cms2 from "../images/CMSadmin.png";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div class="title">
        <h1>My projects</h1>
      </div>
      <div class="project-container">
        <div class="projects">
          <div class="project-content">
            <h3>Content Management System</h3>
            <p>
              This is a CMS for a website where you can add/change/delete
              articles and subpages. The database no longer exist
              <br />
              <br />
              PHP
              <br />
              MySQL
              <br />
              JavaScript
              <br />
              jQuery
              <br />
              HTML/CSS
            </p>
            <a href="/">Visit github repo</a>
          </div>
          <div class="project-img">
            <img class="project-images" src={cms1} alt="cms website" />
            <img class="project-images" src={cms2} alt="cms website admin" />
          </div>
        </div>

        <div class="projects">
          <div class="project-content">Info</div>
          <div class="project-img">Hej här är en bild</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
