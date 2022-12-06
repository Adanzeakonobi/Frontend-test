import React from 'react';
import { BsClock, BsCheck2Circle } from 'react-icons/bs';
import { FiArrowDownLeft, FiCloud } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import rabbit from '../../images/rabbit.png';

const HomeHeader = () => (
  <div className="heading-cont">
    <div className="pic-first">
      <span className="p-heading">P</span>
      <span className="clock">
        <BsClock />
        {' '}
        0min
      </span>
      <img className="img" src={rabbit} alt="rabbit" />
      <span className="arrow flex">
        <FiArrowDownLeft />
        {' '}
        0
      </span>
    </div>
    <div className="pic-second">
      <BsCheck2Circle className="check" />
      <FiCloud className="cloud" />
      <FaEllipsisV />
    </div>
  </div>
);

export default HomeHeader;