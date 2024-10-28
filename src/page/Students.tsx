import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { apiUrl } from '../api/api'
import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { IStudent } from '../shared/interface/student'
import { useCustomQuery } from '../hooks/useCustomQuery'

const Students = () => {
    
    const {data, isLoading} = useCustomQuery("students", apiUrl)
    // const {data = [], isLoading, error} = useQuery<IStudent[]>({
    //     queryKey: ['student'],
    //     queryFn: getStudents   
    //   })
    //   console.log(data);

      if (isLoading) {
        return <CircularProgress />; // Hiển thị vòng tròn tải khi đang lấy dữ liệu
      }
    
      // if (error) {
      //   return <Typography color="error">Error loading students: {error.message}</Typography>; // Hiển thị thông báo lỗi
      // }
    
    //   // Kiểm tra nếu data không phải là mảng
    //   if (!Array.isArray(data)) {
    //     return <Typography color="error">Unexpected data format</Typography>; // Thông báo nếu định dạng dữ liệu không đúng
    //   }
  return (
    <>
        <TableContainer component={Paper}>
      <Table aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {data.map((student: IStudent) => (
            <TableRow key={student.id}>
            <TableCell>{student.id}</TableCell>
            <TableCell>{student.first_name}</TableCell>
            <TableCell>{student.last_name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.gender}</TableCell>
            <TableCell>{student.country}</TableCell>
            <TableCell>
              <img src={student.avatar} alt="" />
              </TableCell>
            <TableCell>{student.btc_address}</TableCell>
          </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Students 