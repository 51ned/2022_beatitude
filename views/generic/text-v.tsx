interface TextProps {
  bg?: string,
  bold?: boolean,
  children: React.ReactNode,
  color?: string,
  size?: string,
  style?: string,
  tag?: keyof JSX.IntrinsicElements,
}


export const Text: React.FC<TextProps> = ({
  bg = 'light', // or dark
  bold,
  children,
  color = 'primary', // or secondary
  size, // or smallest / smaller / regular / subtitle
  style = 'regular', // or smallest / smaller / subtitle
  tag: Tag = 'p' // any
}) => {
  
  const Color = `${color}_${bg}_bg`
  const Style = size ? `${size}_font_size` : `${style}_font_style`

  let Weight

  if (bold) {
    Weight = 'bold'
  }

  return (
    <Tag className={`${Color} ${Style} ${Weight}`}>
      { children }
    </Tag>
  )  
}
