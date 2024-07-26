import React from 'react';
import Typewriter from 'typewriter-effect';
import '../Typed/typed.css'

const Typed: React.FC = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['<strong>HAMID <span style="color: #27ae60;">Hello</span> World!</strong>', 'RN Front-end Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;
