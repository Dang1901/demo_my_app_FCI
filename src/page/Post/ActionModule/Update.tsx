/* eslint-disable react-refresh/only-export-components */
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { reduxForm, Field, InjectedFormProps, initialize } from "redux-form";
import { useUpdateData, useFetchDataById } from "../../../hooks/useCustomHook";

interface FormData {
  title: string;
  body: string;
}

const validate = (values: FormData) => {
  const errors: Partial<FormData> = {};
  if (!values.title) {
    errors.title = "Title is required";
  }
  if (!values.body) {
    errors.body = "Body is required";
  }
  return errors;
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    error={touched && Boolean(error)}
    helperText={touched && error}
    {...input} // Đảm bảo `input` được truyền đúng cách
    {...custom}
  />
);

const EditUserForm: React.FC<InjectedFormProps<FormData>> = ({
  handleSubmit,
  initialize, // lay ham initialize tu props 
}) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: post } = useFetchDataById("posts", id);

  const { mutate: updateMutation } = useUpdateData("posts");

  useEffect(() => {
    if (post) {
      initialize({ title: post.title, body: post.body });
    }
  }, [post, initialize]);

  const onSubmit = (values: FormData) => {
    updateMutation({ id, data: values }, {
      onSuccess: () => {
        console.log("Update successful");
        setSnackBarOpen(true);
        navigate("/posts");
      },
      onError: (error) => {
        console.error("Error updating post:", error);
      },
    });
  };

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ maxWidth: 400, mx: "auto", mt: 4 }}
      >
        <Field
          name="title"
          component={renderTextField}
          label="Title"
          fullWidth
          margin="normal"
        />
        <Field
          name="body"
          component={renderTextField}
          label="Body"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Update User
        </Button>
      </Box>

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
          Cập nhật thành công!
        </Alert>
      </Snackbar>
    </>
  );
};

// Gắn `reduxForm` vào component
// eslint-disable-next-line react-refresh/only-export-components
export default reduxForm<FormData>({
  form: "editUserForm",
  validate,
})(EditUserForm);
