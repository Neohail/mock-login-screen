import { alpha, PaletteOptions } from '@mui/material';
import { SimplePaletteColorOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
    export interface SimplePaletteColorOptions {
        lighter?: string;
        light?: string;
        main: string;
        medium?: string;
        dark?: string;
        darker?: string;
        contrastText?: string;
    }
    export interface PaletteColor {
        lighter?: string;
        darker?: string;
        medium?: string;
    }
}

const PRIMARY: SimplePaletteColorOptions = {
    main: '#784af4',
};

export const palette: PaletteOptions = {
    primary: { ...PRIMARY }
};