

const thConverter = (digit) => {

    if(digit == 1 || digit ==  5 || digit ==  7 || digit ==  8 || digit ==  9 || digit ==  10)
              return "ম";
              else if(digit == 2 || digit ==  3)
              return "য়";
              else if(digit == 4 )
              return "র্থ";
              else if(digit == 6 )
              return "ষ্ঠ";
              else return "তম";    
};

export default thConverter;