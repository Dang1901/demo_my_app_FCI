/* eslint-disable react-refresh/only-export-components */
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { useCreateData } from "../../../hooks/useCustomHook";

interface FormData {
  albumId: string | number;
  id: number;
  title: string;
  url: string;
  thumbnalUrl: string;
}

const validate = (values: FormData) => {
  const errors: Partial<FormData> = {};
  if (!values.albumId) {
    errors.albumId = "albumId is required";
  }
  if (!values.title) {
    errors.title = "title is required";
  }
  if (!values.url) {
    errors.url = "url is required";
  }
  if (!values.thumbnalUrl) {
    errors.thumbnalUrl = "thumbnalUrl is required";
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

const AddPhotoForm: React.FC<InjectedFormProps<FormData>> = ({
  handleSubmit,
  reset,
}) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const navigate = useNavigate();
  const { mutate: createMutation } = useCreateData("photos");

  const onSubmit = (values: FormData) => {
    createMutation(values, {
      onSuccess: (data) => {
        console.log(data);
        // setTimeout(() => navigate("/photos"), 1000)
        setSnackBarOpen(true);
        reset();
      },
      onError: (error) => {
        console.error("Error", error);
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
          name="albumId"
          component={renderTextField}
          label="Album ID"
          fullWidth
          margin="normal"
        />
        <Field
          name="title"
          component={renderTextField}
          label="title"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Field
          name="url"
          component={renderTextField}
          label="URL"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Field
          name="thumbnalUrl"
          component={renderTextField}
          label="Thumbnal URL"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <ButtonGroup size="large" aria-label="Basic button group">
          <Button type="submit">Add</Button>
          <Button href="/photos">Back</Button>
        </ButtonGroup>
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
  form: "addPhotoForm",
  validate,
})(AddPhotoForm);
