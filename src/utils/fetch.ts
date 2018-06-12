const config = {
  users: {
    endPoint: 'users/1'
  },
  posts: {
    endPoint: 'posts',
    params: {
      include: 'tags'
    }
  },
  tags: {
    endPoint: 'tags',
    params: {
      include: 'count.posts'
    }
  },
  sections: {
    endPoint: 'posts',
    params: {
      filter: 'page:true',
      order: 'title dsc'
    }
  }
};

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
      endPoint: config.users.endPoint
    });
  },

  posts: () => {
    return triggerFetch({
      endPoint: config.posts.endPoint,
      params: config.posts.params
    });
  },

  tags: () => {
    return triggerFetch({
      endPoint: config.tags.endPoint,
      params: config.tags.params
    });
  },

  sections: () => {
    return triggerFetch({
      endPoint: config.sections.endPoint,
      params: config.sections.params
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
      // console.log(`data: ${endPoint}`, data);
      return data;
    })
    .catch(() => {
      console.log('error');
    });
};
