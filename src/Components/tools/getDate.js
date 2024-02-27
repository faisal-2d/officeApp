
const getDate = (date) => {
    const inputDate = new Date(date);

    // Extract year, month, and day components
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(inputDate.getDate()).padStart(2, '0');
  
    // Create the output date string in the desired format
    const outputDateString = `${year}-${month}-${day}`;
  
    return outputDateString;
};

export default getDate;