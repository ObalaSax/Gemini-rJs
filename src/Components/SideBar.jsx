import { useState } from "react";

function SideBar() {
  const [menuOpen, setMenue] = useState(false);
  const handleStuff = () => {
    setMenue(!menuOpen);
  };
  return (
    <>
      <div className={menuOpen === false ? "sidebar" : "sidebar active"}>
        <div className="logo-container">
          <img src="" alt="" className="logo" />
          <h2 className="title"></h2>
        </div>
        <div className="burger-container">
          <div className="burger-trigger"></div>
          <div className="burger-menu"></div>
        </div>
        <div className="profile-container">
          <img src="" alt="profile" className="profi" />
          <div className="profile-content">
            <p className="username"> Wagwan Fam</p>
            <p className="mail">obalasax.com</p>
          </div>
        </div>
        <div className="content-container">
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/transactions">Transaction</a>
            </li>
            <li>
              <a href="/accounts">Account</a>
            </li>
            <li>
              <a href="/settings">Setting</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
            <button onClick={handleStuff}>Buttooon</button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
