const Contact = () => {
  return (
    <div className="contact-container">
      <div class="title">
        <h1>Say hi!</h1>
      </div>
      <div class="contact-text">
        <p>
          Dont be a stranger, want to talk about code or just chit chat over an
          online coffee? Hit me up, say hello!
        </p>
      </div>
      <div class="contact-form">
        <form action="https://formspree.io/xvowelwv" method="POST">
          <input type="name" name="name" placeholder="Name" />
          <input type="email" name="replyto" placeholder="Email" />
          <textarea
            name="message"
            placeholder="Write something.."
            rows="5"
          ></textarea>
          <input type="submit" value="Send" class="submit-btn" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
