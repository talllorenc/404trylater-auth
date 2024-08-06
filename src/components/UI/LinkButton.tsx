import Link from "next/link";

interface ILinkButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

const LinkButton: React.FC<ILinkButtonProps> = ({ href, text, icon }) => {
  return (
    <Link
      href={href}
      className="flex items-center w-full gap-4 p-4 text-neutral-500 hover:bg-neutral-300 transition-all duration-200"
    >
      {icon}
      {text}
    </Link>
  );
};

export default LinkButton;
