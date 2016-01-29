import React from 'react';

const Loader = ({children, isLoaded}) => {
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return children;
};
export default Loader;
