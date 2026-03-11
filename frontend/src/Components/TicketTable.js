import React from "react";

function TicketTable({tickets}){
    return(
        <div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Issue</th>
                        <th scope="col">Status</th>
                        <th scope="col">AssignedTo</th>
                        <th scope="col">Opened Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tickets.length && tickets.map(row=>
                           <tr>
                            <th scope="row">{row.id}</th>
                            <td>{row.issue}</td>
                            <td>{row.status}</td>
                            <td>{row.addedDate}</td>
    
                        </tr>
                        
                        )}
                 </tbody>
                </table>
            </div>
        </div>
    )
}


export default TicketTable;