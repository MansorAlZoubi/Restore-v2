import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";
import { router } from "../routes/Routes";

// تصحيح الرابط
const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:5001/api',
});

type ErrorRespons=| string |{title:string}|{errors:string[]};
 
// محاكاة تأخير زمني (اختياري للتجارب)
const sleep = () => new Promise(resolve => setTimeout(resolve, 1000));

// القاعدة الأساسية مع تسجيل الخطأ
export const baseQueryWithErrorHandling: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  api.dispatch(startLoading());
  await sleep(); // يمكنك إزالتها في الإنتاج
  const result = await customBaseQuery(args, api, extraOptions);
  api.dispatch(stopLoading());
  if (result.error) {
    console.log(result.error);
    const orignalStatus=result.error.status==='PARSING_ERROR'&& result.error.originalStatus ?result.error.originalStatus:result.error.status
   const reData=result.error.data as ErrorRespons;

    switch (orignalStatus) {
      case 400:
        if(typeof reData==='string')toast.error(reData)
          else if('errors'in reData)
        {
        throw Object.values(reData.errors).flat().join(',')

        }else toast.error(reData.title);

        
        break;
     case 401:
      if(typeof reData==='object'&& 'title'in reData)
        toast.error(reData.title);
        break;

       case 404:
       if(typeof reData==='object' && 'title' in reData)
       router.navigate('/not-found')
        break;

      case 500:
       if(typeof reData==='object')
        router.navigate('/server-error',{state:{error:reData}})
        break;

      default:
        break;
    }
    // هنا ممكن تضيف showToast أو redirect مثلاً حسب الخطأ
  }

  return result; 
};


 