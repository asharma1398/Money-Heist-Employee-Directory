import React from 'react';
import "./table.css";
import RobberData from "../RobberData/robberData"

function Table(props) {
    return (
        <table className="table table-striped table-hover table-responsive-s">

            <thead className="tableHead">
                <tr>
                    <th scope="col" onClick={props.sortByAlias}>Alias <span> 🔻</span></th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Age</th>
                    <th scope="col">Royal Mint of Spain</th>
                    <th scope="col">Bank of Spain</th>
                </tr>
            </thead>

            <tbody>
                {props.robbers.map(robber => 
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