import "./chat.css";

import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { AuthContext } from "../context/authContext";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import ErrorPage from "../component/ErrorPage";
import SendIcon from "@mui/icons-material/Send";
import { db } from "../config/config";

const Chat = () => {
  const [messages, setMessages] = useState(null);
  const [chatMsg, setChatMsg] = useState("");

  const { user } = useContext(AuthContext);
  /* -------- auto scrol to bottom after send messages -------- starts */
  const bottom = useRef(null);
  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  };
  /* -------- auto scrol to bottom after send messages -------- ends */

  /* -------- transform date -------- starts*/

  const msgDate = (time) => {
    // return new Date(time).toLocaleDateString()
    return new Date(time * 1000).toLocaleString();
  };
  /* -------- transform date -------- ends */

  const getMessages = async () => {
    try {
      const q = query(collection(db, "chat", ), orderBy("date", 'asc'))

      onSnapshot(q,  (querySnapshot) => {
        const msgs = [];
        querySnapshot.forEach((doc) => {
          // console.log("doc: ", doc.data());
          // console.log("doc.id :>> ", doc.id);
          const myMessage = {
            id: doc.id,
            data: doc.data(),
          };
          msgs.push(myMessage);
        });
        setMessages(msgs);
        // console.log("messages ", msgs);
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  /* -------- listen  -------- starts*/

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      scrollToBottom();
      setChatMsg('')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chatMsg.trim()) {
      if (e.key === "Enter") {
        handleSendMsgClick();
        setChatMsg("");
      }
    }
  };

  /* ------------ delete messages ------------- */
  const handleDeleteMessageClick = async (id) => {

    try {
      const docRef = await doc(db, "chat", id);
      deleteDoc(docRef);
    } catch (error) {
      console.log("error: ", error);
      
    }
  };
  




  // console.log("messages: ", messages);
  // console.log("chatMsg: ", chatMsg);
  // console.log("db: ", db);

  return (
    <>
      <Box
        variant="div"
        component="div"
        className="message-con"
        style={{ paddingBottom: "4rem" }}
      >
        {messages && messages.length > 0 ? (
          messages.map((msg, i) => {
            return (
              <Box
                key={i}
                variant="body2"
                component="article"
                className="msg-container "
              >
                <IconButton
                  className="delete-button"
                  onClick={() => handleDeleteMessageClick(msg.id)}
                  size="small"
                >
                  <DeleteIcon fontSize="10px" />
                </IconButton>
                <div className="msg-box">
                  {/* <img className="user-img" src="" alt='empty'/> */}
                  <div className="flr">
                    <div className="messages">
                      <p className="msg" id="msg-0">
                        {msg.data.text}
                      </p>
                    </div>
                    <span className="timestamp">
                      <span className="username">{msg?.data.authorEmail}</span>•
                      <span className="posttime">
                        {msgDate(msg.data.date.seconds)}
                      </span>
                    </span>
                  </div>
                </div>
              </Box>
            );
          })
        ) : (
          <ErrorPage errorMsg="You do not have any messages" />
        )}
        <div ref={bottom}></div>
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
