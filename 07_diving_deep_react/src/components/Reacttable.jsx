import React, {Component} from 'react';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css"
class Reacttable extends Component {
    render() {
        const data = ()=>{

        }

        const column=[
            {Header:"User ID",accessor:""},
            {Header:"ID",accessor: ""},
            {Header:"Title",accessor:""},
            {Header:"Body",accessor: ""}
        ];

        return (
            <div>
                <Reacttable
                    data={data}
                    columns={column}
                    defaultPageSize={2}
                    pageSizeOptions={[2,4,6,8,10]}


                />
            </div>
        );
    }
}

export default Reacttable;