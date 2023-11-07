import React from 'react';
import TafseerBarchart from './TafseerBarchart';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TafseerLevelComponents = ({batch, data, level, gender, sn}) => {
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
            <div className="divider text-4xl text-slate-500 my-20">লেভেল {b} </div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>            

           {/* <GroupLinks
           batch={batch}
           level={level}
           gender={gender}
           ></GroupLinks> */}


            <div className={`p-5 rounded bg-gradient-to-tl from-green-300`}>
            <p className='text-xl'>Batch: {batch}</p>
            <p className='text-xl'>Course: Tafseer Level {level} </p>
            
            <br />
                <div className="text-center mb-8">
                    <Link className="py-3 px-5 rounded bg-green-300" to={'/leaderboard'+level+'-tafseer-'+batch+'/'+sn}> <FontAwesomeIcon icon="fa-solid fa-trophy" /> Leaderboard</Link>
                </div>
            </div>

          
            <TafseerBarchart
              data={data}                
            ></TafseerBarchart>  
           
            </div>

           <p className="text-2xl mt-12 mb-5">আপনার লেভেল {b} এর পরীক্ষার রেজাল্টসমূহ</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data.map((exm, index) => <div key={index} className={`text-right p-2 pb-5 rounded  ${ exm.Score >= 50 ? 'bg-green-200' : exm.Score > 0 ? 'bg-red-200' : ' bg-slate-200'}`}>
                    <FontAwesomeIcon className="text-sm opacity-30" icon="fa-solid fa-circle" />
                    {level === 2 ?<FontAwesomeIcon className="ml-1 text-sm opacity-30" icon="fa-solid fa-circle" /> : ""}                     <div className=' text-center p-2'>
                     <p className='text-2xl'>{exm.name}</p>
                     {/* {batch==currentLevel2 && level2ExmDates(index) } */}
                     <p className='text-5xl'>{exm.Score}</p>
                     </div>
                 </div>
                    )
                }
                
            </div>


            </section>
    );
};

export default TafseerLevelComponents;