import { inserirUser } from "../repository/usuarioRepository.js";
import { Router } from "express";
const endpoint = Router();

endpoint.post('/inserir/user', async (req, resp) => {
    let usuarioOBJ = req.body;
    let id = await inserirUser(usuarioOBJ);
    resp.send({
        novoID: id
    });
});

export default endpoint;