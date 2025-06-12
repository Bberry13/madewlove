const formatResponse = (status: number, message: string, data?: any) => ({
  status,
  message,
  ...(data && { data }),
});

export default formatResponse;
