import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import {
  ChatBubbleOutline,
  MoreHorizOutlined,
  RepeatOneOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./css/Post.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactTimeAgo from 'react-time-ago';

 export function LastSeen({ date }) {
  return (
    <div>
      Last seen: <ReactTimeAgo date={date} locale="en-US" timeStyle="round"/>
    </div>
  )
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  return (
    <div className="post">
      
      <div className="post__info">
        <Avatar />
        <h4>User name</h4>
       
        <small><LastSeen date={post?.createAt}/></small>
      </div>
      <div className="post__body">
        <p>This is test question</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="post__btnAnswer"
        >
          Answer
        </button>
        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__question">
            <h1>{post?.questionName}</h1>
            <p>
              asked by <span className="name"> Username </span> on{" "}
              <span className="name">{new Date (post?.createAt).toLocaleString}</span>
            </p>
          </div>
          <div className="modal__answer">
            <ReactQuill placeholder="Enter your answer" />
          </div>
          <div className="modal__button">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button
              type="submit"
              className="add"
              onClick={() => setIsModalOpen(false)}
            >
              Add Question
            </button>
          </div>
        </Modal>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutline />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
       {post?.allAnswers.length }Answer(s)
      </p>
      <div
        style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
            borderTop: "1px solid lightgray",
          }}
          className="post-answer-container"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
              // alignItems:"center",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered"
          >
            <Avatar />
            <div
              style={{
                margin: "10px 0px",
              }}
              className="post-info"
            >
              <p>Username</p>
              <span>Timestamp</span>
            </div>
          </div>
          <div className="post-answer">This is test answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
