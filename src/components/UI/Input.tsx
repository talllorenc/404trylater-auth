interface IInputProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    icon?: React.ReactNode;
  }
  
  const Input = ({ id, label, type = "text", placeholder, icon }: IInputProps) => {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
        <div className="relative flex items-center">
          {icon && <div className="absolute left-3 flex items-center text-neutral-200">{icon}</div>}
          <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            className="w-full py-1 pl-10 pr-4 border border-neutral-200 rounded-lg appearance-none focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    );
  };
  
  export default Input;
  