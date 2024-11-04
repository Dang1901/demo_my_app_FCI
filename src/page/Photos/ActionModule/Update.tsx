/* eslint-disable react-refresh/only-export-components */
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { reduxForm, Field, InjectedFormProps, initialize } from "redux-form";
import { useUpdateData, useFetchDataById } from "../../../hooks/useCustomHook";

interface FormData {
  albumId: string | number;
  id: number;
  title: string;
  url: string;
  thumbnalUrl: string;
  //   imageFile: File | null,
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
    {...input} // Đảm bảo `input` được truyền đúng cách
    {...custom}
  />
);

const EditPhotoForm: React.FC<InjectedFormProps<FormData>> = ({
  handleSubmit,
  initialize, // lay ham initialize tu props
}) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: photo } = useFetchDataById("photos", id);

  const { mutate: updateMutation } = useUpdateData("photos");

    
  useEffect(() => {
    if (photo) {
        // dữ liệu ban đầu được hiển thị trong form
      initialize({
        albumId: photo.albumId,
        title: photo.title,
        url: photo.url,
        thumbnalUrl: photo.thumbnalUrl,
      });
    }
  }, [photo, initialize]); // gọi lại

  const onSubmit = (values: FormData) => {
    updateMutation(
      { id, data: values },
      {
        onSuccess: (data) => {
          console.log("Update successful", data);
          setSnackBarOpen(true);
        },
        onError: (error) => {
          console.error("Error", error);
        },
      }
    );
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
          label="Title"
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
          label="Thumbnail URL"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <ButtonGroup size="large" aria-label="Basic button group">
          <Button type="submit">Update</Button>
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
          Cập nhật thành công!
        </Alert>
      </Snackbar>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default reduxForm<FormData>({
  form: "editUserForm",
  validate,
})(EditPhotoForm);
