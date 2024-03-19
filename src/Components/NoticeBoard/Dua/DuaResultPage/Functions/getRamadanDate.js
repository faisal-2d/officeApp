import React from 'react';
import getToday from '../../../../tools/getToday';

const getRamadanDate =  () => {
    const today = getToday();

    switch(today) {
        case "2024-03-12": return 1;
        case "2024-03-13": return 2;
        case "2024-03-14": return 3;
        case "2024-03-15": return 4;
        case "2024-03-16": return 5;
        case "2024-03-17": return 6;
        case "2024-03-18": return 7;
        case "2024-03-19": return 8;
        case "2024-03-20": return 9;
        case "2024-03-21": return 10;
        case "2024-03-22": return 11;
        case "2024-03-23": return 12;
        case "2024-03-24": return 13;
        case "2024-03-25": return 14;
        case "2024-03-26": return 15;
        case "2024-03-27": return 16;
        case "2024-03-28": return 17;
        case "2024-03-29": return 18;
        case "2024-03-30": return 19;
        case "2024-03-31": return 20;
        case "2024-04-01": return 21;
        case "2024-04-02": return 22;
        case "2024-04-03": return 23;
        case "2024-04-04": return 24;
        case "2024-04-05": return 25;
        default: return 0;
    }
    
};

export default getRamadanDate;