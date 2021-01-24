import styled from '@emotion/styled';
import { space, layout, color, typography, compose } from 'styled-system';
import { motion } from 'framer-motion';
import { TextProps } from './types';

const props = compose(space, layout, color, typography);

const Text = styled(motion.span)<TextProps>(props);

Text.defaultProps = {
  fontSize: 'md',
  fontFamily: 'Roboto, san-serif'
};

export default Text;
