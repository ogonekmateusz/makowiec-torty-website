export type PrimaryButtonProps = {
  title: string;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  type?: "button" | "submit" | "reset";
};
