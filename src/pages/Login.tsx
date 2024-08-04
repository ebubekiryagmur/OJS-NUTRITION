import { useState } from 'react';
import InfoBar from '../components/home/InfoBar';

const Login = () => {
  const [login, setLogin] = useState<boolean>(true);
  const [register, setRegister] = useState<boolean>(false);

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
  };

  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  return (
    <>
    <InfoBar />
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-around mb-6">
          <button
            onClick={handleLogin}
            className={`px-4 py-2 rounded ${login ? ' text-black hover:text-blue-500' : 'hover:text-blue-500 bg-gray-200 text-gray-700'}`}
          >
            Giriş Yap
          </button>
          <button
            onClick={handleRegister}
            className={`px-4 py-2 rounded ${register ? ' text-black hover:text-blue-500' : 'hover:text-blue-500 bg-gray-200 text-gray-700'}`}
          >
            Kayıt Ol
          </button>
        </div>
        <div>
          {login ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700">*E-Posta</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">*Şifre</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="flex justify-end mb-4">
                <a href="#" className="text-sm text-blue-500 hover:underline">Şifremi Unuttum?</a>
              </div>
              <button className="w-full px-4 py-2 text-white bg-black">
                GİRİŞ YAP
              </button>
            </div>
          ) : register ? (
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="mb-4">
                  <label className="block text-gray-700">Ad</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Soyad</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">E-Posta</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Şifre</label>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <button className="w-full px-4 py-2 text-white bg-black">
                ÜYE OL
              </button>
              <div className="flex justify-center mt-4">
                <a href="#" className="text-sm text-blue-500 hover:underline">Zaten hesabınız var mı? Giriş Yap</a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
