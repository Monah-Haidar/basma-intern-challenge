import { useState, useContext } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { AppContext } from "../Context/AppContext";

export default function Auth() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useContext(AppContext);
  const [isRegister, setIsRegister] = useState(false);

  const handleLogout = async () => {
    await fetch("api/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });

    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      {token ? (
        <>
          <div
            onClick={() => handleLogout()}
            className="text-md sm:text-xl cursor-pointer font-bold "
          >
            خروج
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => setIsModalOpen(true)}
            className="text-md sm:text-xl cursor-pointer font-bold "
          >
            تسجيل الدخول
          </div>
        </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-40">
          <div
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black opacity-30"
          ></div>
          
          {isRegister ? (
            <RegisterModal setIsModalOpen={setIsModalOpen} setIsRegister={setIsRegister} />
          ) : (
            <LoginModal setIsModalOpen={setIsModalOpen} setIsRegister={setIsRegister} />
          )}
          
        </div>
      )}
    </>
  );
}
