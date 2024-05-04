const server = process.env.NEXT_PUBLIC_GAMEZOP_API;

export const getAllGames = async (language = "hi") => {
  try {
    let response = await fetch(server + language);
    let data = await response.json();
    console.log("Data fetched from server", response);
    return data;
  } catch (error) {
    console.error("Error fetching data from server", error);
  }
};
