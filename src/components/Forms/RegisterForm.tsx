import Button from "@/components/UI/SubmitButton";
import { FaUser, FaCaretRight, FaEnvelope, FaUnlock, FaLock } from "react-icons/fa";
import Input from "../UI/Input";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input
        id="username"
        label="Username"
        type="text"
        placeholder="username"
        icon={<FaUser />}
      />
      <Input
        id="email"
        label="Email address"
        type="email"
        placeholder="address@gmail.com"
        icon={<FaEnvelope />}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        placeholder="******"
        icon={<FaUnlock />}
      />

      <Input
        id="confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="******"
        icon={<FaLock />}
      />

      <Button
        text="Sign up"
        gradient={["#434343", "#000000"]}
        textColor="white"
        icon={<FaCaretRight />}
      />
    </form>
  );
};

export default RegisterForm;
