import { app, colors } from '../settings'
import type { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material'
import { rem } from 'polished'
import type { CSSObject } from '@mui/system'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    mobileNavItem: true
    groupTitle: true
    groupItemLink: true
    actionButton: true
    primary: true
    secondary: true
    dark: true
    square: true
    corner: true
    textOnly: true
  }
}

interface MuiButton {
  defaultProps?: ComponentsProps['MuiButton']
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton']
  variants?: ComponentsVariants['MuiButton']
}

const baseButtonStyles: CSSObject = {
  padding: `${app.spacing(2)} ${app.spacing(4)}`,
  height: app.button.height.medium,
  fontSize: rem(15),
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: app.button.height.medium,
  boxShadow: 'none',
  ':hover': {
    boxShadow: 'none',
  },
}

const buttonStyles: MuiButton = {
  defaultProps: {
    disableRipple: true,
  },
  variants: [
    {
      props: { variant: 'mobileNavItem' },
      style: {
        paddingLeft: 0,
        height: '50px',
        borderRadius: 0,
        color: colors.common.black,
        textTransform: 'none',
        justifyContent: 'flex-start',
      },
    },
    {
      props: { variant: 'groupTitle' },
      style: {
        color: colors.common.black,
        textTransform: 'none',
        fontSize: rem(20),
        fontWeight: 700,
        '&:hover': {
          backgroundColor: 'transparent',
          color: colors.primary.main,
        },
      },
    },
    {
      props: { variant: 'groupItemLink' },
      style: {
        color: colors.common.black,
        fontSize: rem(14),
        textTransform: 'none',
        transition: 'color .3s ease',
        '&:hover': {
          backgroundColor: 'transparent',
          color: colors.primary.main,
        },
        '& .MuiButton-startIcon': {
          marginRight: '10px',
          transition: 'margin-right .3s ease',
          color: colors.common.black,
        },
        '&:hover .MuiButton-startIcon': {
          marginRight: '15px',
        },
      },
    },
    {
      props: { variant: 'actionButton' },
      style: {
        textAlign: 'center',
        color: colors.common.white,
        backgroundColor: colors.secondary.main,
        borderColor: colors.secondary.main,
        verticalAlign: 'middle',
        width: '100%',
        fontWeight: 700,
        borderRadius: 0,
        '&:hover': {
          backgroundColor: colors.secondary.dark,
          borderColor: colors.secondary.dark,
        },
        padding: '1rem 2rem',
        '&.Mui-disabled': {
          backgroundColor: '#A2E4C8',
          color: colors.common.white,
        },
      },
    },
    {
      props: { variant: 'primary' },
      style: {
        color: colors.common.white,
        backgroundColor: colors.primary.main,
        borderRadius: 0,
        fontSize: rem(16),
        textTransform: 'none',
        transition: 'color .3s ease',
        '&:hover': {
          backgroundColor: colors.primary.dark,
        },
        '&.Mui-disabled': {
          color: colors.common.white,
          backgroundColor: colors.primary.dark,
        },
      },
    },
    {
      props: { variant: 'secondary' },
      style: {
        color: colors.common.white,
        backgroundColor: colors.secondary.main,
        borderRadius: 0,
        fontSize: rem(16),
        textTransform: 'none',
        transition: 'color .3s ease',
        '&:hover': {
          backgroundColor: colors.secondary.dark,
        },
      },
    },
    {
      props: { variant: 'dark' },
      style: {
        color: colors.common.white,
        backgroundColor: colors.tertiary.main,
        borderRadius: 0,
        fontSize: rem(16),
        textTransform: 'none',
        transition: 'color .3s ease',
        '&:hover': {
          backgroundColor: colors.tertiary.dark,
        },
      },
    },
    {
      props: { name: 'publiekepartner' },
      style: baseButtonStyles,
    },
    {
      props: { name: 'publiekepartner', color: 'primary' },
      style: {
        backgroundColor: colors.publiekepartner.primary['200'],
        color: colors.publiekepartner.common.white,
        '&:hover': {
          backgroundColor: colors.publiekepartner.primary['300'],
        },
        '&:active': {
          backgroundColor: colors.publiekepartner.primary['400'],
        },
      },
    },
    {
      props: { name: 'publiekepartner', color: 'secondary' },
      style: {
        backgroundColor: colors.publiekepartner.shades['50'],
        color: colors.publiekepartner.textShades['200'],
        '&:hover': {
          backgroundColor: colors.publiekepartner.shades['100'],
        },
        '&:active': {
          backgroundColor: colors.publiekepartner.shades['200'],
        },
      },
    },
    {
      props: { name: 'publiekepartner', color: 'secondary', className: 'outlined' },
      style: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.publiekepartner.textShades['200'],
        '&:active': {
          borderWidth: '2px',
          borderColor: colors.publiekepartner.primary['200'],
        },
      },
    },
    {
      props: { name: 'publiekepartner', size: 'small' },
      style: {
        height: `${app.button.height.small} !important`,
        borderRadius: app.button.height.small,
      },
    },
    {
      props: { name: 'publiekepartner', size: 'large' },
      style: {
        height: `${app.button.height.large} !important`,
        borderRadius: app.button.height.large,
      },
    },
    {
      props: { name: 'publiekepartner', variant: 'square' },
      style: {
        ...baseButtonStyles,
        borderRadius: '0 !important',
      },
    },
    {
      props: { name: 'publiekepartner', variant: 'corner' },
      style: {
        ...baseButtonStyles,
        borderRadius: `${app.baseBorderRadius} !important`,
      },
    },
    {
      props: { name: 'publiekepartner', disabled: true },
      style: {
        fontWeight: 400,
        color: colors.publiekepartner.textShades['200'],
        opacity: 0.5,
      },
    },
    {
      props: { name: 'publiekepartner', disabled: true, className: 'outlined' },
      style: {
        borderColor: colors.publiekepartner.textShades['100'],
      },
    },
    {
      props: { name: 'publiekepartner', color: 'secondary', disabled: true, className: 'outlined' },
      style: {
        borderColor: colors.publiekepartner.textShades['100'],
      },
    },
    {
      props: { name: 'publiekepartner', variant: 'textOnly' },
      style: {
        padding: 0,
        borderWidth: 0,
        backgroundColor: 'transparent',
        color: colors.publiekepartner.textShades['200'],
        fontSize: rem(16),
        fontWeight: 600,
        ':hover': {
          backgroundColor: 'transparent',
          color: colors.publiekepartner.brand['200'],
        },
      },
    },
  ],
}

export default buttonStyles
