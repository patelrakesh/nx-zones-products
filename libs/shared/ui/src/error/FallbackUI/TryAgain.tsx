'use client';

import Button from '../../Button';

const TryAgain = () => {
  const handleClick = () => {
    console.log('handleClick');
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffcc00',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <span style={{ flex: 1 }}>
        Oops! Something went wrong. Please try again later.
      </span>
      <Button onClick={handleClick}>Try Again</Button>
    </div>
  );
};

export default TryAgain;
