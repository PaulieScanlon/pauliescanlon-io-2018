interface IProps {
  endPoint: string;
  params?: {
    include?: string;
    filter?: string;
    order?: string;
  };
}

export const fetchType = {
  //these are the endPoint 'props' for Fetcher
  users: () => {
    return goFetch({
      endPoint: "users/1"
    });
  },

  posts: () => {
    return goFetch({
      endPoint: "posts",
      params: { include: "tags" }
    });
  },

  thing: () => {
    return goFetch({
      endPoint: "posts",
      params: { include: "tags" }
    });
  }

  // tags: () => {
  //   return goFetch({
  //     endPoint: 'tags',
  //     params: { include: 'count.posts' }
  //   });
  // },

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
