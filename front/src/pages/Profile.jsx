import React from 'react';
import { Link } from 'react-router-dom';
import defaultAvatar from '../assets/profile-user.png';

const Profile = ({ user }) => {
  const { username, profilePicture, email, bio } = user;
  

  return (
    <div className="profile">
      <Link to="/profile">
        <img src={profilePicture || defaultAvatar} alt="profile" className="profile-avatar" />
        <div className="profile-info">
          
          {/* <span className="profile-username">{username}</span>
          <span className="profile-email">{email}</span>
          <span className="profile-bio">{bio}</span> */}
        </div>
      </Link>
    </div>
  );
};

export default Profile;




// *********************************************
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import defaultAvatar from '../assets/profile-user.png';

// const Profile = ({ user, logout }) => {
//   const { username, profilePicture, email, bio } = user;
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className="profile">
//       <div className="profile-avatar-container">
//         <img
//           src={profilePicture || defaultAvatar}
//           alt="profile"
//           className="profile-avatar"
//           onClick={() => setShowMenu(!showMenu)}
//         />
//         {showMenu && (
//           <div className="profile-dropdown">
//             <p>{username}</p>
//             <p>{email}</p>
//             <p>{bio}</p>
//             {/* <button onClick={logout}>Logout</button> */}
//           </div>
//         )}
//       </div>
//       <Link to="/profile" className="profile-info">
//         <span className="profile-username">{username}</span>
//         <span className="profile-email">{email}</span>
//         <span className="profile-bio">{bio}</span>
//       </Link>
//     </div>
//   );
// };

// export default Profile;
