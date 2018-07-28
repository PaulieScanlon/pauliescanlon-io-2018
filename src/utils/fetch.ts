interface IProps {
  endPoint: string;
  params?: {
    include?: string;
    filter?: string;
    order?: string;
  };
}

export const fetchType = {
  //these are the fetchMethod: method
  users: (query: string) => {
    return goFetch({
      endPoint: `users/${query}`
    });
  },

  posts: () => {
    return goFetch({
      endPoint: "posts",
      params: { include: "tags" }
    });
  },

  singlePost: (query: string) => {
    return goFetch({
      endPoint: `posts/${query}`,
      params: { include: "tags" }
    });
  },

  tags: () => {
    return goFetch({
      endPoint: "tags",
      params: { include: "count.posts" }
    });
  }

  // sections: () => {
  //   return goFetch({
  //     endPoint: 'posts',
  //     params: {
  //       filter: 'page:true',
  //       order: 'title dsc'
  //     }
  //   });
  // }
};

const goFetch = ({ endPoint, params }: IProps) => {
  return fetch(
    window["ghost"].url.api(`${endPoint}`, {
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
