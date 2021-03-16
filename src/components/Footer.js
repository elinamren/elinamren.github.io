import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div class="social-media">
        <a href="/">
          <FontAwesomeIcon icon="github" />
          Github
        </a>
        <a href="/">
          <FontAwesomeIcon icon="linkedin-in" />
          Linkedin
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
