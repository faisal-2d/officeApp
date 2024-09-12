

const thConverter = (digit) => {
    if(!digit)
        return "";

    switch(digit) {        
        case 1:  case 5: case 7: case 8: case 9: case 10:
          return "ম";
        case 2: case 3:
          return "য়";
        case 4:
          return "র্থ";
        case 6:
          return "ষ্ঠ";
        default:
          return "তম";
      }
         
};

export default thConverter;