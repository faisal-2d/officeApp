import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import JsonUpdater from './JsonUpdater';

const SeeratResultUpdater = () => {
    return (        
        <div className='container mx-auto mt-16 mb-20 px-5 min-h-screen'>           

        <JsonUpdater/>         
            
        </div>
        
    );
};

export default SeeratResultUpdater;