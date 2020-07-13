import * as React from "react";
import Svg, { G, Rect, Path, Circle, Defs, ClipPath } from "react-native-svg";

export const Logo = () => (
  <Svg width={73} height={73} viewBox="0 0 73 73" fill="none">
    <Rect
      x={18.268}
      y={29.144}
      width={4}
      height={19.433}
      rx={2}
      transform="rotate(-90 18.268 29.144)"
      fill="#fff"
    />
    <Rect
      x={7.661}
      y={39.751}
      width={4}
      height={28.305}
      rx={2}
      transform="rotate(-90 7.661 39.75)"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M41.289 34.922c0-.336.012-.67.038-1h7.962a2 2 0 000-4h-7.004c1.959-4.697 6.596-8 12.004-8 7.18 0 13 5.82 13 13 0 .68-.053 1.349-.153 2h-8.847a2 2 0 100 4h7.535a13 13 0 01-11.535 7c-7.18 0-13-5.82-13-13zm17-3a2 2 0 10-4 0 2 2 0 004 0z"
      fill="#fff"
    />
    <Circle
      cx={2.828}
      cy={37.751}
      r={2}
      transform="rotate(-45 2.828 37.75)"
      fill="#fff"
    />
  </Svg>
);

export const SignOutIcon = (props: any) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const AddButton = () => (
  <Svg width={87} height={87} viewBox="0 0 87 87" fill="none">
    <Rect width={87} height={87} rx={35} fill="#362D1E" />
    <Rect
      x={12.732}
      y={12.732}
      width={61.537}
      height={61.537}
      rx={15}
      fill="#E08700"
    />
    <Path
      d="M43.5 31.122v24.756M31.122 43.5h24.756"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const TabAddIcon = () => (
  <Svg width={71} height={71} viewBox="0 0 71 71" fill="none">
    <Rect x={5} y={5} width={61} height={61} rx={30.5} fill="#191B23" />
    <Rect
      x={10.39}
      y={10.39}
      width={50.219}
      height={50.219}
      rx={25.11}
      fill="#E08700"
    />
    <Path
      d="M35.5 25.398v20.204M25.398 35.5h20.204"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const HomeIcon = (props: { color: string }) => (
  <Svg width={23} height={24} viewBox="0 0 23 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11.814c0-.298.011-.593.034-.885h7.043a1.77 1.77 0 100-3.538H.88C2.614 3.235 6.716.314 11.5.314c6.351 0 11.5 5.148 11.5 11.5 0 .601-.046 1.192-.135 1.769h-7.827a1.77 1.77 0 100 3.538h6.667A11.499 11.499 0 0111.5 23.314c-6.351 0-11.5-5.149-11.5-11.5zM15.039 9.16a1.77 1.77 0 10-3.539 0 1.77 1.77 0 003.539 0z"
      fill={props.color}
    />
  </Svg>
);

export const SearchIcon = (props: { color: string }) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TabProfileIcon = () => (
  <Svg width={23} height={23} viewBox="0 0 23 23" fill="none">
    <Circle cx={11.5} cy={11.5} r={11.5} fill="#2A2E3C" />
    <Path
      d="M11.5 1.917c-5.29 0-9.583 4.293-9.583 9.583s4.293 9.583 9.583 9.583 9.583-4.293 9.583-9.583S16.79 1.917 11.5 1.917zm0 2.875a2.871 2.871 0 012.875 2.875 2.871 2.871 0 01-2.875 2.875 2.871 2.871 0 01-2.875-2.875A2.871 2.871 0 0111.5 4.792zm0 13.608a6.9 6.9 0 01-5.75-3.086c.029-1.907 3.833-2.951 5.75-2.951 1.907 0 5.721 1.044 5.75 2.951A6.9 6.9 0 0111.5 18.4z"
      fill="#fff"
    />
  </Svg>
);

export const BackIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 12H5M12 19l-7-7 7-7"
      stroke="#697295"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const NextIcon = () => (
  <Svg width={8} height={14} viewBox="0 0 8 14" fill="none">
    <Path
      d="M1 13l6-6-6-6"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const XIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 6L6 18M6 6l12 12"
      stroke="#697295"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
