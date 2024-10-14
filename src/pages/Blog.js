import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.section`
  padding: 40px;
`;

const BlogPost = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #AC1212;
`;

const Blog = () => {
  return (
    <BlogWrapper>
      <Title>Latest Blog Posts</Title>
      <BlogPost>
        <h3>Top 10 Makeup Trends for 2024</h3>
        <p>Published: May 20, 2024</p>
        <p>Summary: A look at the hottest makeup trends for the coming year.</p>
      </BlogPost>
      <BlogPost>
        <h3>How to Prepare for Your First Makeup Artist Job</h3>
        <p>Published: May 10, 2024</p>
        <p>Summary: Tips and advice for new makeup artists entering the industry.</p>
      </BlogPost>
      {/* Add more blog posts as needed */}
    </BlogWrapper>
  );
};

export default Blog;
