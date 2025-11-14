import { useState } from 'react';
import './user.css';

const User = (ActiveTab,setActiveTab) => {
  const activechat=()=>{
    const chatSection = document.querySelector('.chat-section');
    chatSection.classList.add('chat-section-active');
  }
  const [selectedUser, setSelectedUser] = useState("");
  const [messages, setMessages] = useState([
    { sender: "Rishi", text: "Hello!" },
    { sender: "Rishi", text: "How are you" },
    { sender: "You", text: "i am fine" },
    { sender: "You", text: "What about you" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };
  const friendList = ["Rishi", "Vivek", "Pratyush", "Aaditya"];
  return (
    <div>
      <div className="chat-container">
        {/* sidebar for tabs */}
        <div className="tab-sidebar">
          <i className={`tabs fa-solid fa-home ${ActiveTab === "Home" ? "ActiveTab" : ""}`}></i>
          <i className={`tabs fa-solid fa-user-group ${ActiveTab === "friends" ? "ActiveTab" : ""}`}></i>
          <i className={`tabs fa-solid fa-user-plus ${ActiveTab === "addfriends" ? "ActiveTab" : ""}`}></i>
          <i className={`tabs fa-solid fa-gear ${ActiveTab === "settings" ? "ActiveTab" : ""}`}></i>
        </div>
        {/* Sidebar for friends list*/}
        <div className="sidebar">
          <h2>user1</h2>
          <input type="text" placeholder="Search" className="search-bar" />
          <div className="user-list">
            {friendList.map(
              (user, index) => (
                <div key={index} className={`user-item ${selectedUser === user ? "active" : ""}`} onClick={() => setSelectedUser(user)}>
                  <div className="profile-pic"></div>
                  <span onClick={activechat}>{user}</span>
                </div>
                )
              )
            }
          </div>
        </div>

        {/* Chat section */}
        <div className="chat-section">
          <div className="chat-header">
            <span>{selectedUser}</span>
            <div className="chat-icons">
              <i className="fa-solid fa-phone"></i>
              <i className="fa-solid fa-video"></i>
              <i className="fa-solid fa-circle-info"></i>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "You" ? "sent" : "received"}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;