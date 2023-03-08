import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import './Homepage.css'
import { Button, ButtonGroup} from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Homepage = () => {

var [moviedata, setmoviedata] = useState([])

useEffect(() => {
  axios.get("/allmovies")
  .then((response) => {
    console.log(response) 
    setmoviedata(
      moviedata = response.data
    )  
  })
  .catch((error) => {
    console.log(error)
  })
  
},[]);

const deletemovie = (id,e) => {
  e.preventDefault();
  axios.delete(`/delete/${id}`)
  .then((response) => {
    alert("Row Deleted");    
  })
  .catch((error) => {
    console.log(error)
  })
  window.location.reload();
}


  return (
    <div className='home'>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Poster</StyledTableCell>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Language</StyledTableCell>
            <StyledTableCell>Director</StyledTableCell>
            <StyledTableCell>Producer</StyledTableCell>
            <StyledTableCell>Cast</StyledTableCell>
            <StyledTableCell>Cinematographer</StyledTableCell>
            <StyledTableCell>Trailer</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        {
        moviedata.map((value,index) => {
          return <StyledTableRow key={index}>

              <StyledTableCell>
                <img src={value.posterLink} alt={`${value.title}-poster`} height="150px" />
                
              </StyledTableCell>

              <StyledTableCell>{value.title} ({value.yearReleased})</StyledTableCell>

              <StyledTableCell>{value.language}</StyledTableCell>

              <StyledTableCell>{value.director}</StyledTableCell>

              <StyledTableCell>{value.producer}</StyledTableCell>

              <StyledTableCell>{value.actors}</StyledTableCell>

              <StyledTableCell>{value.camera}</StyledTableCell>

              <StyledTableCell>
                <Link href={value.trailerLink} target="_blank" style={{textDecoration:"none"}}>
                  <Button variant='contained' color='secondary'>Play</Button>
                </Link>
              </StyledTableCell>

              <StyledTableCell>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color="primary" component={Link} to={`/update/${value._id}`}>Edit</Button>
                <Button color="error" onClick={(e) => deletemovie(value._id,e)}>Delete</Button>
              </ButtonGroup>
              </StyledTableCell>

        
          </StyledTableRow>      
      
          
        })
        }
        
        </TableBody>      
      </Table>
      </TableContainer>
      

      

    </div>
  )
}

export default Homepage
