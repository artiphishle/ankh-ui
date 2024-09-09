/**
 * @todo Put this stringifyHsl into ankh-hooks
 */

import { IAnkhColorHsl } from "ankh-types";

export const stringifyHsl = ({ h, s, l }: IAnkhColorHsl) => `hsl(${h},${s}%,${l}%)`;