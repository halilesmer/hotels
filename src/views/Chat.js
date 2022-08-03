import "./chat.css";

import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";

import { AuthContext } from "../context/authContext";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { db } from "../config/config";

const Chat = () => {
  const [messages, setMessages] = useState(null);
  const [chatMsg, setChatMsg] = useState("");

  const { user } = useContext(AuthContext);

  const msgDate = (time) => {
    // return new Date(time).toLocaleDateString()
    return new Date(time * 1000).toLocaleString();
  };
  const getMessages = async () => {
    try {
      const q = query(collection(db, "chat"));
      onSnapshot(q, (querySnapshot) => {
        const msgs = [];
        querySnapshot.forEach((doc) => {
          msgs.push(doc.data());
        });
        setMessages(msgs);
        console.log("messages ", msgs);
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleTextChange = (e) => {
    setChatMsg(e.target.value);
  };

  /* ------------ send message to firebase --------- */
  const handleSendMsgClick = async (e) => {
    const newChatMsg = {
      text: chatMsg,
      authorEmail: user.email,
      date: new Date(),
    };
    try {
      const docRef = await addDoc(collection(db, "chat"), newChatMsg);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = (e) => {
    console.log("e.key :>> ", e.key);
    e.preventDefault();
    if (chatMsg.trim()) {
      if (e.key === "Enter") {
        handleSendMsgClick();
        setChatMsg("");
      }
    }
  };

  const handleDeleteMessageClick= async (e)=>{

    await deleteDoc(doc(db, "cities", "DC"));
  }

  console.log("messages: ", messages);
  console.log("chatMsg: ", chatMsg);
  // console.log("db: ", db);

  return (
    <>
      <Box
        variant="div"
        component="div"
        className="message-con"
        style={{ paddingBottom: "4rem" }}
      >
        {messages &&
          messages.map((msg, i) => {
            return (
              <Box
                key={i}
                variant="body2"
                component="article"
                className="msg-container "
              >
                <div className="msg-box">
                  {/* <img className="user-img" src="" alt='empty'/> */}
                  <div className="flr">
                    <div className="messages">
                      <p className="msg" id="msg-0">
                        {msg.text}
                      </p>
                    </div>
                    <span className="timestamp">
                      <span className="username">{msg?.authorEmail}</span>•
                      <span className="posttime">
                        {msgDate(msg.date.seconds)}
                      </span>
                    </span>
                  </div>
                </div>
              </Box>
            );
          })}

        <Box variant="div" component="div" className="message-inputs-con">
          <Paper
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "fitContent",
              position: "fixed",
              bottom: 0,
              left: 0,
              marginBottom: "4rem",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              fullWidth
              placeholder="Write a message"
              //   inputProps={{ "aria-label": "search google maps" }}
              label="Chat"
              variant="filled"
              type="text"
              id="chat"
              name="chat"
              multiline
              //   rows={2}
              value={chatMsg}
              onChange={handleTextChange}
              onKeyUp={handleSubmit}
              //   onKeyUp={keyHandler}
            />
            <IconButton
              disabled={!chatMsg.trim()}
              type="submit"
              sx={{ p: "10px" }}
              aria-label="chat"
              onClick={handleSendMsgClick}
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Chat;
