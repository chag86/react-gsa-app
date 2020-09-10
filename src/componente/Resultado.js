import React from "react";
import { Table } from "react-bootstrap";
import busca from '../mock/multiobjetos.json';


const Resultado = ({ children }) => busca.map((data, index) => {
    return (
        <div key={index}>
            {data.GSP.RES.R.map((r, rindex) =>
                <Table striped bordered hover key={rindex}>
                    <thead>
                        <tr>
                            {r.MT.map((mt, mtindex) =>
                                <td key={mtindex}>{mt.name}</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {r.MT.map((mt, mtindex) =>
                                <td key={mtindex}>{mt.value}</td>
                            )}
                        </tr>
                    </tbody>
                </Table>
            )}
        </div>

    )
});

export default Resultado;