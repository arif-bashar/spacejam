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

export const ProfileIcon = () => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
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
