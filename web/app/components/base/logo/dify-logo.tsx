'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'
import useTheme from '@/hooks/use-theme'
import { basePath } from '@/utils/var'
export type LogoStyle = 'default' | 'monochromeWhite'

export const logoPathMap: Record<LogoStyle, string> = {
  default: '/logo/ailifelogo.svg',
  monochromeWhite: '/logo/ailifelogo.svg',
}

export type LogoSize = 'large' | 'mediu m' | 'small'

export const logoSizeMap: Record<LogoSize, string> = {
  large: 'w-32 h-14', // much bigger than before
  medium: 'w-20 h-9', // enlarged medium
  small: 'w-14 h-6', // slightly larger small      // was w-9 h-4
}

type DifyLogoProps = {
  style?: LogoStyle
  size?: LogoSize
  className?: string
}

const DifyLogo: FC<DifyLogoProps> = ({
  style = 'default',
  size = 'medium',
  className,
}) => {
  const { theme } = useTheme()
  const themedStyle = (theme === 'dark' && style === 'default') ? 'monochromeWhite' : style

  return (
    <img
      src={`${basePath}${logoPathMap[themedStyle]}`}
      className={classNames('block object-contain', logoSizeMap[size], className)}
      alt='Dify logo'
    />
  )
}

export default DifyLogo
