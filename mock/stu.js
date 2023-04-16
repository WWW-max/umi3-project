import mockjs from 'mockjs';
let dataList = [
  {
    objectId: '@id',
    name: '@name',
    score: '@Integer(50,100)',
    city: '@city',
    time: '@date',
  },
];
export default {
  'GET /classes/test': {
    username: '张三丰',
    score: 100,
  },
  'GET /classes/stu': mockjs.mock({
    code: 200,
    msg: '学生数据加载成功',
    data: dataList,
  }),
};
