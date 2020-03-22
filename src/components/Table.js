import MaterialTable from "material-table"
import React from "react"

const Table = ({ data }) => {
  const arr = data.map(({ node }) => {
    return {
      no: node.no,
      company: node.company,
      status: node.status,
    }
  })

  const statusRenderer = rowData => {
    if (rowData.status === 1) {
      return (
        <span
          style={{
            backgroundColor: "#87ff87",
            padding: "5px 10px",
            borderRadius: "6px",
          }}
        >
          WFH
        </span>
      )
    } else if (rowData.status === 2) {
      return (
        <span
          style={{
            backgroundColor: "#ffd486",
            padding: "5px 10px",
            borderRadius: "6px",
          }}
        >
          Rotation
        </span>
      )
    } else return <span>unknown</span>
  }

  const columns = [
    {
      field: "no",
      title: "No",
      hidden: true,
    },
    {
      field: "company",
      title: "Company",
      sort: true,
    },
    {
      field: "status",
      title: "Status",
      sort: true,
      defaultSort: "asc",
      render: statusRenderer,
    },
  ]
  return (
    <div
      style={{
        margin: `20px auto`
      }}
    >
      <MaterialTable
        columns={columns}
        data={arr}
        options={{
          toolbar: false,
          search: false,
          sorting: true,
          pageSize: 10,
        }}
      />
    </div>
  )
}

export default Table
