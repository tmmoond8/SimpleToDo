/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from 'notion-ui';
import lang from '../libs/internationalizer';

interface NotFoundPageProps {}

export default function NotFoundPage(props: NotFoundPageProps): JSX.Element {
  return <Title>{lang`NOT_FOUND`}</Title>;
}

const Title = styled.h1`
  color: ${colors.grey};
`;
