import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { AuthContext } from "../context/authContext";
import { Box } from "@mui/system";
import { db } from "../config/config";

const Chat = () => {
  const [messages, setMessages] = useState(null);
  const [chatMsg, setChatMsg] = useState('')

  const {user} = useContext(AuthContext);
  const msgDate = (time)=>{
    // return new Date(time).toLocaleDateString()
    return new Date(time * 1000).toLocaleString();

  }
  console.log("db: ", db);
  const getMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chat"));
      const msgsArray = [];
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log("doc.data()  :>> ", doc.data());
        msgsArray.push(doc.data());
        setMessages(msgsArray);
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

const handleTextChange=(e)=>{
setChatMsg(e.target.value)
}
const handleSendMsgClick=(e)=>{
    const newChatMsg ={
text: chatMsg,

date: new Date(),
    }
}

  console.log("messages: ", messages);
  return (
    <Box variant="div" component="div" className="message-con">
      {messages &&
        messages.map((msg, i) => {
          return (
            <Box
              className="msg-txt-con"
              variant="div"
              component="div"
              style={{ backgroundColor: "grey", color: "white" }}
            >
              <p style={{ margin: "1rem 0" }}>{msg.text}</p>
              <p style={{ margin: "1rem 0" }}>{msg.author}</p>
              <p style={{ margin: "1rem 0" }}>{msgDate(msg.date.seconds)}</p>
            </Box>
          );
        })}

      <Box variant="div" component="div" className="message-inputs-con">
        <input
          type="text"
          id="chat"
          name="chat"
          value={chatMsg}
          onChange={handleTextChange}
        />

        <button onClick={handleSendMsgClick}>Send</button>
      </Box>
    </Box>
  );
};

export default Chat;
