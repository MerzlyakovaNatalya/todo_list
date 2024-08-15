interface IconProps {
  width?: number
  height?: number
  fill?: string
}

const IconCheck: React.FC<IconProps> = ({
  width = 30,
  height = 30,
  fill = '#d5d0d070',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_0_2692)">
        <path
          d="M33.17 17.1702L24 26.3402L14.83 17.1702L12 20.0002L24 32.0002L36 20.0002L33.17 17.1702Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_0_2692">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconCheck
