// src/hooks/useAddUser.ts
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addPost } from "../../../hooks/useCustomHook";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const queryClient = useQueryClient();
  const [snackBarOpen, setSnackBarOpen] = useState(false)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", body: "" });
  const { mutate: createMutation } = useMutation({
    mutationFn: addPost,
    onSuccess: (data) => {
      console.log("success:", data);
      setFormData({ title: "", body: "" });
      navigate("/posts");
      setSnackBarOpen(true)
    },
    onError: (error) => {
      console.error("Error adding post:", error);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((postData) => ({ ...postData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMutation(formData);
    // queryClient.invalidateQueries(["posts"])
  };

  const handleSnackBarClose = () => {
    setSnackBarOpen(false)
  } 

  return (
    <>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", mt: 4 }}
    >
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Body"
        name="body"
        value={formData.body}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Add User
      </Button>
    </Box>

    <Snackbar
        open={snackBarOpen}
        autoHideDuration={3000} // Đóng sau 3 giây
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
          Thêm thành công!
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddUserForm;
