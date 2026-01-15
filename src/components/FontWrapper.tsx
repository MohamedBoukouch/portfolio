// src/components/FontWrapper.tsx
'use client';

import { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import classNames from 'classnames';

export const fonts = {
  heading: GeistSans,
  body: GeistSans,
  label: GeistSans,
  code: GeistMono,
};

export function FontWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      {children}
    </div>
  );
}
