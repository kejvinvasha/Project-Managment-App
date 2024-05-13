import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, id, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label
        htmlFor={id}
        className="text-sm font-bold uppercase text-stone-500"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        {...props}
        className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
      />
    </p>
  );
});

export default Input;
