/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { colors } from 'notion-ui';

interface NotFoundPageProps {}

export default function NotFoundPage(props: NotFoundPageProps): JSX.Element {
  return <Title>Not Found : 404</Title>;
}

const Title = styled.h1`
  color: ${colors.grey};
`;
