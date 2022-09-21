import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const { label, type, errors } = props;

  return (
    <div>
      <label htmlFor="text" className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          ref={ref}
          {...props}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {errors.email && (
          <p className="text-[#FF0000]">{errors.email.message}</p>
        )}
      </div>
    </div>
  );
});

export default CustomInput;
