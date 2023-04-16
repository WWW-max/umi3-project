import { request } from 'umi';

export const getStuData = () => {
  return request('/classes/stu');
};
