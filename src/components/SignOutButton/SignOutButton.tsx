import { FaSignOutAlt } from "react-icons/fa";

const SignOutButton = () => {
  return (
    <button className="flex items-center gap-4 p-4 rounded-b-xl text-red-500 hover:bg-neutral-300 transition-all duration-200">
      <FaSignOutAlt />
      <p>Sign out</p>
    </button>
  );
};

export default SignOutButton;
