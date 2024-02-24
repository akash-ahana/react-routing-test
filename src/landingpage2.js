import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landingpage2() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/thirdpage");
  };

  return (
    <div>
      <h1>Landing page 2</h1>
      <button onClick={handleSubmit}>Button 2</button>
    </div>
  );
}
