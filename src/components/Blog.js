import posts from "./posts";

const Blog = () => {
  return (
    <div className="blog-container">
      <div class="title">
        <h1>Blog</h1>
      </div>

      <section className="post-container">
        {posts.map((post) => {
          return (
            <div className="posts">
              <h3>{post.title}</h3>
              <h5>{post.date}</h5>
              <hr />
              <p>{post.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Blog;
