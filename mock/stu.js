import mockjs from 'mockjs';
export default {
  'GET /classes/test': {
    username: '张三丰',
    score: 100,
  },
  'GET /classes/stu': mockjs.mock({
    code: 200,
    msg: '学生数据加载成功',
    data: [
      {
        name: '@name',
        score: '@Integer(50,100)',
        city: '@city',
        time: '@date',
      },
    ],
  }),
};
