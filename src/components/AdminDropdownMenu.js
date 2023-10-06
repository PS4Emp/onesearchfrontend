import React from 'react';
import gi from './ProductImages/g2.svg';
import git from './ProductImages/gt2.svg';
import sl from './ProductImages/s2.svg';
import dr from './ProductImages/d2.svg';
import ji from './ProductImages/j2.svg';
import not from './ProductImages/n2.svg';
import we from './ProductImages/w2.svg';
import fi from './ProductImages/f2.svg';
import './Ad.css';

function AdminDropdownMenu({ isOpen, onAppClick }) {
    const apps = [
      { name: 'Slack', iconUrl: sl },
      { name: 'Github', iconUrl: git },
      { name: 'Google Drive', iconUrl: dr },
      { name: 'Gmail', iconUrl: gi },
      { name: 'Jira', iconUrl: ji },
      { name: 'Notion', iconUrl: not },
      { name: 'Web', iconUrl: we },
      { name: 'File', iconUrl: fi }
      // Add more app options here
    ];
  
    return (
      <div className={`admin-dropdown-menu ${isOpen ? 'open' : ''}`}>
        <h3 className="menu-heading">Connector Settings</h3>
        <ul>
          {apps.map((app, index) => (
            <li key={index} onClick={() => onAppClick(app.name)}>
              <img
                src={app.iconUrl}
                alt={`${app.name} Icon`}
                className="app-icon" 
              />
              {app.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AdminDropdownMenu;