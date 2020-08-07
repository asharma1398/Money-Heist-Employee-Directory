import React from 'react';
import "./robberData.css";

function RobberData(props) {
    return (
        <tr>
            <td>{props.alias}</td>
            <td>{props.name}</td>
            <td>{props.status}</td>
            <td>{props.age}</td>
            <td>{props.mint}</td>
            <td>{props.bank}</td>
        </tr>
    )
}

export default RobberData;