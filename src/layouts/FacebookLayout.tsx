import React from 'react';
import { Outlet } from 'react-router-dom';
import MainContentContainer from '../components/common';
import Navbar from '../components/limb/Header/FacebookHeader';
type Props = {
  children?: React.ReactNode
};

const FacebookLayout: React.FC<Props> = (props) => {
 
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <MainContentContainer><Outlet/></MainContentContainer>
    </div>
  );
};

export default FacebookLayout;
