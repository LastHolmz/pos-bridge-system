import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex justify-between w-full items-center container py-4 px-8">
      <div className="flex relative justify-center items-center">
        <Input
          type={"text"}
          className="min-w-56"
          placeholder="ابحث عن منتج أو مورد أو طلب"
        />
        <CiSearch className=" absolute left-2" />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
