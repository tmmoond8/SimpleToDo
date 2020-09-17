/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { colors } from 'notion-ui';

interface WriteTodoPageProps {}

export default function WriteTodoPage(props: WriteTodoPageProps): JSX.Element {
  return <Title>Write Todo</Title>;
}

const Title = styled.h1`
  color: ${colors.grey};
`;
