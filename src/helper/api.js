export const getHomePageData = async () => {
  try {
    const data = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5900724&lng=88.41100039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
      `
    );
    const resData = await data.json();
    return resData;
  } catch (err) {
    console.log("Home page api error", err);
    return err;
  }
};
