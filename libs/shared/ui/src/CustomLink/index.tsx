'use client';

import Link from 'next/link';
import { FC, useCallback, useEffect, useState } from 'react';

export const ON_HOVER = 'onHover';
/**
 *
 * children?: React.ReactNode: The content to be displayed inside the link component.
 * href: string: The URL to which the link should navigate.
 * prefetch?: 'onHover' | true | false: (Optional) Specifies the prefetch behavior. Defaults to true. Options include:
 *  -'onHover': Prefetches the linked page when the user hovers over the link.
 *  -true: Always prefetches the linked page.
 *  -false: Disables prefetching.
 */
type CustomLinkProps = {
  children?: React.ReactNode;
  href: string;
  prefetch?: typeof ON_HOVER | true | false;
  [x: string]: any;
};

const CustomLink: FC<CustomLinkProps> = ({
  children,
  prefetch = true,
  ...rest
}) => {
  const [prefetchOption, setPrefetchOption] = useState(false);
  const startPrefetching = useCallback(() => {
    if (prefetch === ON_HOVER) {
      setPrefetchOption(true);
    }
  }, [prefetch]);

  useEffect(() => {
    if (prefetch === true) setPrefetchOption(true);
  }, [prefetch]);

  return (
    <Link
      onMouseEnter={startPrefetching}
      onTouchStart={startPrefetching}
      prefetch={prefetchOption}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
