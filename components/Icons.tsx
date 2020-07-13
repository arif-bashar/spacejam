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

export const ProfileIcon = (props: any) => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Circle cx={16} cy={16} r={16} fill="#313544" fillOpacity={1} />
    <Path
      d="M16 3.692C9.206 3.692 3.692 9.206 3.692 16S9.206 28.308 16 28.308 28.308 22.794 28.308 16 22.794 3.692 16 3.692zm0 3.693a3.687 3.687 0 013.692 3.692A3.687 3.687 0 0116 14.769a3.687 3.687 0 01-3.692-3.692A3.687 3.687 0 0116 7.385zm0 17.476a8.862 8.862 0 01-7.385-3.963c.037-2.449 4.924-3.79 7.385-3.79 2.45 0 7.348 1.341 7.385 3.79A8.862 8.862 0 0116 24.861z"
      fill="#fff"
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

export const HomeIcon = () => (
  <Svg width={23} height={24} viewBox="0 0 23 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 11.814c0-.298.011-.593.034-.885h7.043a1.77 1.77 0 100-3.538H.88C2.614 3.235 6.716.314 11.5.314c6.351 0 11.5 5.148 11.5 11.5 0 .601-.046 1.192-.135 1.769h-7.827a1.77 1.77 0 100 3.538h6.667A11.499 11.499 0 0111.5 23.314c-6.351 0-11.5-5.149-11.5-11.5zM15.039 9.16a1.77 1.77 0 10-3.539 0 1.77 1.77 0 003.539 0z"
      fill="#fff"
    />
  </Svg>
);

export const SearchIcon = () => (
  <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
    <Path
      d="M16.792 15.167h-.856l-.303-.293a7.01 7.01 0 001.7-4.582 7.041 7.041 0 10-7.041 7.041 7.01 7.01 0 004.582-1.7l.293.303v.856l5.416 5.405 1.615-1.614-5.406-5.416zm-6.5 0a4.868 4.868 0 01-4.875-4.875 4.868 4.868 0 014.875-4.875 4.868 4.868 0 014.875 4.875 4.868 4.868 0 01-4.875 4.875z"
      fill="#fff"
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
      d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
      fill="#fff"
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
)
