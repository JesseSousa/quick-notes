const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="mb-4">
      <label className="block">{label}</label>
      <input
        {...otherProps}
        className="bg-stone-200 outline-none px-2 py-1 border-2 border-stone-300 focus:shadow-inner focus:border-teal-600 rounded"
      />
    </div>
  );
};

export default FormInput;
