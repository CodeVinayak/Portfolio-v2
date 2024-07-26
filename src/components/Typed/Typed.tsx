import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed: React.FC = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Software Developer', 'RN Front-end Developer'],
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
