import { Box, TextField, Typography } from "@mui/material";
import { useImmer } from "use-immer";

const Testusestate = () => {
  const [state, setState] = useImmer({
    name: "",
    age: "",
    city: "",
  });

  function handleName(e) {
    setState((draft) => {
      draft.name = e.target.value;
    });
  }
  function handleAge(e) {
    setState((draft) => {
      draft.age = e.target.value;
    });
  }
  function handleCity(e) {
    setState((draft) => {
      draft.city = e.target.value;
    });
  }
  return (
    <>
      <Box sx={{ padding: 3, maxWidth: 400, margin: "0" }}>
        Name:
        <TextField
          value={state.name}
          onChange={handleName}
          variant="outlined"
          size="small"
          sx={{
            marginLeft: 2,
            marginBottom: 2,
            width: "100%",
          }}
        />
        Age:
        <TextField
          value={state.age}
          onChange={handleAge}
          variant="outlined"
          size="small"
          sx={{
            marginLeft: 2,
            marginBottom: 2,
            width: "100%",
          }}
        />
        City:
        <TextField
          value={state.city}
          onChange={handleCity}
          variant="outlined"
          size="small"
          sx={{
            marginLeft: 2,
            marginBottom: 2,
            width: "100%",
          }}
        />
        <Typography variant="body1" sx={{ fontStyle: "italic", marginTop: 2 }}>
          Name: {state.name} <br />
          Age: {state.age} <br />
          City: {state.city}
        </Typography>
      </Box>
      
    </>
  );
};

export default Testusestate;
