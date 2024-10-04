import con from "./connection.js";

export async function programaFavorito(favoritoOBJ) {
    let comando = `
    insert into tb_programa_favorito(id_usuario, id_canal_programa, vl_avaliacao)
            values(?,?,?)   
    `;

    let registro = await con.query(comando, [favoritoOBJ.nome, favoritoOBJ.programa, favoritoOBJ.nota]);
    let id = registro[0];
    return id.insertId;
}