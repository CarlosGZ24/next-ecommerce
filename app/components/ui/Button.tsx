type ButtonProps = {
  children: React.ReactNode;
  isDisabled?: boolean;
};

export default function Button({ children, isDisabled }: ButtonProps) {
  return (
    <button
      className={`flex ${
        isDisabled ? "bg-gray-200" : "bg-black text-white"
      } p-2.5 w-10 border border-slate-300 rounded-lg text-center justify-center items-center`}
    >
      {children}
    </button>
  );
}
