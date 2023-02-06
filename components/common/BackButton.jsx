'use client';

const BackButton = () => {
  const handleClick = () => {
    window.history.back();
  };

  return <button onClick={handleClick} className="mb-2">↩ Volver</button>;
};

export default BackButton;
