"use client";

import { track } from "@vercel/analytics";

type Props = React.ComponentProps<"a"> & { event: string };

export function TrackedLink({ event, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(ev) => {
        track(event);
        onClick?.(ev);
      }}
    />
  );
}
