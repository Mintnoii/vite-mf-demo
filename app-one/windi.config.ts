import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'

const withOpacity = (variableName: string) => {
  return ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default defineConfig({
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      // 'blue-1': withOpacity('--color-blue-1'),
      // 'blue-1': withOpacity('--color-blue-1'),
      // 'blue-2': withOpacity('--color-blue-2'),
      // 'blue-3': withOpacity('--color-blue-3'),
      // 'mist-1': withOpacity('--color-mist-1'),
      // 'mist-2': withOpacity('--color-mist-2'),
      // 'mist-3': withOpacity('--color-mist-3'),
      // 'mist-4': withOpacity('--color-mist-4'),
      // 'mist-5': withOpacity('--color-mist-5'),
      // 'mist-6': withOpacity('--color-mist-6'),
      // 'gray-1': withOpacity('--color-gray-1'),
      // 'gray-2': withOpacity('--color-gray-2'),
      // 'gray-3': withOpacity('--color-gray-3'),
      // white: withOpacity('--color-white'),
      // yellow: withOpacity('--color-yellow'),
      // red: withOpacity('--color-red'),
      // green: withOpacity('--color-green'),
      // heaven: withOpacity('--color-heaven'),
      // ashes: withOpacity('--color-ashes'),
      // natural: withOpacity('--color-natural'),
      // link: withOpacity('--color-blue-2'),
      // warning: withOpacity('--color-yellow'),
      // error: withOpacity('--color-red'),
      // success: withOpacity('--color-green'),
      'column-primary': withOpacity('--color-bg-column-primary'),
      'column-secondary': withOpacity('--color-bg-column-secondary'),
      'column-tertiary': withOpacity('--color-bg-column-tertiary'),
      'propor-button': withOpacity('--color-propor-button'),
      'propor-highlight': withOpacity('--color-propor-highlight'),
      'show-1': withOpacity('--color-show-1'),
    },
    extend: {
      textColor: {
        //utilities like `text-primary`
        primary: withOpacity('--color-text-primary'),
        default: withOpacity('--color-text-default'),
      },
      backgroundColor: {
        //utilities like `bg-primary`
        primary: withOpacity('--color-bg-primary'),
      },
      borderColor: {
        //utilities like `broder-primary`
        primary: withOpacity('--color-border'),
      },
      fill: {
        //utilities like `fill-primary`
        primary: withOpacity('--color-bg-primary'),
      },
    },
  },
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'box-full': 'w-full h-full',
    'btn-base': 'flex-center bg-mist-3 rounded-4px w-max h-32px min-h-30px px-14px cursor-pointer',
    'border-btn-base': 'btn-base border-1px border-gray-2 bg-opacity-40',
    'overflow-y-overlay': {
      overflowY: 'overlay',
    },
    'absolute-center': 'transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute',
    'line-clamp-1': 'overflow-ellipsis overflow-hidden whitespace-nowrap',
  },
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: ['node_modules', '.git', 'excluded', 'dist', 'windi.config.{ts,js}', 'tailwind.config.{ts,js}'],
  },
})
