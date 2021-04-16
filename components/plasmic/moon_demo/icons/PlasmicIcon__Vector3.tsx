// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.5 9.024a3.19 3.19 0 00-1.722.502c-.51.327-.907.791-1.142 1.335a2.866 2.866 0 00-.176 1.72c.12.577.414 1.107.848 1.523.434.417.986.7 1.587.815a3.22 3.22 0 001.791-.17 3.077 3.077 0 001.392-1.096 2.873 2.873 0 00.286-2.792 2.971 2.971 0 00-.672-.965 3.111 3.111 0 00-1.006-.645 3.212 3.212 0 00-1.186-.227zm12.413-2.94a7.56 7.56 0 00-.526-2.712 4.784 4.784 0 00-1.139-1.69c-.5-.48-1.1-.853-1.76-1.094a8.464 8.464 0 00-2.825-.504C17.05 0 16.575 0 12.5 0S7.95 0 6.338.084a8.464 8.464 0 00-2.825.504 5.03 5.03 0 00-1.762 1.093c-.5.48-.888 1.057-1.138 1.691a7.56 7.56 0 00-.526 2.712C0 7.632 0 8.088 0 12c0 3.912 0 4.368.087 5.916a7.94 7.94 0 00.526 2.724c.25.632.637 1.204 1.137 1.68.498.483 1.1.855 1.763 1.092.903.327 1.86.498 2.825.504C7.95 24 8.425 24 12.5 24c4.075 0 4.55 0 6.163-.084a8.465 8.465 0 002.825-.504 4.888 4.888 0 001.762-1.092 4.7 4.7 0 001.137-1.68 7.64 7.64 0 00.526-2.724C25 16.368 25 15.912 25 12c0-3.912 0-4.368-.087-5.916zm-3.175 9.6c-.04.74-.205 1.47-.488 2.16a4.623 4.623 0 01-1.06 1.538 4.846 4.846 0 01-1.603 1.018 7.428 7.428 0 01-2.262.42h-7.65a7.428 7.428 0 01-2.263-.42 4.407 4.407 0 01-1.637-1.032 4.198 4.198 0 01-1.025-1.524 6.356 6.356 0 01-.425-2.172V8.328a6.356 6.356 0 01.425-2.172 4.201 4.201 0 011.075-1.572A4.52 4.52 0 016.412 3.6a7.426 7.426 0 012.263-.42h7.65a7.426 7.426 0 012.262.42c.62.221 1.18.574 1.638 1.032.453.43.803.95 1.025 1.524.267.697.415 1.43.438 2.172V12c0 2.472.087 2.724.05 3.672v.012zm-2-8.928a2.845 2.845 0 00-.688-1.032 2.992 2.992 0 00-1.075-.66A5.19 5.19 0 0016.25 4.8h-7.5a5.184 5.184 0 00-1.725.312 2.98 2.98 0 00-1.064.634 2.852 2.852 0 00-.699.998A4.936 4.936 0 005 8.4v7.2a4.93 4.93 0 00.325 1.656c.149.388.383.74.688 1.032.304.292.67.517 1.075.66a5.534 5.534 0 001.662.312h7.5a5.184 5.184 0 001.725-.312 3 3 0 001.075-.66c.304-.292.539-.644.688-1.032.209-.53.319-1.09.325-1.656V8.4c0-.567-.11-1.128-.325-1.656v.012zM12.5 16.584a4.935 4.935 0 01-1.825-.35 4.78 4.78 0 01-1.547-.993 4.564 4.564 0 01-1.032-1.488 4.455 4.455 0 01.447-4.301 4.739 4.739 0 012.145-1.688 4.96 4.96 0 012.76-.259 4.84 4.84 0 012.445 1.258 4.53 4.53 0 011.304 2.35 4.41 4.41 0 01-.277 2.65 4.631 4.631 0 01-1.764 2.054 4.918 4.918 0 01-2.656.767zm5-8.268a1.142 1.142 0 01-.718-.352 1.056 1.056 0 01-.289-.722c0-.267.103-.524.29-.722.185-.199.44-.324.717-.352.276.028.532.153.718.352.186.198.289.455.289.722 0 .267-.103.524-.29.722a1.142 1.142 0 01-.717.352z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
