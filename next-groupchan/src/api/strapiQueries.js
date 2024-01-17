import axios from "axios";
import qs from "qs";

export const apiVars = {
  API_URL: `http://192.168.1.3:1337`,
};

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
      `${apiVars.API_URL}/api/users/me?` + params(),
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
      `${apiVars.API_URL}/api/groups?populate=*`,
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

export async function getPostsAndGroup(jwtToken, groupName, currentPage) {
  const itemsPerPage = 5;
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
              comments: {
                populate: {
                  user: "*",
                },
              },
            },
            sort: "createdAt:DESC",
            start: (currentPage - 1) * itemsPerPage,
            limit: itemsPerPage,
          },
        },
      });
    const response = await axios.get(
      `${apiVars.API_URL}/api/groups?filters[name][$eq]=${groupName}&` +
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

export async function giveLike(jwtToken, postId) {
  const apiURL = `${apiVars.API_URL}/api/`;

  try {
    const response = await axios.put(
      `${apiURL}posts/${postId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    // Sprawdzanie, czy odpowiedź jest sukcesem
    if (response.status === 200) {
      return response;
    } else {
      console.error("Failed to add like");
      return response;
    }
  } catch (error) {
    console.error("An error occurred while giving a like:", error.message);
  }
}

export async function addComment(jwtToken, postId, content) {
  const apiURL = `${apiVars.API_URL}/api/comments`;

  try {
    const response = await axios.post(
      apiURL,
      {
        data: {
          postId: postId,
          content: content,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    // Check if the response is successful
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to add comment");
      return null;
    }
  } catch (error) {
    console.error("An error occurred while adding a comment:", error.message);
    return null;
  }
}

export async function joinGroup(jwtToken, groupId) {
  console.log(groupId)
  const apiURL = `${apiVars.API_URL}/api/groups/${groupId}`;

  try {
    const response = await axios.put(
      apiURL,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("An error occurred while joining the group:", error.message);
    return null;
  }
}
