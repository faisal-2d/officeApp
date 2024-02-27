import React from 'react';

const CompletionBar = ({completion}) => {
    
    return (
        <section className='my'>
            <div className="divider text-4xl text-slate-500 my-20">{completion}%</div>
            
            <div className='rounded-full bg-green-200 w-full h-12 flex items-center'>
                <div style={{width:`${completion}%`}} className={`mx-2 rounded-full bg-green-500 h-8 grow-left-to-right`}></div>
            </div>

        </section>
    );
};

export default CompletionBar;