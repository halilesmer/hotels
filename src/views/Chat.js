import './chat.css';

import { Button, Divider, IconButton, InputBase, Paper, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";

import { AuthContext } from "../context/authContext";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import TimeAgo from "react-timeago";
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
          //   const querySnapshot = await getDocs(collection(db, "chat"));
          //   const msgsArray = [];
          //   querySnapshot.forEach((doc) => {
              //     // console.log(`${doc.id} => ${doc.data()}`);
              //     console.log("doc.data()  :>> ", doc.data());
              //     msgsArray.push(doc.data());
      //     setMessages(msgsArray);
      //   });
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

const handleSubmit=(e)=>{
    console.log('e.key :>> ', e.key);
    e.preventDefault();
    //  if (e.key === "Enter" && e.key && chatMsg) {
        //    handleSendMsgClick();
        //    setChatMsg('')
        //  }
        
       if( chatMsg.trim()) {
    if(e.key === "Enter"){
        handleSendMsgClick();
        setChatMsg("");

    }
}
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
        {/* {messages &&
        messages.map((msg, i) => {
          return (
              <Box
                className="msg-box"
                variant="div"
                component="div"
                style={{ backgroundColor: "grey", color: "white" }}
              > */}
        {/* <p style={{ margin: "1rem 0" }}>{msg.text}</p>
                <p style={{ margin: "1rem 0" }}>{msg.author}</p>
                <p style={{ margin: "1rem 0" }}>{msgDate(msg.date.seconds)}</p> */}

        {messages &&
          messages.map((msg, i) => {
            return (
              <Box
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
