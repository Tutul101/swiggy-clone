export const getHomePageData = async () => {
  try {
    const data = await fetch(
      `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D23.022505%26lng%3D72.5713621%26page_type%3DDESKTOP_WEB_LISTING`
    );
    const resData = await data.json();
    return resData;
  } catch (err) {
    console.log("Home page api error", err);
    return err;
  }
};
