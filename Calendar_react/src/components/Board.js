import React, { useState } from 'react';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const handleAddPost = () => {
    if (title.trim() && content.trim()) {
      setPosts([...posts, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  const handlePostClick = (post) => {
    if (selectedPost === post) {
      // 이미 선택된 게시글을 클릭하면 숨김
      setSelectedPost(null);
    } else {
      // 다른 게시글을 클릭하면 해당 게시글 표시
      setSelectedPost(post);
    }
  };

  return (
    <div className="board-container">
      <h2>게시판</h2>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleAddPost}>게시글 추가</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index} onClick={() => handlePostClick(post)}>
            {post.title}
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div className="post-content">
          <button className="close-btn" onClick={() => setSelectedPost(null)}>닫기</button>
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
};

export default Board;


