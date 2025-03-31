import React, { useState } from "react";
import "./post.css";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [editPostId, setEditPostId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState(null);

  const addPost = (title, content, image) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      image,
    };

    setPosts([...posts, newPost]);
  };

  const editPost = (id, uploadedTitle, uploadedContent, uploadedImage) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            title: uploadedTitle,
            content: uploadedContent,
            image: uploadedImage,
          }
        : post
    );

    setPosts(updatedPosts);
    setEditPostId(null);
  };

  const deletePost = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  const handleSubmitCreate = (e) => {
    e.preventDefault();

    if (title && content) {
      addPost(title, content, image);
      setTitle("");
      setContent("");
      setImage(null);
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    if (newTitle && newContent) {
      editPost(editPostId, newTitle, newContent, newImage);
      setNewTitle("");
      setNewContent("");
      setNewImage(null);
    }
  };

  const handleImageChanger = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewImageChanger = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="main-header">My Blog</h1>
        <div className="form-section">
          <h2>Create New Blog</h2>
          <form onSubmit={handleSubmitCreate} className="form">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
            />

            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="input-field"
            ></textarea>

            <input
              type="file"
              className="input-field"
              onChange={handleImageChanger}
            />

            {image && <img src={image} alt="preview" />}

            <button type="submit" className="submit-btn">
              Create
            </button>
          </form>
        </div>


        


        <div className="post-list">
          <h2>Blog Posts</h2>
          {posts.length === 0 ? (
            <p className="no-post-message">No Post Available.</p>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>

                {post.image && <img src={post.image} alt={post.title} />}

                <p>{post.content}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div>
        <div>{}</div>
      </div>
    </>
  );
};

export default Post;
