import { Colors } from "utils/constants";

export const BOARD_ID = "game-of-life-board";
export const BOARD_COLOR_LIGHT = Colors.LIGHT; // "#fff";
export const GRID_COLOR_LIGHT = Colors.LIGHT; // "#eee";
export const BOARD_COLOR_DARK = Colors.DARK; // "#000";
export const GRID_COLOR_DARK = Colors.DARK; // "#111";
export const CELL_COLOR = `color-mix(in srgb, ${Colors.DARK} 80%, ${Colors.LIGHT})`;
export const CELL_BORDER = 1;
export const CELL_SIZE = 20;
