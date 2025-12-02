import playstation from "./images/playstation.jpeg";
import nitendo from "./images/nitendo.jpg";
import gameboy from "./images/gameboy.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './home.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './user.css';

const Home = ({ isAuth, ActiveTab, setActiveTab, Username }) => {
  const activechat = () => {
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
      {isAuth ?
        (
          <div className="main-window">
            {/* sidebar for tabs */}
            <div className="tab-sidebar">
              <i className={`tabs fa-solid fa-home ${ActiveTab === "Home" ? "ActiveTab" : ""}`} onClick={() => setActiveTab("Home")}></i>
              <i className={`tabs fa-solid fa-user-group ${ActiveTab === "friends" ? "ActiveTab" : ""}`} onClick={() => setActiveTab("friends")}></i>
              <i className={`tabs fa-solid fa-user-plus ${ActiveTab === "addfriends" ? "ActiveTab" : ""}`} onClick={() => setActiveTab("addfriends")}></i>
              <i className={`tabs fa-solid fa-gear ${ActiveTab === "settings" ? "ActiveTab" : ""}`} onClick={() => setActiveTab("settings")}></i>
            </div>
            {ActiveTab === "friends" ?
              (<div className="friend-chat-window">
                <div className="siderbar-friends">
                  {/* Sidebar for friends list*/}
                  <h2>{Username}</h2>
                  <input type="text" placeholder="Search" className="friends_search_bar"/>
                  <div className="user-list">
                    {friendList.map(
                      (user, index) => (
                        <div key={index} className={`user-item ${selectedUser === user ? "active" : ""}`} onClick={() => { setSelectedUser(user); activechat() }}>
                          <div className="profile-pic"></div>
                          <span>{user}</span>
                        </div>
                      )
                    )}
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
              ):(
              <div></div>
              )}
          </div>
        )
        :
        (
          <div className="main-page">
            {/* <!-- Sidebar and Main Content --> */}
            <div className="full-body">
              {/* <!-- Sidebar --> */}
              <div className="consoles">
                <h4 className="main_heading">All Gaming consoles</h4>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Playstation Portable</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Gameboy Advance</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nitendo DS</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Playstation 2</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Super Nintendo</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Playstation</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nintendo 64</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nintendo</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nintendo Wii</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Sega Genesis</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Gameboy Color</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> GameCube</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Xbox</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Gameboy</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nintendo 3DS</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> MAME</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Dreamcast</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> SNK Neo Geo</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Sega Master System</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Capcom Play System 2</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Sega Saturn</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Atari 2600</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Game Gear</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Amiga 500</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> MAME 037b11</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Sega 32X</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Capcom Play System</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nintendo Virtual Boy</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Commodore 64</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nintendo Famicom Disk System
                </h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Apple I</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Sega Dreamcast</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Atari 800</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nintendo Pokemon Mini</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> MSX Computer</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Nokia N Gage</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Apple II</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Sega Pico</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Atari 7800 ProSystem</h5>
                <h5 className="headings"><i className="emugames-pointer fa-solid fa-circle-arrow-right"></i> Neo Geo Pocket Color</h5>
              </div>
              {/* <!-- main content --> */}
              <div className="main-content">
                {/* <!-- Card 1 --> */}
                <div>
                  <div className="card home-card">
                    <img src={playstation} className="card-img-top" alt="retro gaming" />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <h5 className="card-title"><i className="fa-brands fa-playstation"></i> Play Station portable</h5>
                      <p className="card-text">Playstation offers 1000+ high quality, story line open world Games such as GTA V, GOW
                        ragnarok, etc</p>
                      <Link to="/emulators" className="btn btn-dark">Download Now</Link>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div>
                  <div className="card home-card">
                    <img src={nitendo} className="card-img-top" alt="nintendo mario" />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <h5 className="card-title">Nintendo Always Works on Making Next Mario Game</h5>
                      <p className="card-text">In an interview with IGN, Shigeru Miyamoto, the creator of Mario revealed that Nintendo
                        is always working on the next Mario game. They are just waiting to share more information on the next
                        major game release. Nintendo recently opened a Mario-based theme park in Hollywood and will be releasing a
                        movie of the same franchise. So it makes sense for them to wait before revealing the next game.</p>
                      <Link to="/emulators" className="btn btn-dark">Download Now</Link>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div>
                  <div className="card home-card">
                    <img src={gameboy} className="card-img-top" alt="Gameboy advance image" />
                    <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                      <h5 className="card-title">Nintendo Switch's Gameboy Advance the third Most Sold Console in the World so far</h5>
                      <p className="card-text">Nintendo informed in its newest earnings report the Switch console sold 8.2 million
                        units in the last three months of previous year. This brought total amount of Switch consoles sold
                        worldwide to 122.55 million since being launched, making it the third most sold console in gaming history.
                        However, the PS2 is still the most sold console of all time.</p>
                      <Link to="/emulators" className="btn btn-dark">Download Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Home;