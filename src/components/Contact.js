const Contact = () => {
  return (
    <div className="contact-container">
      <div className="title">
        <h1>Say hi!</h1>
      </div>
      <div className="contact-text">
        <p>
          Dont be a stranger, want to talk about code or just chit chat over an
          online coffee about bikes or skiing? Hit me up, say hello!
        </p>
      </div>
      <div className="contact-form">
        <form action="https://formspree.io/xvowelwv" method="POST">
          <label htmlFor="name">Name</label>
          <input type="name" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="replyto" />
          <label htmlFor="message">Write something..</label>
          <textarea id="message" name="message" rows="5"></textarea>
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
