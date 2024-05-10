const server = process.env.NEXT_PUBLIC_GAMEZOP_API;

export const getAllGames = async (language = "en") => {
  try {
    let response = await fetch(server + language, {
      // cors
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      redirect: "follow",
      next: {
        revalidate: 60,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from server", error);
  }
};
