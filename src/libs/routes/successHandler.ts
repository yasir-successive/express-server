export default function successHandler(message: string,status:any, data: any) {
  return { name: message,status:status, data: data };
}
