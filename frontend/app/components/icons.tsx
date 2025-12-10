import GoogleIcon from './GoogleIcon';

// Tipos para los iconos pre-configurados
interface IconProps {
  size?: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  fill?: 0 | 1;
  grade?: -25 | 0 | 200;
  className?: string;
  onClick?: () => void;
}

// Iconos comunes pre-configurados para el proyecto
export const MenuIcon = (props: IconProps) => <GoogleIcon name="menu" {...props} />;
export const CloseIcon = (props: IconProps) => <GoogleIcon name="close" {...props} />;
export const HomeIcon = (props: IconProps) => <GoogleIcon name="home" {...props} />;
export const PhoneIcon = (props: IconProps) => <GoogleIcon name="phone" {...props} />;
export const EmailIcon = (props: IconProps) => <GoogleIcon name="email" {...props} />;
export const LocationIcon = (props: IconProps) => <GoogleIcon name="location_on" {...props} />;
export const ArrowDownIcon = (props: IconProps) => <GoogleIcon name="keyboard_arrow_down" {...props} />;
export const ArrowUpIcon = (props: IconProps) => <GoogleIcon name="keyboard_arrow_up" {...props} />;
export const StarIcon = (props: IconProps) => <GoogleIcon name="star" {...props} />;
export const StarOutlineIcon = (props: IconProps) => <GoogleIcon name="star_border" {...props} />;
export const CheckIcon = (props: IconProps) => <GoogleIcon name="check" {...props} />;
export const AddIcon = (props: IconProps) => <GoogleIcon name="add" {...props} />;
export const RemoveIcon = (props: IconProps) => <GoogleIcon name="remove" {...props} />;
export const EditIcon = (props: IconProps) => <GoogleIcon name="edit" {...props} />;
export const DeleteIcon = (props: IconProps) => <GoogleIcon name="delete" {...props} />;
export const ShareIcon = (props: IconProps) => <GoogleIcon name="share" {...props} />;
export const DownloadIcon = (props: IconProps) => <GoogleIcon name="download" {...props} />;
export const SearchIcon = (props: IconProps) => <GoogleIcon name="search" {...props} />;
export const FilterIcon = (props: IconProps) => <GoogleIcon name="filter_list" {...props} />;
export const SortIcon = (props: IconProps) => <GoogleIcon name="sort" {...props} />;
export const RefreshIcon = (props: IconProps) => <GoogleIcon name="refresh" {...props} />;
export const SettingsIcon = (props: IconProps) => <GoogleIcon name="settings" {...props} />;
export const InfoIcon = (props: IconProps) => <GoogleIcon name="info" {...props} />;
export const WarningIcon = (props: IconProps) => <GoogleIcon name="warning" {...props} />;
export const ErrorIcon = (props: IconProps) => <GoogleIcon name="error" {...props} />;
export const SuccessIcon = (props: IconProps) => <GoogleIcon name="check_circle" {...props} />;

// Iconos específicos del proyecto Camper
export const CamperIcon = (props: IconProps) => <GoogleIcon name="rv_hookup" {...props} />;
export const ToolsIcon = (props: IconProps) => <GoogleIcon name="construction" {...props} />;
export const WoodIcon = (props: IconProps) => <GoogleIcon name="carpenter" {...props} />;
export const LaserIcon = (props: IconProps) => <GoogleIcon name="precision_manufacturing" {...props} />;

// Exportar el componente base también
export default GoogleIcon;