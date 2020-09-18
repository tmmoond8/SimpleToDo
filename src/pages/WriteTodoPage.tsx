/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from 'notion-ui';
import lang from '../libs/internationalizer';

interface WriteTodoPageProps {}

export default function WriteTodoPage(props: WriteTodoPageProps): JSX.Element {
  return <Title>{lang`WRITE`}</Title>;
}

const Title = styled.h1`
  color: ${colors.grey};
`;
