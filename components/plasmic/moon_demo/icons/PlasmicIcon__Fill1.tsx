// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill1Icon(props: Fill1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 252 43"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M104.405 31.23c5.777-1.36 11.056-5.535 11.056-8.902 0-.722-.389-1.073-1.185-1.073-3.429 0-8.484 6.092-9.871 9.975zm63.981 6.82c0 1.716.735 2.586 2.181 2.586 5.717 0 11.626-12.472 11.626-16.798 0-1.713-.738-2.583-2.185-2.583-5.419 0-11.622 11.923-11.622 16.796zm26.447 0c0 1.716.735 2.586 2.184 2.586 5.71 0 11.618-12.472 11.618-16.798 0-1.713-.732-2.583-2.181-2.583-5.715 0-11.621 12.473-11.621 16.796zM252 26.18l-2.201 2.508c-1.869 2.146-4.191 4.816-6.642 7.277-4.334 4.31-6.831 5.768-9.905 5.768-3.494 0-4.74-2.285-4.74-4.241 0-2.88 2.496-6.027 4.693-8.804 1.75-2.21 3.405-4.299 3.405-5.742 0-.63-.478-1.02-1.245-1.02-4.378 0-14.81 13.397-17.705 18.87l-.108.201-6.893.2 5.032-7.91 1.792-2.851c-1.351-.122-2.465-.73-3.506-1.797-2.169 7.685-9.508 13.427-17.372 13.427-4.552 0-7.495-2.74-7.495-6.98 0-1.66.409-3.266 1.105-4.78-.992-.263-1.86-.823-2.684-1.667-2.169 7.685-9.505 13.427-17.372 13.427-4.274 0-7.096-2.434-7.428-6.24-.031.028-.059.059-.089.087-4.617 4.405-7.05 5.82-10.02 5.82-2.874 0-4.733-1.665-4.733-4.241 0-2.848 2.683-6.19 5.051-9.135 1.68-2.096 3.274-4.075 3.274-5.19 0-.858-.594-1.24-1.183-1.24-4.532 0-14.084 13.283-17.305 18.823l-.107.19-6.44.233-.771.03 4.302-6.295c3.578-5.165 6.67-9.625 6.67-11.573 0-.65-.342-1.409-1.304-1.409-4.466 0-14.357 13.47-17.539 18.83l-.112.183-6.896.26.401-.608c.667-1.02 1.347-2.077 2.018-3.107-4.167 3.035-8.527 4.582-12.995 4.582-4.318 0-7.261-2.62-7.557-6.565-4.448 4.365-7.663 6.232-10.74 6.232-2.513 0-4.267-1.607-4.267-3.907 0-.754.096-1.434.24-2.005-2.748 2.774-6.113 5.912-10.691 5.912-2.411 0-4.093-1.654-4.093-4.016 0-.331.048-.694.131-1.08-3.58 3.248-6.546 5.096-10.055 5.096-3.622 0-4.384-2.034-4.384-3.74 0-2.217 1.68-5.292 4.983-10.548L73.856 3.357l6.719-.24.769-.04L63.949 29.41c-2.975 4.53-4.923 7.63-4.923 9.424 0 1 .477 1.129.89 1.129 1.551 0 4.597-1.911 7.576-4.756a72.184 72.184 0 001.638-1.627c1.309-2.685 3.567-6.229 6.563-10.924l1.232-1.932 7.204-.26-3.027 4.404c-4.676 6.777-7.77 11.254-7.77 13.575 0 .684.427 1.184 1.01 1.184 2.731 0 8.437-5.087 11.973-10.671l5.153-8 6.242-.464.79-.065-5.38 8.195c-3.37 5.009-5.596 8.32-5.596 10.488 0 .853.538.853.716.853 1.492 0 4.577-2.057 8.044-5.369.395-.383.79-.777 1.183-1.174 1.202-6.966 10.751-13.6 17.747-13.6 3.591 0 5.733 1.46 5.733 3.905 0 5.512-11.671 7.87-16.652 8.88l-.282.055c-.053.35-.247 1.694-.247 1.694 0 3.07 1.94 5.05 4.937 5.05 3.189 0 7.236-1.963 11.105-5.379.331-.297.652-.6.972-.902 2.619-4.051 5.231-8.148 7.749-12.327l.108-.18 7.916-.388-3.438 4.491c2.672-2.635 5.822-4.9 9.424-4.9 2.628 0 4.328 1.47 4.328 3.738 0 .992-.409 2.227-1.145 3.672 3.113-3.504 7.252-7.41 11.418-7.41 2.858 0 4.563 2.074 4.563 4.075 0 2.777-2.326 5.684-4.573 8.493-1.934 2.415-3.754 4.696-3.754 6.503 0 .4.109 1.073.835 1.073 1.482 0 4.032-1.713 7.576-5.092.312-.298.641-.637.963-.954.858-7.708 9.992-14.098 17.551-14.098 3.997 0 6.984 2.3 7.609 5.857.348 1.904 1.423 3.086 2.985 3.327 3.162-5.329 9.981-9.184 15.853-9.184 3.997 0 6.983 2.3 7.606 5.857.393 2.144 1.702 3.378 3.596 3.378.141 0 .279-.017.417-.029l5.212-8.301 7.711-.257-3.722 4.972c2.915-2.87 6.581-5.62 10.199-5.62 2.63 0 4.328 1.557 4.328 3.962 0 2.768-2.245 5.668-4.421 8.47-1.885 2.438-3.669 4.737-3.669 6.583 0 .758.369 1.129 1.128 1.129.5 0 2.531-.4 7.562-5.53 2.822-2.88 5.454-5.944 7.029-7.774l.957-1.113 1.319.633zM53.455 28.314c0 8.61-8.372 13.752-16.466 13.752-3.78 0-7.61-1.86-7.61-5.415 0-2.148 1.847-3.961 4.033-3.961 1.246 0 2.413.42 3.37 1.213l.42.345-.478.269c-1.387.785-2.09 1.992-2.09 3.59 0 2.091 1.506 2.529 2.765 2.529 5.968 0 9.633-6.98 9.633-11.985 0-4.651-2.429-6.725-7.872-6.725h-.449l.153-1.187.328-.022c5.295-.308 11.47-3.002 11.47-9.58 0-1.982-.78-3.683-2.108-4.91-3.864 3.08-6.834 8.178-9.955 13.608-6 10.423-12.793 22.231-28.176 22.231C5.37 42.066 0 39.406 0 34.468c0-2.164 1.267-4.352 4.093-4.352 1.962 0 3.33 1.284 3.33 3.121 0 1.407-1.058 2.535-2.14 2.889a33.92 33.92 0 01-.031.413c0 2.72 1.916 4.097 5.702 4.097 8.305 0 12.817-7.566 18.036-16.325 4.35-7.296 9.285-15.515 17.28-19.883-2.77-1.858-6.689-2.982-10.686-2.982-11.682 0-24.7 8.233-24.7 20.044 0 3.032 1.66 7.844 6.113 7.844 6.1 0 9.394-5.918 9.394-11.483l-.242-3.202-.155-1.34 1.415-.118.063.34c.128.637.415 2.312.415 4.097 0 6.706-3.91 13.474-12.656 13.474-5.972 0-9.835-3.861-9.835-9.837C5.395 8.295 23.483.016 35.935.016c5.064 0 9.522.833 14.007 2.6 2.714-1.093 6.062-2.424 9.545-2.6L59.792 0l.386 1.11h-.552c-1.946 0-5.863 1.419-7.526 2.653 2.965 1.8 4.64 4.457 4.64 7.597 0 6.137-6.323 8.686-11.22 9.74 4.057.583 7.935 1.814 7.935 7.214z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill1Icon;
/* prettier-ignore-end */
