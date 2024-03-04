export const getHomePageData = async () => {
  const swiggi_api = encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5900724&lng=88.41100039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGReq"
  );
  const data = await fetch(`https://corsproxy.org/?${swiggi_api}`);
  const resData = await data.json();
  return resData;
};
