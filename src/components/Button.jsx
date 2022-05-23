const BUTTON_TYPE_STYLES = {
  google: 'bg-sky-500 text-gray-50',
  default: 'bg-stone-300 text-teal-600',
};

const Button = ({ children, buttonType = 'default', ...otherProps }) => {
  return (
    <button
      className={`${BUTTON_TYPE_STYLES[buttonType]} px-4 py-2 my-2 rounded hover:shadow-lg hover:scale-105 ease-in duration-300`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
