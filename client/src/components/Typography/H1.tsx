import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { color, compose, space, typography } from 'styled-system';
import { TextProps } from './types';

const props = compose(space, color, typography);

const H1 = styled(motion.h1)<TextProps>(props);

export default H1;

H1.defaultProps = {
  fontSize: ['3xl', '4xl'],
  fontWeight: 'lighter',
  fontFamily: 'Raleway, sans-serif'
};
