import { inserirCanal, verCanais, deletaCanal, upCanal } from "../repository/canalRepository.js";
import { Router }  from 'express';

const endpoint = Router();

endpoint.post('/inserirCanal', async (req, resp) => {
    let canalOBJ = req.body;
    let registro = await inserirCanal(canalOBJ);
    resp.send({
        novoID: registro
    });
});

endpoint.get('/canais', async (req, resp) => {
    let canal = await verCanais()
    resp.send(canal);
})

endpoint.delete('/deleta/:id', async (req, resp) => {
    let id = req.params.id;
    let registro = await deletaCanal(id);
    resp.send()
})

endpoint.put('/upCanal/:id', async (req, resp) => {
    let canalOBJ = req.body;
    let id = req.params.id;
    
    let registro = await upCanal(canalOBJ, id);
    resp.send()
})


export default endpoint;