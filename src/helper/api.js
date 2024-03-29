import { homePageData, restrauntPageData } from "./constant";

export const getHomePageData = async () => {
  try {
    const data = await fetch(homePageData);
    const resData = await data.json();
    return resData;
  } catch (err) {
    console.log("Home page api error", err);
    return err;
  }
};

export const getRestrauntPageData = async (restrauntId) => {
  try {
    const data = await fetch(`${restrauntPageData}${restrauntId}`);
    const resData = await data.json();
    return resData;
  } catch (err) {
    console.log("Restraunt page api error", err);
    return err;
  }
};
