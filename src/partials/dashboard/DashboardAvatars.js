import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon1 from '../../images/Field Screen/HomeIcon1.png';
import HomeIcon2 from '../../images/Field Screen/HomeIcon2.png';
import HomeIcon3 from '../../images/Field Screen/HomeIcon3.png';
import HomeIcon4 from '../../images/Field Screen/HomeIcon4.png';
import HomeIcon5 from '../../images/Field Screen/HomeIcon5.png';
import HomeIcon6 from '../../images/Field Screen/HomeIcon6.png';
import HomeIcon7 from '../../images/Field Screen/HomeIcon7.png';

function DashboardAvatars() {
  return (
    <ul className="flex flex-wrap justify-center ">
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9  " src={HomeIcon1} width="36" height="36" alt="User 01" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9  " src={HomeIcon2} width="36" height="36" alt="User 02" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9  " src={HomeIcon3} width="36" height="36" alt="User 03" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9  " src={HomeIcon4} width="36" height="36" alt="User 04" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9  " src={HomeIcon5} width="36" height="36" alt="User 04" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9  " src={HomeIcon6} width="36" height="36" alt="User 04" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9  " src={HomeIcon7} width="36" height="36" alt="User 04" />
        </Link>
      </li>
    </ul>
  );
}

export default DashboardAvatars;
