import { useEffect, useState } from "react";
import { fetchTopUsers } from "../services";
import { User } from "../interfaces";

const Leaderboard = () => {
  const [topUsers, setTopUsers] = useState<User[]>([]);

  useEffect(() => {
    const updateTopUsers = async () => {
      const fetchedTopUsers = await fetchTopUsers();
      setTopUsers(fetchedTopUsers);
    };

    // Fetch the top users initially
    updateTopUsers();

    // Fetch the top users every minute
    // const intervalId = setInterval(updateTopUsers, 60000);

    // return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="overflow-x-auto flex flex-col gap-4">
        <h2 className="font-bold text-black">Leaderboard</h2>
        <table className="table bg-white">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Address</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>
            {topUsers.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.address}</td>
                <td>{user.clicks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
}

export default Leaderboard;