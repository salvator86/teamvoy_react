import './TableRow.css'

import React from 'react';

const TableRow = ({name, value}) => {

    return (
        <tr>
            <th>{name}</th>
            <th>{value}</th>
        </tr>
    );

};

export default TableRow;
