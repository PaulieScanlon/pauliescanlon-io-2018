const octokit = require("@octokit/rest")();

interface IGhostProps {
  endPoint: string;
  params?: {
    limit?: string;
    include?: string;
    filter?: string;
    order?: string;
  };
}

interface IGitProps {
  endPoint: string;
  method: string;
  params?: {
    username?: string;
    per_page?: number;
    page?: number;
    client_id: string;
    client_secret: string;
  };
}

export const fetchType = {
  //these are the fetchMethod: method
  users: (query: string) => {
    return ghostFetch({
      endPoint: `users/${query}`
    });
  },

  posts: () => {
    return ghostFetch({
      endPoint: "posts",
      params: { include: "tags" }
    });
  },

  singlePost: (query: string) => {
    return ghostFetch({
      endPoint: `posts/${query}`,
      params: { include: "tags" }
    });
  },

  tags: () => {
    return ghostFetch({
      endPoint: "tags",
      params: { limit: "all", include: "count.posts", order: "asc" }
    });
  },

  // sections: () => {
  //   return ghostFetch({
  //     endPoint: 'posts',
  //     params: {
  //       filter: 'page:true',
  //       order: 'title dsc'
  //     }
  //   });
  // }

  gitHubActivity: () => {
    return gitFetch({
      endPoint: "activity",
      method: "getEventsForUserPublic",
      params: {
        username: "pauliescanlon",
        per_page: 30,
        page: 1,
        client_id: `${process.env.GITHUB_CLIENT_ID}`,
        client_secret: `${process.env.GITHUB_SECRET}`
      }
    });
  }
};

// https://api.ghost.org/docs/posts
const ghostFetch = ({ endPoint, params }: IGhostProps) => {
  return fetch(
    (window as any)["ghost"].url.api(`${endPoint}`, {
      ...params
    })
  )
    .then(res => res.json())
    .then(data => {
      return {
        isLoading: false,
        data,
        hasErrored: false
      };
    })
    .catch(() => {
      return {
        isLoading: false,
        data: null,
        hasErrored: true
      };
    });
};

// https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy'
// https://octokit.github.io/rest.js/
const gitFetch = ({ endPoint, method, params }: IGitProps) => {
  return octokit[endPoint][method]({
    ...params
  })
    .then(({ data }: any) => {
      return {
        isLoading: false,
        data,
        hasErrored: false
      };
    })
    .catch(() => {
      return {
        isLoading: false,
        data: null,
        hasErrored: true
      };
    });
};
