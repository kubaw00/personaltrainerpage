"use client";

import { InView } from "react-intersection-observer";

export default function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView: string;
}) {
  return (
    <InView triggerOnce={false} threshold={0.2}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={
            inView
              ? `${classNameInView} !duration-700 !delay-200`
              : `${classNameNotInView} !duration-700 !delay-200`
          }
        >
          {children}
        </div>
      )}
    </InView>
  );
}
