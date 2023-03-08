import {
  Button,
  FormControl,
  FormGroup,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./Editmovie.css";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 2px auto 0 auto;
`;

const Editmovie = () => {
  var [onemovie, setonemovie] = useState("");

  var [updatemovie, setupdatemovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/getmovie/${id}`)
      .then((response) => {
        console.log(response);
        setonemovie((onemovie = response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var updateMovieDetails =(mid,e) => {
    e.preventDefault();    

    setupdatemovie({
      ...updatemovie, [e.target.name]:e.target.value
    })
    
    console.log(updatemovie);
    console.log(id)
    axios.post(`/update/${id}`, { params:{
      title: e.title,
      yearReleased: e.yearReleased,
      director: e.director,
      language: e.language,
      producer: e.producer,
      actors: e.actors,
      camera: e.camera,
      posterLink: e.posterLink,
      trailerLink: e.trailerLink,
    }})
    .then((response) => {
      console.log(response);
      // window.location.reload();
  })
  .catch(error => {
      console.log(error)
  })

   
  }

  const changeHandle = e => {
    setonemovie(e.target.value)    
  }

  return (
    <div className="editmov">
        <Container>
          <Typography variant="h5" textAlign="center">
            Edit Movie Details
          </Typography>
          <FormControl color="primary">
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.title}
              name="title"
              label="Title"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.yearReleased}
              name="yearReleased"
              label="Year"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.director}
              name="director"
              label="Director"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.language}
              name="language"
              label="Language"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.producer}
              name="producer"
              label="Producer"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.actors}
              name="actors"
              label="Actors"
              multiline
              maxRows={5}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.camera}
              name="camera"
              label="Cinematographer"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.posterLink}
              name="posterLink"
              label="Poster Link"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              variant="filled"
              onChange={changeHandle}
              value={onemovie.trailerLink}
              name="trailerLink"
              label="Trailer Link"
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
          <FormControl>
            <Button
              onClick={(e)=>updateMovieDetails(onemovie._id,e)}
              variant="contained"
              color="success"
              sx={{ width: 300, alignSelf: "center", marginTop: 1 }}
            >
              Update
            </Button>
          </FormControl>
        </Container>
    </div>
  );
};

export default Editmovie;
