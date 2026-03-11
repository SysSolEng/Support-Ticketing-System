import React from "react";
import "./Dashboard.css";
import TicketTable from "./TicketTable";

import tickets from "./dummy-tickets.json";

function Dashboard(){
    return(
        <div>
            <div className="add-ticket-button">
                <button className="btn btn-dark">Add New Ticket</button>
            </div>
            <h6 className="dashboard-total-tickets">Total tickets: 50</h6>
            <h6 className="dashboard-pending-tickets">Pending tickets: 50</h6>
            <hr className="divider-line"></hr>
            <h6 className="recently-added-tickets-heading">Recently added tickets:</h6>

            <TicketTable tickets={tickets}/>
    
        </div>
    );

}

export default Dashboard;