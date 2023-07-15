const Button = ({ style }: any) => {
  return (
    <button
      className={`${style} py-4 px-6 bg-blue-gradient font-poppins font-medium tex-[18px] text-primary outline-none rounded-[10px]`}
    >
      Get Started
    </button>
  );
};

export default Button;
