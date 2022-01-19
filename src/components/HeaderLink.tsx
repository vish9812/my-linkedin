import type { SvgIconTypeMap } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

interface HeaderLinkProps {
  text: string;
  Icon: React.ElementType;
}

const HeaderLink = ({ text, Icon }: HeaderLinkProps) => {
  return (
    <div className="cursor-pointer flex flex-col justify-center items-center text-gray-500 hover:text-gray-700">
      <Icon />
      <h4 className={`text-sm`}>{text}</h4>
    </div>
  );
};

export default HeaderLink;
