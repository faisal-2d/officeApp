import React from 'react';

const ArabicRow = ({index, exm}) => {
    return (
        <tr className="hover">
            <th>{exm?.name}</th>
            <td>{exm?.Score}</td>            
      </tr>
    );
};

export default ArabicRow;