import Article from "../components/Article";
import Faq from "../components/Faq";

function Home() {
  const collapses = [
    {
      index: 0,
      title: "Foire aux questions",
      content: " comment tué un reptilien ?",
    },
    {
      index: 1,
      title: "Foire aux poubelles",
      content: " attribute is necessary to make the div focusable",
    },
    {
      index: 2,
      title: "Foire aux culs",
      content: " attribute is necessary to make the div focusable",
    },
  ];

  return (
    <div>
      <Article />

      <div className="my-8">
        {collapses.map((collapse) => (
          <Faq collapse={collapse} key={collapse.index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
