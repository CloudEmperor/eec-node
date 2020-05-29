const db = require('../../config/db')

const sql = {
    insert: `INSERT INTO cam_academy(id, name, age) VALUES(?,?,?)`,
    update: `UPDATE cam_academy SET name=?, age=? WHERE id=?`,
    delete: `DELETE FROM cam_academy WHERE id=?`,
    queryById: `SELECT * FROM cam_academy WHERE id=?`,
    count:`select count(*) as count from cam_academy`,
    queryAll: `SELECT * FROM cam_academy`
    //queryAll: (page, rows) => `SELECT * FROM cam_academy limit ${rows * (page - 1)},${rows}`
}

class Academy {
    /**
     * 列表带分页和模糊查询
     * */
    list(req, res, next) {
        console.log(req.body)
        const { keywords, rows, page } = req.body
        let content = []
        if (keywords) {
            sql.queryAll += ` WHERE code LIKE ? or name like ?`
            content.push(`%${keywords}%`, `%${keywords}%`)
        }
        sql.queryAll += `  limit ?,?`
        content.push(rows * (page - 1) , rows)
        db.query(sql.count, null, function (err, result) {
            if (err) throw err;
            const count = result[0].count
            db.query(sql.queryAll, content, function (err, result) {
                if (err) throw err;
                res.send({
                    status: 1,
                    state: 'success',
                    message: '操作成功',
                    total: count,
                    data: result
                })
            });

        });
    };
    add(req, res, next){

    }

}


module.exports = new Academy();