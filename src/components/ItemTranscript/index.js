import * as React from 'react';
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import './main.css'


export default function ItemTranscript({items, limit, titles, properties}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='bg-light'>
            <TableRow >
              {titles.map((title, index)=>(
                <TableCell key={index} align="center">{title}</TableCell>
              ))}
            </TableRow>
        </TableHead>

        <TableBody>
        {items.map((item) => (
            <TableRow>
             {properties.map((property)=>(
                <TableCell align="center">{item[property]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}