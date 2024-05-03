const server = process.env.GAMEZOP_API + "camp/" || "";

export const getCamp = async (language = "en") => {
  try {
    let response = await fetch(server + language, {
      credentials: "include",
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from server", error);
  }
};
