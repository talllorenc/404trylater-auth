import Button from "@/components/UI/Button";
import { FaCaretRight } from "react-icons/fa";

const LoginForm = () => {
  return (
    <form
    >
      <Button
        text="Log in"
        gradient={['#434343', '#000000']}
        textColor="white"
        icon={<FaCaretRight />}
      />
    </form>
  );
};

export default LoginForm;
