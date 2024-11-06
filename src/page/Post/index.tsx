import {
  Alert,
  Button,
  ButtonGroup,
  CardContent,
  Dialog,
  DialogContent,
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
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useFetchData,
  useFetchDataById,
  useRemoveData,
} from "../../hooks/useCustomHook";
import { IPost } from "../../shared/interface/post";

const ListPost = () => {
  const navigate = useNavigate();
  const { data: posts = [], isLoading, isError, error } = useFetchData("posts"); // fetch api posts
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState('');
  const { data: dialogOpenData, isPending } = useFetchDataById(
    "posts",
    selectedId || ""
  );
  const [page, setPage] = useState(0); // số trang hiện tại là 0
  const [rowsPerPage, setRowsPerPage] = useState(5); // số hàng trên một trang là 5

  const { mutate: remove } = useRemoveData("posts"); // goi hook remove

  const handleRemove = (id: string | number) => {
    const confirmRemove = window.confirm("Are you sure?"); // hien confirm thong bao trc khi xoa
    if (confirmRemove) {
      remove(id, {
        onSuccess: () => {
          setSnackBarOpen(true);
        },
        onError: (error) => {
          console.log("Error", error);
        },
      });
    }
  };

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };

  const handlePageChange = (event: unknown, newPage: number) =>
    setPage(newPage);

  const handleRowPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10)); // Fixed typo from `rowParPage`
    setPage(0);
  };

  const handleDialogopen = (id: string) => {
    setSelectedId(id);
  };

  const handleDiaLogCloce = () => {
    setSelectedId('');
  };

  const isOpen = useMemo(() => Boolean(selectedId) ,[selectedId])

// useEffect(() => {
//   console.log({page})
// },[])

const cache = useCallback(() =>{
   console.log(page);
},[ ])

console.log(cache);




  // nếu posts là null | undefined trả về mảng rỗng, slice xuất một phần của mảng theo logic
  const paginatedPosts = (posts ?? []).slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  ); // Fixed typo from `rowParPage`

  if (isLoading) {
    return <Typography color="error">Loading...</Typography>;
  }

  if (isError) {
    return (
      <Typography color="error">
        Error loading posts: {error.message}
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
        Add
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
                    <Button onClick={() => handleDialogopen(post.id.toString())}>
                      Detail
                    </Button>
                    <Button onClick={() => navigate(`/posts/edit/${post.id}`)}>
                      Edit
                    </Button>
                    <Button onClick={() => handleRemove(post.id)}>
                      Remove
                    </Button>
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
          rowsPerPage={rowsPerPage}
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
        <Alert
          onClose={handleSnackBarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Xóa thành công!
        </Alert>
      </Snackbar>

      <Dialog open={isOpen} keepMounted onClose={handleDiaLogCloce}>
        <DialogContent>
          {isPending ? (
            <Typography>Loading...</Typography>
          ) : (
            dialogOpenData && (
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Title: {dialogOpenData.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Body: {dialogOpenData.body}
                </Typography>
              </CardContent>
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ListPost;
