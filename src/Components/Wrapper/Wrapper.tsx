import React, {FC} from 'react';
import {Wrapper, Container} from './styled';

const AppWrapper: FC = ({children}) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default AppWrapper;
