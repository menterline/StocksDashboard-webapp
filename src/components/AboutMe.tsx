import { useState } from "react";
import { Links } from "./Links";
import { Link } from "../types/Link";

export const AboutMe = () => {
  const info = [
    {
      name: "Testing",
      render: () => <p>TESTING</p>,
    },

    {
      name: "Editors",
      render: () => <p>Editors</p>,
    },

    {
      name: "Typescript",
      render: () => <p>Typescript</p>,
    },
  ];
  const projects = [
    {
      name: "Stocks dashboard",
      render: () => <p>Not implemented yet</p>,
    },
  ];

  const jobs = [
    {
      name: "Envestnet",
      render: () => <p>Envestnet</p>,
    },
  ];

  const [selectedLink, setSelectedLink] = useState<Link | null>(null);
  return (
    <div className="flex flex-row align-left ">
      <div className="flex flex-col  gap-16 w-1/5">
        <div>
          <h1 className="text-3xl font-bold flex flex-col">About Me</h1>
          <p className="text-lg ">
            My name is Matthew Enterline. I am currently a Software Engineer at
            Envestnet, primarily focused on UI development. I am passionate
            about full stack software development, and have experience in all
            layers of the stack from backend to frontend.
          </p>
        </div>
        <Links sectionTitle="Info" links={info} onSelect={setSelectedLink} />
        <Links
          sectionTitle="Projects"
          links={projects}
          onSelect={setSelectedLink}
        />
        <Links sectionTitle="Jobs" links={jobs} onSelect={setSelectedLink} />
      </div>
      {selectedLink && <div className="w-4/5">{selectedLink.render()}</div>}
    </div>
  );
};
