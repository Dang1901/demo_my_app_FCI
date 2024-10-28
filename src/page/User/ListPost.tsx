import {
  Alert,
  Button,
  ButtonGroup,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removePost, useFetchApi } from "../../hooks/useCustomHook";
import { IPost } from "../../shared/interface/post";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ListPost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: posts,
    isPending,
    isError,
    error,
  } = useFetchApi();
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const [page, setPage ] = useState(0);
  const [rowParPage, setRowParPage] = useState(5)
  // console.log(posts);

  const { mutate: remove } = useMutation({
    mutationFn: removePost,
    onSuccess: (removeId: any) => {
      queryClient.setQueryData(["posts"], (oldPost: IPost[] | undefined) =>
        oldPost ? oldPost.filter((post) => post.id !== removeId) : []
      );
      queryClient.invalidateQueries(["posts"]);
      setSnackBarOpen(true)
    },
    onError: (error) => {
      // console.log(error?.message);
      throw error;
    },
  });

  const handleRemove = (id: number) =>{
    const comfirmRemove = window.confirm("Are you sure")
    if(comfirmRemove){
        remove(id)
    }
  }

  const handleSnackBarClose = () => {
    setSnackBarOpen(false)
  } 

  const handlePageChange = (event: unknown, newPage: number) => setPage(newPage)
  const handleRowPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowParPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const paginatedPosts = posts.slice(page * rowParPage, page * rowParPage + rowParPage);


  if (isPending) {
    return <Typography color="error">Loading...</Typography>;
  }

  if (isError) {
    return (
      <Typography color="error">
        Error loading students: {error.message}
      </Typography>
    );
  }
  return (
    <>
      <Button
        href="posts/add"
        variant="contained"
        color="primary"
        sx={{
          m: 2,
        }}
      >
        Add User
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">User Id</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Body</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPosts.map((post: IPost) => (
              <TableRow key={post.id}>
                <TableCell align="center">{post.id}</TableCell>
                <TableCell align="center">{post.userId}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button>Detail</Button>
                    <Button onClick={() => navigate(`/posts/edit/${post.id}`)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleRemove(post.id)}>Remove</Button>
                  </ButtonGroup>
                </TableCell>  
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={posts.length}
          rowsPerPage={rowParPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowPageChange}

        />
      </TableContainer>

      <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000} 
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
          Xóa thành công!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ListPost;
