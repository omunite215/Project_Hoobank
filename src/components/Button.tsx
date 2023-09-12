interface buttonPropTypes {
  styles: string;
}
const Button = ({ styles }: buttonPropTypes) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] transition-all ease-in-out delay-300 shadow hover:shadow-md hover:shadow-dimWhite`}
    >
      Get Started
    </button>
  );
};

export default Button;
