import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  margin-left: 250px;
  padding: 20px;
`;

const MainContent = () => {
  return (
    <ContentWrapper>
      <h2>Main Content</h2>
      <p>This is the main content area.</p>
    </ContentWrapper>
  );
};

export default MainContent;
