import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Image from '@components/Image';
import { IAuthor } from '@types';

function BioGroup({ author }: IAuthor) {
  return (
    <BioContainer>
      <BioAvatar
        as={'div'}
        // to={author.slug}
        data-a11y="false"
        aria-label="Author's bio"
      >
        <BioAvatarInner>
          <Image src={'https://www.jovanipink.com/project-logo.jpg'} />
        </BioAvatarInner>
      </BioAvatar>
      <BioAvatar
        as={'div'}
        // to={author.slug}
        data-a11y="false"
        aria-label="Author's bio"
      >
        <BioAvatarInner>
          <Image src={'https://www.jovanipink.com/project-logo.jpg'} />
        </BioAvatarInner>
      </BioAvatar>
      <BioText>Testing</BioText>
    </BioContainer>
  );
}

export default BioGroup;

const BioContainer = styled.div`
  display: display-flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  left: -10px;
`;

const BioAvatar = styled.div`
  display: inline-block;
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  margin: 10px 26px 10px 10px;

  &::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: 50px;
    height: 50px;
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;

const BioAvatarInner = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.25);
  margin-right: 16px;
  overflow: hidden;
`;

const BioText = styled.p`
  display: inline-block;
  position: relative;
  max-width: 430px;
  font-size: 14px;
  line-height: 1.45;

  a {
    text-decoration: underline;
  }
`;
