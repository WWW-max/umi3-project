import mockjs from 'mockjs';
let dataList = mockjs.mock({
  code: 200,
  msg: '学生数据加载成功',
  data: [
    {
      objectId: '@id',
      name: '@name',
      score: '@Integer(50,100)',
      city: '@city',
      time: '@date',
    },
  ],
});
export default {
  'GET /classes/test': {
    username: '张三丰',
    score: 100,
  },
  'GET /classes/stu': dataList,
  'DELETE /classes/stu': (req, res) => {
    res.send({
      code: 200,
      msg: '删除成功',
    });
  },
};
