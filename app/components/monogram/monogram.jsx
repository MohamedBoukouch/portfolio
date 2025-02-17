import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, size = 48, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  // Calculate font size based on overall size
  const fontSize = size * 0.9; // Adjust this factor as needed

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width={size}
      height={size * (29 / 48)} // Maintain aspect ratio
      viewBox={`0 0 48 29`} // Keep the viewBox constant. Scale it appropriately.
      ref={ref}
      {...props}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <style>
          {`
            .bm-text {
              font-family: "Times New Roman", serif;
              font-weight: bold;
              font-size: ${fontSize}px; /* Dynamic font size */
              fill: var(--text-color, white);
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
            }

            .bm-background {
              fill: var(--bg-color, transparent);
            }
          `}
        </style>
      </defs>

      <rect width="100%" height="100%" className="bm-background" rx="5" ry="5"/>

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="bm-text"
      >
        BM
      </text>
    </svg>
  );
});