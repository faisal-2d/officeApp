import React from 'react';
import ArabicBarChart from './ArabicBarChart';
import ArabicRow from './ArabicRow';
import SkillMeter from './SkillMeter';

const ArabicLevelComponent = ({skill, data, level}) => {
    const digitConverter = engDigit => {
        const engD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const bangD = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    
          const str = engDigit.toString();
          let bangDigit = '';
          
          for(let i=0; i<str.length; i++){
            for(let j=0; j<engD.length; j++){
              if(str[i]==engD[j]){
                bangDigit+=bangD[j];
              }
            }           
        }
        return bangDigit;
      }    
      const b = digitConverter(level);

    return (
        <section className="my-10">
            <div className="divider text-4xl text-slate-500 my-20">লেভেল {b}</div>
           <div className='md:w-3/4 mx-auto'>           

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 px-14 md:px-5'> 
                {
                    skill.map((data, index) => <SkillMeter
                    key={index}
                    sData={data}
                    color={(data.value > 80 ? "green" : (data.value > 60 ? "orange": "red"))}
                    ></SkillMeter>)
                }
            </div>
            </div>

<div className="overflow-x-auto mx-auto px-4 my-10">
<p className="text-2xl mt-12 mb-5 text-center">লেভেল {b} এর পরীক্ষার রেজাল্টসমূহ</p>

<div className='w-full md:w-3/4 my-10 mx-auto bg-gradient-to-tl from-indigo-200'>
                <ArabicBarChart
                data={data}                
                ></ArabicBarChart>
</div>  

  <table className="table w-full md:w-3/4 text-center mx-auto">
    
    <thead>
      <tr>
        <th>Exm No</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>

      {data.map((exm, index) => <ArabicRow
      key={index}
      exm={exm}
      ></ArabicRow> ) }    

    </tbody>
  </table>
</div>


            </section>
    );
};

export default ArabicLevelComponent;