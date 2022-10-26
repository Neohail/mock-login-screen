import { TypographyOptions } from '@mui/material/styles/createTypography';
import "typeface-inter";

export const FONT = "Inter";

export const fontWeightSemiBold = 600;

export const typography: TypographyOptions = {
    fontFamily: FONT,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: '22px'
    },
    h2: {
        fontWeight: 700,
        lineHeight: 1,
        fontSize: '22px'
    },
    subtitle1: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: '14px'
    },
    subtitle2: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: '12px',
        color: 'gray'
    },
    caption: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: '14px'
    }
}