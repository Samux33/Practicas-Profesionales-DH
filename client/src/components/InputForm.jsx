const InputForm = ({ type, placeholder, name, onBlur, onFocus, error }) => {
  return (
    <div className="content-center w-full flex flex-col items-center">
      <div className="relative h-6 leading-6 flex items-center w-full justify-center">
        <input
          type={type}
          required
          autoComplete="true"
          name={name}
          className="outline-none absolute px-3 leading-6 rounded-lg border-gray-700 bg-transparent inputForm max-w-80 w-full"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div className="absolute px-2 mx-4 bg-gray-100 duration-200 labelline">
          {placeholder}
        </div>
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default InputForm;
