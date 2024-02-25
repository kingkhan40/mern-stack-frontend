import React, { useState } from 'react';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      }
      else {
        alert(responseData.errors)
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  }

  const signup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      }
      else {
        alert(responseData.errors)
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  }

  return (
    <>
      <div className="my-10 h-auto border-md mx-auto">
        <div className="flex-1">
          <div className="flex flex-wrap justify-center">
            <div className="w-full py-3 bg-gray-50 shadow-md lg:py-2 lg:w-1/3 dark:bg-gray-900">
              <div className="max-w-md mx-auto">
                <div className="px-4 my-7">
                  <h2 className="mb-3 text-2xl py-6 font-bold text-start text-gray-800 dark:text-gray-400">
                    {state}
                  </h2>
                  <form action="" className="space-y-4">
                    <div className="mb-4 my-8">
                      {state === "Sign Up" ? <input
                        type="text"
                        name='username' value={formData.username} onChange={changeHandler}
                        className="w-full py-4 rounded-lg outline-none px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="Your email"
                        required
                      /> : <></>}
                    </div>
                    <div className="relative flex items-center my-8 mb-4">
                      <input
                        type="text"
                        name='email' value={formData.email} onChange={changeHandler}
                        className="w-full py-4 rounded-lg outline-none px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="relative flex items-center my-8 mb-4">
                      <input
                        type="password"
                        name='password' value={formData.password} onChange={changeHandler}
                        className="w-full py-4 rounded-lg outline-none px-7 dark:text-gray-300 dark:bg-gray-800"
                        placeholder="Repeat password"
                        required
                      />
                    </div>
                    <button onClick={(e) => { state === "Login" ? login(e) : signup(e) }}
                      className="w-full py-4 mb-4 my-8 font-semibold text-gray-200 bg-red-600 rounded-lg px-7 dark:text-gray-300 dark:bg-green-600 hover:text-blue-200"
                    >
                      Continue
                    </button>
                    {state === "Sign Up" ? <p className="text-md text-gray-700 dark:text-gray-400">
                      Already have an account?
                      <a
                        onClick={() => { setState("Login") }}
                        className="ml-1 text-md cursor-pointer font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                      >
                        Login
                      </a>
                    </p> :

                      <p className="text-md text-gray-700 dark:text-gray-400">
                        Create an account?
                        <a
                          onClick={() => { setState("Sign Up") }}
                          className="ml-1 text-md cursor-pointer font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                        >
                          Sign Up
                        </a>
                      </p>
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
