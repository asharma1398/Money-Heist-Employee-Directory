import React from 'react';
import "./table.css";
import RobberData from "../RobberData/robberData"
import robberArr from "../../robbers.json";

function Table(props) {
    return (
        <table>

            <thead>
                <tr>
                    <th scope="col">Alias</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Age</th>
                    <th scope="col">Royal Mint of Spain</th>
                    <th scope="col">Bank of Spain</th>
                </tr>
            </thead>

            <tbody>
                {robberArr.map(robber => 
                    <RobberData 
                        id = {robber.id}
                        alias={robber.alias}
                        name={robber.name}
                        status={robber.status}
                        age={robber.age}
                        mint={robber.mint}
                        bank={robber.bank}/>)}
            </tbody>

        </table>
    )
}

export default Table;