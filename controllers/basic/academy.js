const db = require('../../config/db')

const sql = {
    insert: `INSERT INTO cam_academy(name, code, academy_type, intro) VALUES(?,?,?,?)`,
    update: `UPDATE cam_academy SET name=?, age=? WHERE id=?`,
    delete: `DELETE FROM cam_academy WHERE id=?`,
    queryById: `SELECT * FROM cam_academy WHERE id=?`,
    count:`select count(*) as count from cam_academy`,
    queryAll: `SELECT * FROM cam_academy`
}

class Academy {
    /**
     * 列表带分页和模糊查询
     * */
    list(req, res, next) {
        const { keywords, rows, page } = req.body
        const params = []
        if (keywords) {
            sql.queryAll += ` WHERE code LIKE ? or name like ?`
            content.push(`%${keywords}%`, `%${keywords}%`)
        }
        sql.queryAll += `  limit ?,?`
        params.push(rows * (page - 1) , rows)
        db.query(sql.count, null, function (err, result) {
            if (err) throw err;
            const count = result[0].count
            db.query(sql.queryAll, params, function (err, result) {
                if (err) throw err;
                result.forEach(item =>{
                    item.id = item.id + ''
                    item.createDate = item.create_date 
                    item.modifyDate = item.modify_date
                    item.createDate = item.create_date
                })
                res.send({
                    status: 1,
                    state: 'success',
                    message: '操作成功',
                    total: count,
                    data: result
                })
            })

        })
    }
    add(req, res, next){
        console.log(req.body)
        const { name, code, academyType, intro } = req.body
        const params = [name, code, academyType, intro]
        db.query(sql.insert, params, function (err, result){
            //if (err) throw err;
            res.send({
                status: 1,
                state: 'success',
                message: '操作成功',
                data: []
            })
        })
    }

}


module.exports = new Academy();