import { InstagramLogoIcon } from "@radix-ui/react-icons";

const InstagramButton = () => {
  const instagramLink = "https://www.instagram.com/paubrasilatacado";

  return (
    <a
      href={instagramLink}
      target="_blank"
      className="md:hidden animated-background z-10 bg-gradient-to-r from-[#405DE6] via-[#5851DB] to-[#833AB4] text-white text-lg font-bold p-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out fixed bottom-2 right-2"
    >
      <InstagramLogoIcon className="text-lg w-8 h-8" />
    </a>
  );
};

export default InstagramButton;
