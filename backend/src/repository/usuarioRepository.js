import con from "./connection.js";

export async function inserirUser(usuarioOBJ) {
    let comando = `
        insert into tb_usuario (nm_usuario)
            values(?)
    `;

    let registro = await con.query(comando, [usuarioOBJ.nome]);
    let id = registro[0];
    return id.insertId;
}