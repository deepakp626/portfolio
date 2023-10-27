import github from "../../public/SocialIcon/github.svg";
import linkedin from "../../public/SocialIcon/linkedin.svg";
import instagram from "../../public/SocialIcon/instagram.svg";
import whatsapp from "../../public/SocialIcon/whatsapp.svg";
import { Image ,Link} from "@chakra-ui/react";
const SocialMidea = () => {
  const socialIcon = [
    {
      icon: github,
      path: "https://github.com/deepakp626",
    },

    {
      icon: linkedin,
      path: "https://www.linkedin.com/in/deepak-prajapat-5484b123b/",
    },
    {
      icon: instagram,
      path: "https://www.instagram.com/deepak_p626/",
    },
    {
      icon: whatsapp,
      path: "https://wa.me/916260009609/?text=Hii Deepak Prajapat",
    },
  ];
  return (
    <>
      {socialIcon.map((item, id) => (
        <Link href={item.path}  key={id}
         target={"_blank"}>
          <Image
            cursor={"pointer"}
            src={item.icon}
            alt={item.icon}
          />
        </Link>
      ))}
    </>
  );
};

export default SocialMidea;
