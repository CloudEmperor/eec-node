const db = require('../../config/db')

const sql = {
    insert: `INSERT INTO cam_academy(name, code, academy_type, intro) VALUES(?,?,?,?)`,
    update: `UPDATE cam_academy SET name=?, code=?, academy_type=?, intro=? WHERE id=?`,
    delete: `DELETE FROM cam_academy WHERE id=?`,
    queryById: `SELECT * FROM cam_academy WHERE id=?`,
    count:`SELECT count(*) as count from cam_academy`,
    queryAll: `SELECT * FROM cam_academy`
}

class Academy {
    /**
     * 列表带分页和模糊查询
     * */
    list(req, res, next) {
        const { keywords, rows, page } = req.body
        const params = []
        let sqlQuery = sql.queryAll
        if (keywords) {
            sqlQuery += ` WHERE code LIKE ? or name like ?`
            params.push(`%${keywords}%`, `%${keywords}%`)
        }
        sqlQuery += ` limit ?, ?`
        params.push(rows * (page - 1) , rows)
        db.query(sql.count, null, function (err, results) {
            if (err) throw err;
            const count = results[0].count
            db.query(sqlQuery, params, function (err, result) {
                if (err) {
                    res.send({
                        status: 0,
                        state: 'error',
                        message: err,
                        data: []
                    })
                } else {
                    const resData =result.map(item => {
                        return{
                            academyType:item.academy_type,
                            code:item.code, 
                            createDate:item.create_date,
                            creator: item.creator,
                            id: item.id,
                            intro: item.intro,
                            isDeleted: item.is_deleted,
                            modifier: item.modifier,
                            modifyDate: item.modify_date,
                            name: item.name,
                            remarks: item.remarks
                        }
                    })
                    res.send({
                        status: 1,
                        state: 'success',
                        message: '操作成功',
                        total: count,
                        data: resData
                    })
                }
                
            })

        })
    }
    add(req, res, next) {
        const { name, code, academyType, intro } = req.body
        const params =[]
        params.push(name, code, academyType, intro)
        console.log('params', params)
        console.log(sql.insert)
        db.query(sql.insert, params, function (err, result){
            if(err){
                res.send({
                    status: 0,
                    state: 'error',
                    message: err,
                    data: []
                })
            }else{
                res.send({
                    status: 1,
                    state: 'success',
                    message: '操作成功',
                    data: []
                })
            }
           
        })
    }
    edit(req, res, next) {
        const { name, code, academyType, intro, id} = req.body
        const params = []
        params.push(name, code, academyType, intro, id)
        console.log('params', params)
        console.log(sql.update)
        db.query(sql.update, params, function (err, result) {
            if (err) {
                res.send({
                    status: 0,
                    state: 'error',
                    message: err,
                    data: []
                })
            } else {
                res.send({
                    status: 1,
                    state: 'success',
                    message: '操作成功',
                    data: []
                })
            }

        })
    }
    del(req, res, next) {
        console.log(req)
        console.log(req.params.id)
        const id  = req.params.id
        console.log('id', id)
        db.query(sql.delete, id, function (err, result) {
            if (err) {
                res.send({
                    status: 0,
                    state: 'error',
                    message: err,
                    data: []
                })
            } else {
                res.send({
                    status: 1,
                    state: 'success',
                    message: '操作成功',
                    data: []
                })
            }

        })
    }
    all(req, res, next){
        console.log(req.type)
        db.query(sql.queryAll, null, function (err, result){
            if (err) {
                res.send({
                    status: 0,
                    state: 'error',
                    message: err,
                    data: []
                })
            } else {
                const resData = []
                result.forEach(item => {
                    resData.push({
                        name: item.name,
                        id: item.id
                    })
                })
                res.send({
                    status: 1,
                    state: 'success',
                    message: '操作成功',
                    data: resData
                })
            }  
        })
    }

}


module.exports = new Academy();