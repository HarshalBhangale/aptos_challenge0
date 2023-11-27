import { useEffect, useState } from 'react';
import { Layout, Row, Col, Button, Badge } from 'antd';
import './App.css';

import Leaderboard from './components/LeaderBoard';
import Navbar from './components/Navbar';

import {
  getWalletAddress,
  getMessage, setFnMessage,
  getCount, setFnCount
} from './web3/aptos';

const App = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState<number>();
  const [theme, setTheme] = useState<string>('dark');
  const [message, setMessage] = useState<string>('');

  const handleButtonClick = async () => {
    if(address) {
      // const txn = await setFnMessage(address, "hello world 2");
      const txn = await setFnCount(address);
      console.log(txn)
    }
  };

  const updateCount = async () => {
    if(address) {
      const message = await getCount(address)
      setClickCount(message || '');
    }
  };

  useEffect(() => {
    getWalletAddress().then(async ({ address }: any) => {
      setAddress(address);
    })
  }, []);

  useEffect(() => {
    updateCount();
  }, [address]);

  return (
    <div data-theme={theme}>
      <Navbar setTheme={setTheme} />
      <div className='flex flex-col gap-4 bg-[#f0f2f5] p-10 min-h-screen'>
        <div className='flex flex-col gap-4 items-left'>
          <h2 className='font-bold text-xl'>Global Click Count: {clickCount}</h2>
          <button
            className="btn btn-primary w-1/4"
            onClick={handleButtonClick}
          >
            Click Me
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default App;
