import { Person } from "@/models"
import { removeFavorite } from "@/redux/states"
import { AppStore } from "@/redux/store"
import {
  GridRenderCellParams,
  DataGrid,
} from "@mui/x-data-grid"
import { useDispatch, useSelector } from "react-redux"
import RemoveIcon from "@mui/icons-material/Remove"
import { IconButton } from "@mui/material"

export interface FavoriteTableInteface {}

const FavoriteTable: React.FC<
  FavoriteTableInteface
> = () => {
  const pageSize = 5

  const dispatch = useDispatch()
  const stateFavorites = useSelector(
    (store: AppStore) => store.favorites
  )

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person))
  }

  const columns = [
    {
      field: "actions",
      type: "actions",
      headerName: "",
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            onClick={() => handleClick(params.row)}
          >
            <RemoveIcon />
          </IconButton>
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
      rows={stateFavorites}
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
export default FavoriteTable
