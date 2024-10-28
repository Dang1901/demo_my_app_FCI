// src/hooks/useAddUser.ts
import { Box, Button, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { updatePost, useFetchApibyId } from "../../../hooks/useCustomHook";
import { useNavigate, useParams } from "react-router-dom";

const EditUserForm = () => {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: post } = useFetchApibyId(id);

  const { mutate: updateMutation } = useMutation({
    mutationFn: updatePost,
    onSuccess: (data) => {
      console.log("update:", data);
      queryClient.invalidateQueries(["post"]);
      navigate("/posts");
    },
    onError: (error) => {
      console.error("Error adding post:", error);
    },
  });

  useEffect(() => {
    if (post) {
      setFormData({ title: post.title, body: post.body });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((postData) => ({ ...postData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMutation({id,...formData});
  };

  return (
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
  );
};

export default EditUserForm;
