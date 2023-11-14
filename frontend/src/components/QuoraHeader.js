import React, { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";

import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { ExpandMore, Search } from "@mui/icons-material";
import { Avatar, Button, Input } from "@mui/material";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./css/QuoraHeader.css";
import axios from "axios";

const QuoraHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl,setInputUrl]=useState("");
  const [question,setQuestion]=useState("");

  const Close = <CloseIcon />;
  const handleSubmit = async ()=>{
    if(question !== ""){
      const config = {
        headers:{
          "content-type":"application/json"
        }
      }
      const body = {
        questionName:question,
        questionUrl:inputUrl
      }
      await axios.post('./api/question',body,config).then((res)=>{
        console.log(res.data)
        alert(res.data.message)
       }).catch((e)=>{
       console.log(e)
       alert("error in adding question")
      })
    }
  }

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo"></div>
        <div className="qHeader__icons ">
          <div className="qHeader__icon mx-3">
            <HomeIcon />
          </div>
          <div className="qHeader__icon mx-3">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon mx-3">
            <AssignmentTurnedInOutlinedIcon />
          </div>

          <div className="qHeader__icon mx-3">
            <PeopleAltOutlinedIcon />
          </div>

          <div className="qHeader__icon mx-3">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" name="" id="" placeholder="Search question" />
        </div>
        <div className="qHeader__Rem">
          <Avatar />
        </div>
        <Button
          style={{
            backgroundColor: "#222",
            color: "white",

            borderRadius: "10px",
            marginLeft: "25px",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Question
        </Button>
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
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" />
            <div className="modal__scope">
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={question}
              onChange={(e)=>setQuestion(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why',etc"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <input
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000",
                }}
                type="text"
                value={inputUrl }
                onChange={(e)=>setInputUrl(e.target.value)}
                placeholder="Optional: include a link that gives context"
              />
              {
                inputUrl !== "" && <img style={{
                  height:"40vh",
                  objectFit:"contain",
                }}
                 src={inputUrl} alt="display_img" />
              }
              
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button
              type="submit"
              className="add"
              onClick={handleSubmit}
             // onClick={() => setIsModalOpen(false)}
            >
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default QuoraHeader;
