import React from 'react';
import img1 from "./1.jpeg"
import img2 from "./2.png"
import img3 from "./3.PNG"
import img4 from "./4.HEIC"
import img5 from "./5.PNG"
import img6 from "./6.JPG"
import img7 from "./7.PNG"
import img8 from "./8.JPG"
import img9 from "./9.JPG"
import img10 from "./10.PNG"
import img11 from "./11.PNG"
import img12 from "./12.PNG"
import img13 from "./13.PNG"
import img14 from "./14.HEIC"
import img15 from "./15.PNG"
import img16 from "./16.HEIC"
import img17 from "./17.PNG"
import img18 from "./18.JPG"
import img19 from "./19.PNG"
import img20 from "./20.JPG"
import img21 from "./21.JPG"
import img22 from "./22.JPG"
import img23 from "./23.JPG"
import img24 from "./24.JPG"
import img25 from "./25.JPG"
import img26 from "./26.PNG"
import img27 from "./27.JPG"
import img28 from "./joe.jpg"
import img29 from "./mox.jpg"
import img30 from "./pat.jpg"
import img31 from "./patty.jpg"
import './App.css';


var d = new Date();
var date = d.getDate();
var img;
if (date == 1){
  img = img1;
}
else if (date == 2){
  img = img2;
}
else if (date == 3){
  img = img3;
}
else if (date == 4){
  img = img4;
}
else if (date == 5){
  img = img5;
}
else if (date == 6){
  img = img6;
}
else if (date == 7){
  img = img7;
}
else if (date == 8){
  img = img8;
}
else if (date == 9){
  img = img9;
}
else if (date == 10){
  img = img10;
}
else if (date == 11){
  img = img11;
}
else if (date == 12){
  img = img12;
}
else if (date == 13){
  img = img13;
}
else if (date == 14){
  img = img14;
}
else if (date == 15){
  img = img15;
}
else if (date == 16){
  img = img16;
}
else if (date == 17){
  img = img17;
}
else if (date == 18){
  img = img18;
}
else if (date == 19){
  img = img19;
}
else if (date == 20){
  img = img20;
}
else if (date == 21){
  img = img21;
}
else if (date == 22){
  img = img22;
}
else if (date == 23){
  img = img23;
}
else if (date == 24){
  img = img24;
}
else if (date == 25){
  img = img25;
}
else if (date == 27){
  img = img27;
}
else if (date == 28){
  img = img28;
}
else if (date == 29){
  img = img29;
}
else if (date == 26){
  img = img26;
}
else if (date == 30){
  img = img30;
}
else{
  img = img31;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img24} />
        
      </header>
    </div>
  );
}

export default App;
