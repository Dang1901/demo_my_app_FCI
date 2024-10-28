import { Paper } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { rowsDataTable } from '../../../shared/enums';
import { useQuery } from "@tanstack/react-query";
import { getStudents } from '../../../apis/apiStudent';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Họ', width: 130 },
  { field: 'lastName', headerName: 'Tên', width: 130 },
  {
    field: 'fullName',
    headerName: 'Họ và Tên đầy đủ',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  
  { field: 'birthday', headerName: 'Ngày sinh', width: 130 },   
]
const paginationModel = { page: 0, pageSize: 5 };



export default function DataTable() {
  return (
 
      <Paper sx={{width: '100%', height: 400 }}>
        <DataGrid
            rows={rowsDataTable}
            columns={columns}
            initialState={{pagination: {paginationModel}}}
            pageSizeOptions= {[5, 10]}
            checkboxSelection
            sx={{boder: 0}}
        />
      </Paper>

    
  )
}
