import { Button,FormControl,FormGroup,styled,TextField,Typography,} from "@mui/material";
import "./Addmovie.css";
import React from "react";
import useForm from "../../components/MovieUseForm";
import axios from 'axios'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 2px auto 0 auto;
`;

const Addmovie = () => {
  var [movies, setmovies] = useForm({
    title: "",
    yearReleased: "",
    director: "",
    language: "",
    producer: "",
    actors: "",
    camera: "",
    posterLink: "",
    trailerLink: "",
  });

var inputmovie = (e) => {
    e.preventDefault();
    console.log(movies)
    axios.post('addmovie', movies)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    
    window.location.reload();
  }

  return (
    <div>
    <form onSubmit={inputmovie}>
      <Container>
        
          <Typography variant="h5" textAlign="center">
            Add Movie
          </Typography>

          <FormControl color="primary">
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.title}
              name="title"
              label="Title"
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.yearReleased}
              name="yearReleased"
              label="Year"
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.director}
              name="director"
              label="Director"
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.language}
              name="language"
              label="Language"
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.producer}
              name="producer"
              label="Producer"
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.actors}
              name="actors"
              label="Actors"
              multiline
              maxRows={5}
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.camera}
              name="camera"
              label="Cinematographer"
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.posterLink}
              name="posterLink"
              label="Poster Link"
            />
            <TextField
              variant="outlined"
              onChange={setmovies}
              value={movies.trailerLink}
              name="trailerLink"
              label="Trailer Link"
            />
          </FormControl>
          <FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: 300, alignSelf: "center", marginTop: 1 }}
            >
              Add Movie
            </Button>
          </FormControl>
        </Container>
        </form>
    </div>
  );
};

export default Addmovie;
