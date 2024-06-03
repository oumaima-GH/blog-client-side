import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import defaultAvatar from '../assets/profile-user.png';

const ProfilePage = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: user.username,
    profilePicture: user.profilePicture,
    email: user.email,
    bio: user.bio
  });


  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    updateUser(userData);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevState) => ({
          ...prevState,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-info">
        <img src={userData.profilePicture || defaultAvatar} alt="profile" className="profile-page-avatar" />
        <input type="file" onChange={handleProfilePictureChange} />
      </div>
      <div className="profile-form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={changeInputHandler}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={changeInputHandler}
        />
        <label>Bio</label>
        <textarea
          name="bio"
          value={userData.bio}
          onChange={changeInputHandler}
        />
        <button onClick={handleSave} className="btn save-btn">Save</button>
      </div>
    </div>
  );
};

export default ProfilePage;



// import React, { useContext, useState } from 'react';
// import { AuthContext } from '../context/AuthProvider';
// import defaultAvatar from '../assets/profile-user.png';
// import axios from 'axios';

// const ProfilePage = () => {
//   const { user, updateUser } = useContext(AuthContext);
//   const [userData, setUserData] = useState({
//     username: user.username,
//     profilePicture: user.profilePicture,
//     email: user.email,
//     bio: user.bio
//   });

//   const changeInputHandler = (e) => {
//     setUserData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       const response = await axios.put(`/api/v1/users/${user.id}`, userData, {
//         headers: {
//         Authorization: `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       updateUser(response.data);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUserData((prevState) => ({
//           ...prevState,
//           profilePicture: reader.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="profile-page">
//       <div className="profile-info">
//         <img src={userData.profilePicture || defaultAvatar} alt="profile" className="profile-page-avatar" />
//         <input type="file" onChange={handleProfilePictureChange} />
//       </div>
//       <div className="profile-form">
//         <label>Username</label>
//         <input
//           type="text"
//           name="username"
//           value={userData.username}
//           onChange={changeInputHandler}
//         />
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={userData.email}
//           onChange={changeInputHandler}
//         />
//         <label>Bio</label>
//         <textarea
//           name="bio"
//           value={userData.bio}
//           onChange={changeInputHandler}
//         />
//         <button onClick={handleSave} className="btn save-btn">Save</button>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
