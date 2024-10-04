import con from "./connection.js";

export async function inserirCanal(canalOBJ) {
    let comando = `
        insert into tb_canal(nm_canal, nr_canal, bt_aberto)
            values (?,?,?)
    `;

    let registro = await con.query(comando, [canalOBJ.nome, canalOBJ.numero, canalOBJ.aberto]);
    let id = registro[0];
    return id.insertId;
}

export async function verCanais() {
    let comando = `
        select*from tb_canal;
    `;

    let registro = await con.query(comando);
    let id = registro[0];
    return id;
}

export async function deletaCanal(id) {
    let comando = `
        delete from tb_canal where id_canal = ?
    `;

    let registro = await con.query(comando, [id]);
    let x = registro[0];
    return x.affectedRows;
   
}

export async function upCanal(canalOBJ, id) {
    let comando = `
        update tb_canal
                set nm_canal = ?,
                nr_canal = ?,
                bt_aberto = ?
        where id_canal = ?;
    `;

    let registro = await con.query(comando, [canalOBJ.nome, canalOBJ.numero, canalOBJ.aberto, id]);
    let x = registro[0];
    return x.affectedRows;
}