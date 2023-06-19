interface InputProps {
  type?: string;
  name: string;
  labelText: string;
}

export default function Input({ type = "text", name, labelText }: InputProps) {
  return (
    <div className="flex flex-col relative">
      <input
        className="
          px-4 pb-2 pt-6 rounded-md
          bg-accent bg-opacity-30
          focus:outline-none peer
          appearance-none
        "
        type={type}
        id={name}
        name={name}
        placeholder=""
      />
      <label
        className="
          absolute top-1 left-4
          scale-[85%] origin-left
          peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
          peer-focus:scale-[85%] peer-focus:translate-y-0
          transition-transform duration-150
        "
        htmlFor={name}
      >
        {labelText}
      </label>
    </div>
  );
}
