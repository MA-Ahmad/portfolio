import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  color: string;
  h?: string;
  zIndex?: number;
}
const UnderlinedText = (props: PropsWithChildren<Props>) => (
  <Box as="span" display="inline-block" position="relative">
    {props.children}
    <Box as="span" display="block" position="absolute" bg={props.color} w={'100%'} h={props.h || '4px'} bottom={0} />
  </Box>
);
export default UnderlinedText;
