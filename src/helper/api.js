export const getHomePageData = async () => {
  try {
    const data = await fetch(
      `https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const resData = await data.json();
    return resData;
  } catch (err) {
    console.log("Home page api error", err);
    return err;
  }
};
