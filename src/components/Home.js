import elin from "../images/elin.png";

const Home = () => {
  return (
    <div class="hello">
      <div class="hello-img">
        <img src={elin} alt="a portrait of elin in black and white" />
      </div>
      <div class="hello-text">
        <h1>Hi, I’m Elin!</h1>
        <h2>
          I am a creative Frontend Developer
          <br />
          currently studying at Hyper Island.
        </h2>
      </div>
    </div>
  );
};

export default Home;
