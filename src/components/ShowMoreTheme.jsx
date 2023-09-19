import { useState } from "react";
import "./ShowMoreTheme.css"
import Popup from "./Popup";

function ShowMoreTheme() {
    const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className="App">
      <main>
        <h1>Show Theme</h1>
        <br/><br/>
        <button onClick={() => setButtonPopup(true)}>Click here to show more Theme</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="changeTheme">
            <h3>Theme Color</h3>
            <p>Change Theme</p>
          </div>
          <br/> <br/>
          <div className="item-theme">
                <h3>FontColor</h3>
                <p>#444444</p>
                <img src="https://imgs.search.brave.com/gDUn6dUt5HEuUpqTzr9CiGOUdR7HFr3YEVdN2cDh5VQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/bGFjay1zbW9vdGgt/dGV4dHVyZWQtcGFw/ZXItYmFja2dyb3Vu/ZF81Mzg3Ni05ODMz/My5qcGc_c2l6ZT02/MjYmZXh0PWpwZw" alt="blackbg"/>
          </div>
          <br/><br/>
          <div className="item-theme2">
                <h3>Background Color</h3>
                <p>#FFFFF</p>
                <img src="https://imgs.search.brave.com/ayvM7LdoPz9F2waDAaCvXvT3OWIWoF7a4wQvcZ6ubvE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/ODgzNDU5MjE1MjMt/YzJkY2RiN2YxZGNk/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4TW54/OGQyaHBkR1VsTWpB/bE1qQmlZV05yWjNK/dmRXNWtmR1Z1ZkRC/OGZEQjhmSHd3Jnc9/MTAwMCZxPTgw" alt="whitebg"/>
          </div>
          <br/><br/>
          <div className="item-theme3">
                <h3>Button Color</h3>
                <p>#2072EF</p>
                <img src="https://imgs.search.brave.com/8mYfDUAzUgRLePK2GfgCjT7R8S63zyundnX1WTXsJCc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3LzcxLzU1/LzM2MF9GXzEwNzcx/NTUyOV9LNFpIMmtj/NFRrb0FaZEE3VzZm/TTZUOFZDeVI4QVVn/TC5qcGc  " alt="bluebgx"/>
          </div>
          <br/><br/>
          <div className="item-theme4">
                <h3>Button Border Color</h3>
                <p>#2072EF</p>
                <img src="https://imgs.search.brave.com/8mYfDUAzUgRLePK2GfgCjT7R8S63zyundnX1WTXsJCc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3LzcxLzU1/LzM2MF9GXzEwNzcx/NTUyOV9LNFpIMmtj/NFRrb0FaZEE3VzZm/TTZUOFZDeVI4QVVn/TC5qcGc  " alt="bluebgx"/>
          </div>
          <br/><br/>
          <div className="item-theme5">
                <h3>Buttons  Mouseover Color</h3>
                <p>#0053D1</p>
                <img src="https://imgs.search.brave.com/8mYfDUAzUgRLePK2GfgCjT7R8S63zyundnX1WTXsJCc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3LzcxLzU1/LzM2MF9GXzEwNzcx/NTUyOV9LNFpIMmtj/NFRrb0FaZEE3VzZm/TTZUOFZDeVI4QVVn/TC5qcGc  " alt="bluebgx"/>
          </div>
          <br/><br/>
          <div className="buttons">
            <button className="button1" onClick={() => setButtonPopup(false)}>Cancel</button>
            <button className="button2">Save</button>
          </div>
      </Popup>
    </div>
  );
}

export default ShowMoreTheme;
