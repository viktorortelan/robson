import { inserirPrograma, verPrograma, dellPrograma } from "../repository/programaRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post('/botaprograma', async (req, resp) => {
    let programaOBJ = req.body;
    let registro = await inserirPrograma(programaOBJ);

    resp.send({
        novoID:registro
    });
});


endpoint.get('/programas', async (req, resp) => {
    let id = await verPrograma();
    resp.send(id)
})

endpoint.delete('/deletar/programa/:id', async (req, resp) => {
    let id = req.params.id;
    let registro = await dellPrograma(id);
    resp.send()
})

export default endpoint;

