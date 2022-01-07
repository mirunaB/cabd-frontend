import * as React from "react";
import { default as TableBase } from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

const TableContainerStyled = styled(TableContainer)`
  padding: ${({ theme }) => theme.spacing(3)}px;
  margin-top: ${({ theme }) => theme.spacing(8)}px;
`;

function createData(id, title, condition, price) {
  return { id, title, condition, price };
}

const rows = [
  createData(1, "title1", "buna", 24),
  createData(2, "title2", "rea", 9),
];

export default function Table() {
  return (
    <TableContainerStyled component={Paper}>
      <TableBase aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book id </TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Condition</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.condition}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableBase>
    </TableContainerStyled>
  );
}
