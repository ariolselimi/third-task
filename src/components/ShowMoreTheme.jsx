import { useState } from "react";
import "./ShowMoreTheme.css"
import Popup from "./Popup";

function ShowMoreTheme() {

    const [colorOne, setColorOne] = useState('#444444');
    const [colorTwo, setColorTwo] = useState('#FFFFFF');
    const [colorThree, setColorThree] = useState('#2027EF');
    const [colorFour, setColorFour] = useState('#2027EF');
    const [colorFive, setColorFive] = useState('#0053D1');

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
                <div className="colors">
                <p className="color-paragraph">{colorOne}</p>
                <input 
                className="custom-input" 
                type="color"
                value={colorOne}
                onChange={(e) => setColorOne(e.target.value)} 
                />
                </div>
          </div>
          <hr/>
          <br/><br/>
          <div className="item-theme">
                <h3>Background Color</h3>
                <div className="colors">
                <p className="color-paragraph">{colorTwo}</p>
                <input 
                className="custom-input" 
                type="color"
                value={colorTwo}
                onChange={(e) => setColorTwo(e.target.value)} 
                />
                </div>
          </div>
          <hr/>
          <br/><br/>
          <div className="item-theme">
          <h3>Button Color</h3>
          <div className="colors">
                <p className="color-paragraph">{colorThree}</p>
                <input 
                className="custom-input" 
                type="color"
                value={colorThree}
                onChange={(e) => setColorThree(e.target.value)} 
                />
                </div>
          </div>
          <hr/>
          <br/><br/>
          <div className="item-theme">
          <h3>Button Border Color</h3>
          <div className="colors">
                <p className="color-paragraph">{colorFour}</p>
                <input 
                className="custom-input" 
                type="color"
                value={colorFour}
                onChange={(e) => setColorFour(e.target.value)} 
                />
                </div>
          </div>
          <hr/>
          <br/><br/>
          <div className="item-theme">
          <h3>Buttons Mouse Color</h3>
          <div className="colors">
                <p className="color-paragraph">{colorFive}</p>
                <input 
                className="custom-input" 
                type="color"
                value={colorFive}
                onChange={(e) => setColorFive(e.target.value)} 
                />
                </div>
          </div>
          <hr/>
          <br/><br/>
          <div className="buttons">
            <button className="button1" onClick={() => setButtonPopup(false)}>Cancel</button>
            <button className="button2"onClick={() => setButtonPopup(false)}>Save</button>
          </div>
      </Popup>
    </div>
  );
}

export default ShowMoreTheme;
