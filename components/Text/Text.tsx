import React, { CSSProperties, ReactNode } from 'react';

import { GenericProps } from '../../types/GenericProps';

import { cn } from '../../lib/cn';

interface Props extends GenericProps {
  children: ReactNode;
  maxWidth?: CSSProperties['maxWidth'];
}

const Text = ({
  children,
  classNames = [],
  style = {},
  maxWidth
}: Props) => (
  <p
    className={cn('Text', classNames)}
    style={{
      ...style,
      maxWidth
    }}
  >
    {children}
  </p>
);

export default Text;
