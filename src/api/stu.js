import { Request } from 'umi';

export const getStuData = () => {
  return Request('/classes/stu');
};
