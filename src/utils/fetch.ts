interface IProps {
  endPoint: string;
  params?: {
    include?: string;
    filter?: string;
    order?: string;
  };
}

export const goFetch = {
  users: () => {
    return triggerFetch({
      endPoint: 'users/1'
    });
  },

  posts: () => {
    return triggerFetch({
      endPoint: 'posts',
      params: { include: 'tags' }
    });
  },

  tags: () => {
    return triggerFetch({
      endPoint: 'tags',
      params: { include: 'count.posts' }
    });
  },

  sections: () => {
    return triggerFetch({
      endPoint: 'posts',
      params: {
        filter: 'page:true',
        order: 'title dsc'
      }
    });
  }
};

const triggerFetch = ({ endPoint, params }: IProps) => {
  return fetch(
    window['ghost'].url.api(`${endPoint}`, {
      ...params
    })
  )
    .then(res => res.json())
    .then(data => {
      // console.log('data: ', data);
      return {
        isLoading: false,
        data,
        hasErrored: false,
        url: window['ghost'].url.api()
      };
    })
    .catch(() => {
      // console.log('error: ', error);
      return {
        isLoading: false,
        data: null,
        hasErrored: true
      };
    });
};
