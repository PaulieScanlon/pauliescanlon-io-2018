import styled from 'react-emotion';
import { theme } from '../../styles/theme';
import { common } from '../../styles/common';

interface IUserDetails {
  backgroundSrc: string;
}

export const UserWrapper = styled.div({
  label: 'user-wrapper',
  position: 'relative',
  width: '100%',
  height: '100%'
});

export const UserDetails = styled.div<IUserDetails>(
  {
    label: 'user-details',
    minHeight: 300,
    textAlign: 'center',
    padding: common.padding,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    '& h2': {
      marginTop: '1rem'
    }
  },
  ({ backgroundSrc }) => ({
    backgroundImage: `url(${backgroundSrc})`
  })
);

export const UserProfile = styled.img({
  label: 'user-profile',
  width: 100,
  height: 'auto',
  marginTop: '3rem',
  borderRadius: '50%',
  boxSizing: 'border-box',
  border: `3px solid ${theme.white}`
});
