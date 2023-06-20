import React, { useState } from 'react';
import { useRouter } from 'next/router';

function LoginForm() {
  const [userLogin, setUserLogin] = useState({
    userName: '',
    passCode: '',
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignIn = () => {
    if (userLogin.userName === 'admin' && userLogin.passCode === 'clarweah123') {
      setUserLogin({
        userName: '',
        passCode: '',
      });
      router.push('/dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="mt-36 flex justify-center">
      <div className="border border-blue-500 sm:p-8 p-4 mb-36 mt-36 rounded-lg">
        <input
          type="text"
          name="userName"
          required
          placeholder="User Name"
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
          value={userLogin.userName}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="passCode"
          required
          placeholder="Password"
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
          value={userLogin.passCode}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSignIn}
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
