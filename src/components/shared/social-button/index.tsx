import { MessageSquareMore } from "lucide-react";

const SocialButton = () => {
  const linktreeLink =
    "https://linktr.ee/paubrasilatacado?fbclid=PAZXh0bgNhZW0CMTEAAaaltjuhg1OEzAamOSwNgEJ9HTcch7aXqXklYSCGgu4D8YLESZQHe35RH0s_aem_Nsjoj3Eg7HDT-Czv1ytacw";

  return (
    <a
      href={linktreeLink}
      target="_blank"
      className="md:hidden animated-background z-10 bg-gradient-to-r from-cyan-600 via-emerald-600 to-yellow-500 text-white text-lg font-bold p-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out fixed bottom-2 right-2"
    >
      <MessageSquareMore className="text-lg w-8 h-8" />
    </a>
  );
};

export default SocialButton;
