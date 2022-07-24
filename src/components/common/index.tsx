import React from 'react';
type Props = {
  children?: React.ReactNode
};
const MainContentContainer:  React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div
      className=""
      style={{ marginTop: '3.5rem', minHeight: 'calc(100% - 4rem)' }}
    >
      {children}
    </div>
  );
};

export default MainContentContainer;
