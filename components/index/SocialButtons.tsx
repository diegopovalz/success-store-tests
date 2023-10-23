import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";

interface SocialButtonsProps {
  className?: string;
  size?: string;
  color?: string;
}

const SocialButtons = ({ className, size, color }: SocialButtonsProps) => {
  return (
    <nav>
      <ul className={className ? className : ""}>
        <li>
          <FaFacebookSquare
            size={size ? size : 24}
            color={color ? color : "white"}
          />
        </li>
        <li>
          <FaTwitterSquare
            size={size ? size : 24}
            color={color ? color : "white"}
          />
        </li>
        <li>
          <FaInstagramSquare
            size={size ? size : 24}
            color={color ? color : "white"}
          />
        </li>
        <li>
          <FaLinkedin size={size ? size : 24} color={color ? color : "white"} />
        </li>
        <li>
          <FaYoutubeSquare
            size={size ? size : 24}
            color={color ? color : "white"}
          />
        </li>
      </ul>
    </nav>
  );
};

export { SocialButtons };
