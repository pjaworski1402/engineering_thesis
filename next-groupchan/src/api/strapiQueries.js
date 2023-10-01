import axios from "axios";
import qs from "qs";

export async function getUser(jwtToken) {
  try {
    const params = () =>
      qs.stringify({
        populate: {
          profile: {
            populate: "*",
          },
          groups: {
            populate: "*",
          },
          group_mod: {
            populate: "*",
          },
          group_users: {
            populate: "*",
          },
        },
      });
    const response = await axios.get(
      `http://localhost:1337/api/users/me?` + params(),
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Błąd pobierania danych użytkownika");
    }
  } catch (error) {
    throw error;
  }
}

export async function getPublicGroups(jwtToken) {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/groups?populate=*",
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Błąd pobierania danych grup");
    }
  } catch (error) {
    throw error;
  }
}

export async function getPostsAndGroup(jwtToken, groupName) {
  try {
    const params = () =>
    qs.stringify({
      populate: {
        icon: {
          populate: "*",
        },
        posts: {
          populate: {
            user: {
              populate: {
                profile: "*",
              },
            },
            like: "*",
            image: "*",
            comments: "*",
          },
        },
      },
    });
    const response = await axios.get(
      `http://localhost:1337/api/groups?filters[name][$eq]=${groupName}&` +
        params(),
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Błąd pobierania danych grup");
    }
  } catch (error) {
    throw error;
  }
}
