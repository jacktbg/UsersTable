export interface HomeInterface {}
import { People } from "@/data"
import { Person } from "@/models"
import { Checkbox } from "@mui/material"
import {
  DataGrid,
  GridRenderCellParams,
} from "@mui/x-data-grid"
import { useState } from "react"

const Home: React.FC<HomeInterface> = () => {
  const pageSize = 5
  const [selectedPeople, setSelectedPeople] = useState<
    Person[]
  >([])

  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id)

  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id)

  const handleChange = (person: Person) => {
    setSelectedPeople(
      findPerson(person)
        ? filterPerson(person)
        : [...selectedPeople, person]
    )
  }

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      flex: 1,
      minWidth: 5,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Checkbox
            size="small"
            checked={findPerson(params.row)}
            onChange={() => handleChange(params.row)}
          />
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>{params.value}</>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>{params.value}</>
      ),
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>{params.value}</>
      ),
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>{params.value}</>
      ),
    },
  ]
  return (
    <DataGrid
      rows={People}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      pageSizeOptions={[pageSize]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
      getRowId={(row: any) => row.id}
    />
  )
}

export default Home
