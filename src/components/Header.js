import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const userInfo = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-[2]  w-full flex justify-between items-center">
      <img
        className="w-60"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        alt="app-logo"
      />
      {userInfo && (
        <div className="flex flex-row">
          <img
            className="w-10 h-10 rounded-md"
            src={
              userInfo.photoURL
                ? userInfo.photoURL
                : "https://occ-0-1946-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbCL6LUIHvRieXJLEY0Jq6AxJmhEiLpZ-9U42s2-XxOQLeA5D71cQBnph9xdZBQpwi-5SET231ylQqok29OIepgmRzHUEzY.png?r=7ae"
            }
            alt="user-logo"
          />
          <button
            className="mx-2 text-white font-semibold"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
