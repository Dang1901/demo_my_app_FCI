/* eslint-disable react-refresh/only-export-components */
import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { useCreateData } from "../../../hooks/useCustomHook";


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
    {...input}
    {...custom}
  />
);

const AddPostForm: React.FC<InjectedFormProps<FormData>> = ({
  handleSubmit,
}) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate: createMutation } = useCreateData("posts"); // Use your custom hook here

  const onSubmit = (values: FormData) => {
    createMutation(values, {
      onSuccess: (data) => {
        console.log("Success:", data);
        navigate("/posts");
        setSnackBarOpen(true);
      },
      onError: (error) => {
        console.error("Error adding post:", error);
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
          Add User
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
          Thêm thành công!
        </Alert>
      </Snackbar>
    </>
  );
};

// Gắn `reduxForm` vào component
export default reduxForm<FormData>({
  form: "addPostForm",
  validate,
})(AddPostForm);

