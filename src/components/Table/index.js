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


const Table = (props) => {

  return (
    <TableContainerStyled component={Paper}>
        <TableBase aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id </TableCell>
              {props.rows.length > 0 && props.rows[0] && props.rows[0].id_original && <TableCell align="center">Id Original</TableCell>}
              <TableCell align="center">Titlu</TableCell>
              <TableCell align="center">Stare</TableCell>
              <TableCell align="center">Pret</TableCell>
              {props.rows.length > 0 && props.rows[0] && props.rows[0].start_time && <TableCell align="center">Start time</TableCell>}
              {props.rows.length > 0 && props.rows[0] && props.rows[0].end_time && <TableCell align="center">End time</TableCell>}
              <TableCell align="center">Perioada</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                {row.id_original && <TableCell align="center">{row.id_original}</TableCell>}
                <TableCell align="center">{row.titlu}</TableCell>
                <TableCell align="center">{row.stare}</TableCell>
                <TableCell align="center">{row.pret}</TableCell>
                {row.start_time && <TableCell align="center">{row.start_time}</TableCell>}
                {row.end_time && <TableCell align="center">{row.end_time}</TableCell>}
                <TableCell align="center">{row.perioada}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableBase>
      </TableContainerStyled>
    );
}

export default Table;
