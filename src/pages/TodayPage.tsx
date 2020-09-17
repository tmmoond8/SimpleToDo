/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import { colors } from 'notion-ui';

interface TodayPageProps {}

export default function TodayPage(props: TodayPageProps): JSX.Element {
  return <Title>Today</Title>;
}

const Title = styled.h1`
  color: ${colors.grey};
`;
