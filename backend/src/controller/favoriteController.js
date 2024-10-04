import { programaFavorito } from "../repository/favorite.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post('/salvaFavorito', async (req, resp) => {
    let favoritoOBJ = req.body;

    let id = await programaFavorito(favoritoOBJ);

    resp.send(id)
})


export default endpoint;