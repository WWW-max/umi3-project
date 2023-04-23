export const request = {
  requestInterceptors: [
    // 请求拦截器
    (url, options) => {
      console.log('请求拦截器', url, options);
      return options;
    },
  ],
  responseInterceptors: [
    (response, options) => {
      // 响应拦截器
      console.log('响应拦截器', response, options);
      return response;
    },
  ],
};
