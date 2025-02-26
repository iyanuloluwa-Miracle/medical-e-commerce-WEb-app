const styles = {
  custom_container: "w-11/12 hidden sm:block",
  heading: 'text-[30px] text-center text-[#000000] md:text-start font-[700] font-Roboto pb-[20px]',
  section:'w-11/12 mx-auto',

  '@media (max-width: 768px)': {
  section: 'hidden',
  },
  productTitle: 'text-[25px] font-[600] font-Roboto text-[#fff]',
  productDiscountPrice:"font-bold text-[18px] text-[#fff] font-Roboto",
  price:"font-[500] text-[16px] text-[#fff] pl-3 mt-[-4px] line-through",
  shop_name:"pt-3 text-[15px] text-blue-400 pb-3",
  active_indicator:"absolute bottom-[-27%] left-0 h-[3px] w-full bg-[#E6007E]",
  button: '800:w-[100px] w-[120px] hover:bg-[#c79bb5] bg-[#0000FF] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer',
  cart_button: "px-[20px] h-[38px] rounded-[20px] bg-[#0000FF] flex items-center justify-center cursor-pointer",
  cart_button_text:"text-[#fff] text-[16px] font-[600]",
  input:"w-full border p-1 rounded-[5px]",
  activeStatus:"w-[10px] h-[10px] rounded-full absolute top-0 right-1 bg-[#0000FF]",
  noramlFlex:"flex items-center"
};


export default styles;