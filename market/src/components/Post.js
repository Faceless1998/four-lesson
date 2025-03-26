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

    setPosts([...Post, newPost]);
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

  return (
    <>
      <div>
        <form onSubmit={ handleSubmitCreate }>
          <input type="text" placeholder="Title" value={title} onChange={ (e) => setTitle(e.target.value) }/>

          <textarea placeholder="Content" value={content} onChange={ (e) => setContent(e.target.value) }></textarea>

          <input type="file" />

          <button type="submit">Create</button>
        </form>

        <div>
            {
                posts.map( (post) => (
                    <>
                        <div> { post.title } </div>
                        <div> { post.content } </div>
                    </>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default Post;
