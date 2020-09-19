/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from 'notion-ui';
import t, { LANG } from '../libs/internationalizer';

interface TodayPageProps {}

export default function TodayPage(props: TodayPageProps): JSX.Element {
  return <Title>{t(LANG.TODAY)}</Title>;
}

const Title = styled.h1`
  color: ${colors.grey};
`;
