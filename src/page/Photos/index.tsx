import {
  Alert,
  Button,
  ButtonGroup,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useFetchData,
  useFetchDataById,
  useRemoveData,
} from "../../hooks/useCustomHook";
import { IPhoto } from "../../shared/interface/photo";

const PhotoLists = () => {
  const navigate = useNavigate();
  const { data: photos = [], isLoading, isError, error } = useFetchData("photos");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [dialogOpen, setDiaLogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const { data: dialogOpenData, isPending } = useFetchDataById("photos", selectedId || "");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { mutate: remove } = useRemoveData("photos");

  const handleRemove = () => {
    if (selectedId !== null) {
      remove(selectedId, {
        onSuccess: () => {
          setSnackBarOpen(true);
          setConfirmDialogOpen(false);
        },
        onError: (error) => {
          console.log("Error", error);
        },
      });
    }
  };

  const handleSnackBarClose = () => setSnackBarOpen(false);
  const handlePageChange = (event: unknown, newPage: number) => setPage(newPage);
  const handleRowPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDialogopen = (id: number) => {
    setSelectedId(id);
    setDiaLogOpen(true);
  };

  const handleDiaLogCloce = () => {
    setSelectedId(null);
    setDiaLogOpen(false);
  };

  const handleOpenConfirmDialog = (id: number) => {
    setSelectedId(id);
    setConfirmDialogOpen(true);
  };

  const handleCloseConfirmDialog = () => {
    setSelectedId(null);
    setConfirmDialogOpen(false);
  };

  const paginatedPosts = (photos ?? []).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

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
      <Button href="photos/add" variant="contained" color="primary" sx={{ m: 2 }}>
        Add
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Album ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">URL</TableCell>
              <TableCell align="center">Thumbnail URL</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPosts.map((photo: IPhoto) => (
              <TableRow key={photo.id}>
                <TableCell align="center">{photo.id}</TableCell>
                <TableCell align="center">{photo.albumId}</TableCell>
                <TableCell>{photo.title}</TableCell>
                <TableCell align="center"><img src={photo.url} alt="" width={50} height={100} /></TableCell>
                <TableCell align="center"><img src={photo.thumbnalUrl} alt="" width={50} height={50} /></TableCell>
                <TableCell>
                  <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button onClick={() => handleDialogopen(photo.id)}>Detail</Button>
                    <Button onClick={() => navigate(`/photos/edit/${photo.id}`)}>Edit</Button>
                    <Button onClick={() => handleOpenConfirmDialog(photo.id)}>Remove</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={photos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowPageChange}
        />
      </TableContainer>

      <Snackbar open={snackBarOpen} autoHideDuration={3000} onClose={handleSnackBarClose}>
        
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: "100%" }}>
          Xóa thành công!
        </Alert>
      </Snackbar>

      <Dialog open={confirmDialogOpen} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Confirm</DialogTitle>
        <DialogContent>
          <Typography>Are you sure?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="secondary">Cancel</Button>
          <Button onClick={handleRemove} color="error">Confirm</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={dialogOpen} keepMounted onClose={handleDiaLogCloce}>
        <DialogContent>
          {isPending ? (
            <Typography>Loading...</Typography>
          ) : (
            dialogOpenData && (
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Album ID: {dialogOpenData.albumId}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Title: {dialogOpenData.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  URL: {dialogOpenData.url}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Thumbnail: {dialogOpenData.thumbnalUrl}
                </Typography>
              </CardContent>
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoLists;
