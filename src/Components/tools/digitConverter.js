
const digitConverter = (en_digit) => {

        const engD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const bangD = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      
          const str = en_digit.toString();
          let bangDigit = '';
          
          for(let i=0; i<str.length; i++){
            for(let j=0; j<engD.length; j++){
              if(str[i]==engD[j]){
                bangDigit+=bangD[j];
              }
            }           
        }
        return bangDigit;      
};

export default digitConverter;