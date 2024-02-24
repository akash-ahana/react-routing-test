import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landingpage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/secondpage");
  };

  return (
    <div>
      <h1>Landing page</h1>
      <button onClick={handleSubmit}>Button 1</button>
    </div>
  );
}
