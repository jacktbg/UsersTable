import { Person } from "@/models"
import { addFavorite } from "@/redux/states"
import { AppStore } from "@/redux/store"
import { Checkbox } from "@mui/material"
import {
  DataGrid,
  GridRenderCellParams,
} from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const pageSize = 5
  const [selectedPeople, setSelectedPeople] = useState<
    Person[]
  >([])
  const dispatch = useDispatch()
  const statePeople = useSelector(
    (store: AppStore) => store.people
  )
  const favoritePeople = useSelector(
    (store: AppStore) => store.favorites
  )

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id)

  const filterPerson = (person: Person) =>
    selectedPeople.filter((p) => p.id !== person.id)

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person]
    dispatch(addFavorite(filteredPeople))
    setSelectedPeople(filteredPeople)
  }

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      minWidth: 50,
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

  useEffect(() => {
    setSelectedPeople(favoritePeople)
  }, [favoritePeople])
  return (
    <DataGrid
      rows={statePeople}
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

export default PeopleTable
