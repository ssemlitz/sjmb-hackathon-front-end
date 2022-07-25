import { Link } from 'react-router-dom'
import React from 'react';
import Select from 'react-select';
import styles from './NavBar.module.css';

const NavBar = ({ userLang, setUserLang, userTheme,
  setUserTheme, fontSize, setFontSize, user, handleLogout }) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ]

  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
            <li><Link to="/changePassword">Change Password</Link></li>
          </ul>
          <div className={styles.navbar}>
            <h1>Geeks Code Compiler</h1>
            <Select options={languages} value={userLang}
              onChange={(e) => setUserLang(e.value)}
              placeholder={userLang} />
            <Select options={themes} value={userTheme}
              onChange={(e) => setUserTheme(e.value)}
              placeholder={userTheme} />
            <label>Font Size</label>
            <input type="range" min="18" max="30"
              value={fontSize} step="2"
              onChange={(e) => { setFontSize(e.target.value) }} />
          </div>
        </nav>
        :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
