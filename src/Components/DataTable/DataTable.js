import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import SortIcon from "@material-ui/icons/ArrowDownward";
// import fakeData from "../fakeData/FakeData";
// import "./styles.css";


const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true
    }
  ];
  
  const isIndeterminate = indeterminate => indeterminate;
  const selectableRowsComponentProps = { indeterminate: isIndeterminate };

export function DataTab() {
    const [data,setData]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    return (
        <Card>
        <DataTable
          title="Data Table"
          columns={columns}
          data={data}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
          selectableRowsComponent={Checkbox}
          selectableRowsComponentProps={selectableRowsComponentProps}
        />
      </Card>
    )
}
