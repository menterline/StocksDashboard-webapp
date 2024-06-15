import { Button } from "@mui/material";
import { Link } from "../types/Link";

type Props = {
  sectionTitle: string;
  links: Array<Link>;
  onSelect: (link: Link) => void;
};
export const Links = (props: Props) => {
  const { links, sectionTitle } = props;

  return (
    <div>
      <h1>{sectionTitle}</h1>
      <div className="flex flex-row gap-4">
        {links.map((link: Link) => {
          return (
            <Button
              key={link.name}
              color="light"
              onClick={() => props.onSelect(link)}
            >
              {link.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
