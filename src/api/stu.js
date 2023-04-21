import { request } from 'umi';

export const getStuData = () => {
  return request('/classes/stu');
};

export const stuDel = (id) => {
  return request(`/classes/stu?id=${id}`, {
    method: 'DELETE',
  });
};
