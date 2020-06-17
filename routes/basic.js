const express = require('express');
const Academy = require('../controllers/basic/academy');
const Specialty = require('../controllers/basic/specialty');

const router = express.Router();

//学院及部门
router.post('/academy/list', Academy.list); 
router.post('/academy/add', Academy.add); 
router.put('/academy/edit', Academy.edit); 
router.delete('/academy/del/:id', Academy.del); 
router.get('/academy/all', Academy.all); 
//专业信息
router.post('/specialty/list', Specialty.list);
router.post('/specialty/add', Specialty.add);
router.put('/specialty/edit', Specialty.edit);
router.delete('/specialty/del/:id', Specialty.del); 
router.get('/specialty/all/:id', Specialty.all); 

module.exports = router;

