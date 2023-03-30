import React from "react"
function ArrayObjectTableDemo(){
    const items=[
        {'sid':'101', 'Name':'Rani', 'Course':'AID'},
        {'sid':'102', 'Name':'Vani', 'Course':'CSE'},
        {'sid':'103', 'Name':'Mani', 'Course':'CSM'}
    ];
    return(
        <div>
            <h1>Array of Objects-Table View-Demo</h1>
            <table border="4" cellPadding="10px">
                {
                    items.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.sid}</td>
                            <td>{item.Name}</td>
                            <td>{item.Course}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default ArrayObjectTableDemo;