const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="mb-4 flex flex-col">
      <label>{label}</label>
      <input
        {...otherProps}
        className={`bg-stone-100 outline-none px-2 py-1 border-b-2  border-stone-300 focus:shadow-inner focus:border-teal-600 rounded ease-in duration-300`}
      />
    </div>
  );
};

export default FormInput;
