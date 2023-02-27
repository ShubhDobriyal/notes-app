import { LogoImg } from "../../assets/icons";

const Logo = () => {
  return (
    <>
      <div className="flex align-items-center gap-1">
        <LogoImg className="h-1 w-1" />
        My Notes
      </div>
    </>
  );
};

export default Logo;
