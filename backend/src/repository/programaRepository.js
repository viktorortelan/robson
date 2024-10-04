import con from "./connection.js";


export async function inserirPrograma(programaOBJ) {
    let comando = `
    insert into tb_programa(id_canal, nm_programa, ds_genero, hr_programa)
	        values(?,?,?,?)
    `;

    let registro = await con.query(comando, [programaOBJ.canal, programaOBJ.nome, programaOBJ.genero, programaOBJ.hora]);
    let id = registro[0];
    return id.insertId;
}

export async function verPrograma(){
    let comando = `
    SELECT 
    tb_programa.id_canal_programa,
    tb_programa.nm_programa,
    tb_programa.ds_genero,
    tb_programa.hr_programa,
    tb_canal.nm_canal,
    tb_canal.nr_canal,
    tb_canal.bt_aberto
FROM 
    tb_programa
INNER JOIN 
    tb_canal ON tb_programa.id_canal = tb_canal.id_canal;
    `;

    let registro = await con.query(comando);
    let id = registro[0];
    return id;
}

export async function dellPrograma(id) {
    let comando = ` delete from tb_programa where id_canal_programa = ?`;
    let registro = await con.query(comando, [id])
    let x = registro[0];
    return x.affectedRows;
}