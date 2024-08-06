import Image from "next/image";
import { FaCog } from "react-icons/fa";
import LinkButton from "../UI/LinkButton";
import SignOutButton from "../SignOutButton/SignOutButton";

const UserMenu = () => {
  return (
    <div className="flex flex-col max-w-md text-black overflow-auto rounded-xl shadow-buttonDark text-sm">
      <div className="flex items-center gap-4 bg-white p-4 rounded-t-xl border-b border-neutral-200">
        <Image
          src="/no-user.png"
          alt="User"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col overflow-hidden">
          <p className="truncate font-medium">talllorenc.developer@gmail.com</p>
          <p className="truncate text-gray-500">Tall Lorenc</p>
        </div>
      </div>

      <div className="flex flex-col bg-neutral-100 rounded-b-xl">
        <div className="flex flex-col border-b border-neutral-200">
          <LinkButton
            href="/account"
            text="Account settings"
            icon={<FaCog />}
          />
        </div>

        <SignOutButton />
      </div>
    </div>
  );
};

export default UserMenu;
