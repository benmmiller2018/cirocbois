import React from 'react';

import './App.css';


var d = new Date();
var date = d.getDate();
var img;
if (date == 1){
  img="https://drive.google.com/uc?export=view&id=1voxPGokEgPMGjbbeSytS8Iy1PhU2C-_g";
}
else if (date == 2){
  img="https://drive.google.com/uc?export=view&id=18RBCS3XARnux5hCzVepU1Cebuxrx-cdZ";
}
else if (date == 3){
  img="https://drive.google.com/uc?export=view&id=1wyNsKLuYHEJfD6hQYlrHUvrKif7hTKkQ";
}
else if (date == 4){
  img="https://drive.google.com/uc?export=view&id=1d-IYY4gTzkK_vfrCMxBGv8E3AdykMqUq";
}
else if (date == 5){
  img="https://drive.google.com/uc?export=view&id=1BRovYBAhuiQf0swchrZWnEm4WPojocYi";
}
else if (date == 6){
  img="https://drive.google.com/uc?export=view&id=1KV1iQ0rFtSDFvWRCL1DgqCjMYg1vP2fi";
}
else if (date == 7){
  img="https://drive.google.com/uc?export=view&id=1Yfu07p1_HE4KXfmGnt9sxFCQx_hMCyuo";
}
else if (date == 8){
  img="https://drive.google.com/uc?export=view&id=1RnfrIixeGvbTBZrTMwG9dR-w1kZIFqMg";
}
else if (date == 9){
  img="https://drive.google.com/uc?export=view&id=15IcSIxvoLZI3LH3IK_7aswvsNniWQg6p";
}
else if (date == 10){
  img="https://drive.google.com/uc?export=view&id=1xRYVot4tEuHKi_UAO_29AXy3-jJJFo5c";
}
else if (date == 11){
  img="https://drive.google.com/uc?export=view&id=1itnwCqG9XZi1C4Jd65E9Z1XahQM92BUp";
}
else if (date == 12){
  img="https://drive.google.com/uc?export=view&id=1GVbz0ShlngLm1u43XrgawBqMZNu0oehR";
}
else if (date == 13){
  img="https://drive.google.com/uc?export=view&id=1W76YhEZg3YHZf2nOpr5FrPDaQmWX53Ee";
}
else if (date == 14){
  img="https://drive.google.com/uc?export=view&id=1y2uVK2jqB4HdFAJ7mVBCIiDCrKNXzjYu";
}
else if (date == 15){
  img="https://drive.google.com/uc?export=view&id=1q1IXWj3dNxWI2ZP9inS25ektgAlYkTaW";
}
else if (date == 16){
  img="https://drive.google.com/uc?export=view&id=1sC1AA6y6V19WwlXiaCSpGjCoMa8WVkEe";
}
else if (date == 17){
  img="https://drive.google.com/uc?export=view&id=1vJ78xY9U9btNOO5nA5kVMe1I0f5Ef3qX";
}
else if (date == 18){
  img="https://drive.google.com/uc?export=view&id=12ZJnzWexGqELy6t7cLK6IB9_FJMN3fp1";
}
else if (date == 19){
  img="https://drive.google.com/uc?export=view&id=1WYMV1xItq_Rvy3MuELAlsoF1IO6xv7bk";
}
else if (date == 20){
  img="https://drive.google.com/uc?export=view&id=1WiUQgLgGbOOVRXfKrUQjvaad_kJe6FwV";
}
else if (date == 21){
  img="https://drive.google.com/uc?export=view&id=1mQ9pEyZDQ53JEhNqypspw6rPioI3lTgY";
}
else if (date == 22){
  //temp repeat
  img="https://drive.google.com/uc?export=view&id=1EhpNg2oBG48thJFNvXy2X6fdwyrxsRut";
}
else if (date == 23){
  //temp repeat
  img="https://drive.google.com/uc?export=view&id=1EhpNg2oBG48thJFNvXy2X6fdwyrxsRut";
}
else if (date == 24){
  img="https://drive.google.com/uc?export=view&id=18ACfuEOW95PYVGiS2_jdxziJ_Utk7w6h";
}
else if (date == 25){
  img="https://drive.google.com/uc?export=view&id=1b1S5xw0SM9c0G7ONSv2Ip8x_liC_tYGp";
}
else if (date == 27){
  img="https://drive.google.com/uc?export=view&id=1tPAeGgM3j1lPlFWG8yngmilkgN32AIT2";
}
else if (date == 28){
  img="https://drive.google.com/uc?export=view&id=1fMMr6C2QVagBXHhM88dIfPvuNTZ32Euh";
}
else if (date == 29){
  img="https://drive.google.com/uc?export=view&id=1JaoLGD1E5YW3wRFnqjcVvYpCKs3c79qN";
}
else if (date == 26){
  img="https://drive.google.com/uc?export=view&id=16oYxeDBduwq9gWUPt8Y_XefF1Sqy0Yjm";
}
else if (date == 30){
  img="https://drive.google.com/uc?export=view&id=1TSSekfl5iP7tFCsysV2XJUAf1_qL7rH1";
}
else{
  img="https://drive.google.com/uc?export=view&id=1EhpNg2oBG48thJFNvXy2X6fdwyrxsRut";
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ciroc boy of the day</h1>
        <img src={img} />
        
      </header>
    </div>
  );
}

export default App;
