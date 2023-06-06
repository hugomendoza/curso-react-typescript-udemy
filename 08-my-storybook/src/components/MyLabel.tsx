import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Value corresponding to text label
   */
  label:string;
  /**
   * Sizes for text label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Color for text label
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Defines value label upper case
   */
  allCaps?: boolean;
  /**
   * Select custom color for text label
   */
  fontColor?: string;
  /**
   * Select background color for text label
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
  backgroundColor
}:MyLabelProps ) => {
  return (
    <span
      className={`label ${ size } text-${ color }`}
      style={{ color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}