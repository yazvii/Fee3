import React from 'react';
import './App.css';
import './Css/responsive.css'; // Ensure the correct path

import Div1 from './Components/Div1';
import Div2 from './Components/Div2';
import Div3 from './Components/Div3';
import Div4 from './Components/Div4';
import Div5 from './Components/Div5';
import Div6 from './Components/Div6';
import Div7 from './Components/Div7';
import Footer from './Components/Footer';

function App() {
  const items = [
    {
      imgSrc: 'Images/pasta-small-1.png',
      title: 'lorem ipsum',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      imgSrc: 'Images/pasta-small-2.png',
      title: 'lorem ipsum',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      imgSrc: 'Images/pasta-small-3.png',
      title: 'lorem ipsum',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
  ];

  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  ];

  const data = [
    {
      imgSrc: 'Images/page-six-title.png',
      text: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore',
    },
    {
      imgSrc: 'Images/page-six-title.png',
      text: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore',
    },
    {
      imgSrc: 'Images/page-six-title.png',
      text: 'Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne ullamco laboris nisi ut aliqolore',
    },
  ];

  return (
    <>
      <Div1 />
      <Div2 items={items} />
      <Div3 paragraphs={paragraphs} />
      <Div4 />
      <Div5 />
      <Div6 data={data} />
      <Div7 />
      <Footer />
    </>
  );
}

export default App;
