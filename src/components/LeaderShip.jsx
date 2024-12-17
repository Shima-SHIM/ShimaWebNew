// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import shimaCharacter from "../assets/home-character-image.png";
import defaultUserImage from "../assets/home-character-image.png";
import starBg from "../assets/home-shinning-star.png";
import coinTopLeft from "../assets/coin-top-left.png";
import coinTopRight from "../assets/coin-top-right.png";
import coinBottomLeft from "../assets/coin-bottom-left.png";
import coinBottomRight from "../assets/coin-bottom-right.png";

// const leaders = [
//   {
//     name: "John Doe",
//     title: "CEO",
//     description: "John has over 20 years of experience leading tech companies.",
//     image: shimaCharacter,
//     details:
//       "John has a Master's degree in Computer Science from MIT and is a regular speaker at tech conferences.",
//   },
//   {
//     name: "Jane Smith",
//     title: "CTO",
//     description:
//       "Jane is an expert in AI and has been with the company for 10 years.",
//     image: shimaCharacter,
//     details:
//       "Jane holds a PhD in Artificial Intelligence and has published numerous papers in the field.",
//   },
//   {
//     name: "Mike Johnson",
//     title: "CFO",
//     description:
//       "Mike manages the financial operations with a keen eye for detail.",
//     image: shimaCharacter,
//     details:
//       "Mike is a CPA and has over 15 years of experience in financial management.",
//   },
// ];

// const initialUsers = Array.from({ length: 20 }, (_, i) => ({
//   name: `User ${i + 1}`,
//   image: defaultUserImage,
//   score: Math.floor(Math.random() * 1000),
// }));

const LeaderShip = () => {
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState([]);
  const [leaders, setLeaders] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null);
  // const [filter, setFilter] = useState("");
  const [theme, setTheme] = useState("light");
  const [themeColor, setThemeColor] = useState("#ffffff");

  const fetchUsers = async () => { 
    try { 
        const usersCollection = collection(db, 'telegramUsers'); 
        const usersSnapshot = await getDocs(usersCollection);

        const usersData = usersSnapshot.docs.map(doc => doc.data());

        const sortedUsers = usersData.sort((a, b) => b.balance - a.balance);

        const usersExcludingTop3 = sortedUsers.slice(3);

        setUsers(usersExcludingTop3);
        setFilteredUsers(usersExcludingTop3);
    } catch (error) { 
        console.error("Error fetching users:", error); 
    } 
};
  
  const fetchLeaders = async () => { 
    try {
        const usersCollection = collection(db, 'telegramUsers'); 
        const usersQuery = query(usersCollection, orderBy('balance', 'desc'), limit(3)); 
        const usersSnapshot = await getDocs(usersQuery); 
        
        const leadersData = usersSnapshot.docs.map(doc => doc.data());
        setLeaders(leadersData); 
    } catch (error) {
        console.error("Error fetching leaders:", error);
    }
};

  useEffect(() => {
    setLoaded(true);
    fetchUsers(); 
    fetchLeaders();
  }, []);

  // const filterUsers = (filter) => {
  //   const filteredUsers = initialUsers.filter((user) =>
  //     user.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  //   setUsers(filteredUsers);
  // };

  // // Filter users by name based on the input filter
  // const filterUsers = async (filter) => {
  //   // Fetch all users from Firestore (this can be optimized later if needed)
  //   const usersCollection = collection(db, 'users');
  //   const usersSnapshot = await getDocs(usersCollection);
  //   const allUsers = usersSnapshot.docs.map(doc => ({
  //     name: doc.data().name,
  //     image: doc.data().image || defaultUserImage,
  //     score: doc.data().score,
  //   }));
  
  //   // Filter users by name based on the input filter
  //   const filteredUsers = allUsers.filter((user) =>
  //     user.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  
  //   setUsers(filteredUsers); // Update state with filtered users
  // };

  // const filterUsers = (filter) => {
  //    const filteredUsers = users.filter((user) => user.balance >= Number(filter) 
  //   ); 
  //   setFilteredUsers(filteredUsers);
  //   console.log("filter user")
  //   console.log(filteredUsers)
  //   console.log(users)
  // }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleColorChange = (event) => {
    setThemeColor(event.target.value);
  };

  return (
    <section
    id="leadership"
      className={`relative w-full min-h-screen flex flex-col items-center justify-center ${
        theme === "light" ? `bg-[${themeColor}]` : "bg-[#121212]"
      } font-[Gluten] transition-colors duration-500`}
    >
      <div className="relative w-[90%] mt-[60px] bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center overflow-hidden shadow-2xl p-8">
        {/* Hareketli Arkaplan */}
        <div className="absolute top-0 left-0 w-full h-full z-0 animate-pulse">
          <img
            src={starBg}
            alt="Star Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Liderlik Bölümü Devamı */}
        <div
          className={`relative z-20 text-center flex flex-col items-center ${
            loaded ? "animate-fadeInUp" : ""
          }`}
        >
          <h1 className="text-4xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 mt-4 lg:mt-2 glow">
            Leadership Team
          </h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 w-full px-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900 shadow-xl flex flex-col items-center animate-fadeInUp transform transition duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="flex items-center justify-center w-full mb-4">
        <span className="text-3xl font-bold text-yellow-500">
          #{index + 1}
        </span>
      </div>
                <img
                  src={shimaCharacter ? shimaCharacter : defaultUserImage}
                  alt={leader.fullName}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {leader.fullName}
                </h2>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  Score : {leader.balance}
                </h3>
                <p className="text-sm text-[#ffff] dark:text-gray-300">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl lg:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 glow">
            Top Gamified Users
          </h2>
          <div className="flex justify-between items-center w-full px-6 mb-4">
            {/* <input
              type="text"
              placeholder="Search users..."
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-2 dark:bg-gray-800 dark:text-gray-200"
              onChange={(e) => setFilter(e.target.value)}
              onKeyUp={() => filterUsers(filter)}
            /> */}
            {/* <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => sortUsers("asc")}
            >
              Sort Ascending
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => sortUsers("desc")}
            >
              Sort Descending
            </button> */}
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              onClick={toggleTheme}
            >
              Toggle Theme
            </button>
            {/* <input
              type="color"
              value={themeColor}
              onChange={handleColorChange}
              className="ml-4 border-0"
            /> */}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-6">
            {filteredUsers.slice(0, 20).map((user, index) => (
              <div
                key={index}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900 shadow-xl flex flex-col items-center animate-fadeInUp transform transition duration-500 hover:scale-105"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onClick={() => setSelectedUser(user)}
              >
                <div className="flex items-center justify-between mb-2 w-full">
                  <span className="text-3xl font-bold text-yellow-500">
                    #{index + 4}
                  </span>
                  <img
                    src={user.image ? user.image : defaultUserImage}
                    alt={user.fullName}
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {user.fullName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Score: {user.balance}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Pencereler - Kullanıcı */}
        {selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-1/3">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {selectedUser.fullName}
              </h2>
              <img
                src={selectedUser.image ? selectedUser.image : defaultUserImage}
                alt={selectedUser.fullName}
                className="w-32 h-32 rounded-full mb-4 mx-auto"
              />
              <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">
                Score: {selectedUser.balance}
              </p>
              <button
                className="bg-[#feac3a] text-white px-4 py-2 rounded-lg"
                onClick={() => setSelectedUser(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal Pencereler - Lider */}
        {selectedLeader && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 w-1/3">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {selectedLeader.fullName}
              </h2>
              <img
                src={shimaCharacter}
                alt={selectedLeader.fullName}
                className="w-32 h-32 rounded-full mb-4 mx-auto"
              />
              <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">
                {selectedLeader.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                {selectedLeader.description}
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">
              Score: {selectedLeader.balance}
              </p>
              <button
                className="bg-[#feac3a] text-white px-4 py-2 rounded-lg"
                onClick={() => setSelectedLeader(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Hareketli Coinler */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none z-10">
          <img
            src={coinTopLeft}
            alt="Coin"
            className="absolute top-[5%] left-[5%] w-[16vw] lg:w-[10vw] object-contain animate-spin-slow"
          />
          <img
            src={coinTopRight}
            alt="Coin"
            className="absolute top-[5%] right-[5%] w-[16vw] lg:w-[10vw] object-contain animate-spin-slow"
          />
          <img
            src={coinBottomLeft}
            alt="Coin"
            className="absolute bottom-[5%] left-[5%] w-[18vw] lg:w-[12vw] object-contain animate-spin-slow"
          />
          <img
            src={coinBottomRight}
            alt="Coin"
            className="absolute bottom-[5%] right-[5%] w-[18vw] lg:w-[12vw] object-contain animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default LeaderShip;
