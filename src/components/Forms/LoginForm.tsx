import Button from "@/components/UI/SubmitButton";
import { FaCaretRight, FaEnvelope, FaUnlock } from "react-icons/fa";
import Input from "../UI/Input";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4">
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

      <Button
        text="Log in"
        gradient={["#434343", "#000000"]}
        textColor="white"
        icon={<FaCaretRight />}
      />
    </form>
  );
};

export default LoginForm;
