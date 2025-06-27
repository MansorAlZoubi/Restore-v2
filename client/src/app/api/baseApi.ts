import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";

// تصحيح الرابط
const customBaseQuery = fetchBaseQuery({
  baseUrl: 'https://localhost:5001/api',
});

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
    const { status, data } = result.error;
    console.log("API Error:", { status, data });
    // هنا ممكن تضيف showToast أو redirect مثلاً حسب الخطأ
  }

  return result; 
};


