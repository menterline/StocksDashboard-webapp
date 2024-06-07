export const AboutMe = () => {
  return (
    <div className="flex flex-col align-left w-1/2">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-lg ">
        My name is Matthew Enterline. I am currently a Software Engineer at
        Envestnet, primarily focused on UI work in the Next Gen Proposal (NGP)
        product. I am passionate about full stack software development, and have
        experience in all layers of the stack from backend to frontend.
        Specifically, I find unit testing, and when possible, Test-Driven
        Development, especially valuable, and look to bring that appreciation
        for automated testing to any team I join.
      </p>
      <p className="text-lg">
        This site was created a personal project to demonstrate my skills in
        full stack development, and as a learning project. To build this site, I
        used React and TypeScript with Strict Mode on, every single data point
        is typed (no any's!). Furthermore, this was a learning experience for me
        to learn tailwind css. Lastly, the backend is in Java Spring Boot. I am
        pulling data from the AlphaVantage API to get stocks and market
        information. However, the data coming from this API is not organized
        properly, and I built the Java backend to do the data transformation.
      </p>
    </div>
  );
};
