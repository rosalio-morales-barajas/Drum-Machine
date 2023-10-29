
import { useEffect, useState } from 'react';
import './App.css';


function App() {

 const [activeKey, setActiveKey] = useState();

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
     console.log(event.key);
      playSound(event.key.toUpperCase());
    });
  }, []);

const drumPads = [
  {keycode: 81,
  text: "Q",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
},
{keycode: 87,
  text: "W",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
},
{keycode: 69,
  text: "E",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
},
{keycode: 65,
  text: "A",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
},
{keycode: 83,
  text: "S",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
},
{keycode: 68,
  text: "D",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
},
{keycode: 90,
  text: "Z",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
},
{keycode: 88,
  text: "X",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
},
{keycode: 67,
  text: "C",
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
},
];



 function playSound(selector) {
  const audio = document.getElementById(selector);
  audio.play();
  setActiveKey(selector)
 }

  return (
  
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activeKey}</div>
        <div className="drum-pads">
        {drumPads.map((drumPad) => ( 
          <div
            key={drumPad.src}
            onClick={() => {
            playSound(drumPad.text)
          }} className="drum-pad" i
             id={drumPad.src}
             >
            {drumPad.text}
            <audio 
            className="clip"  
            id={drumPad.text} 
            src={drumPad.src}
            ></audio>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
