import Article from "../components/Article";
import Faq from "../components/Faq";

function Home() {
  const collapses = [
    {
      index: 0,
      title: "Foire aux questions",
      title2: " comment tué un reptilien ?",
      content:
        "Les lasagnes composent la majeure partie de votre alimentation, et une déesse vêtue de coquillettes embellit tous vos songes ? Vous ne le savez pas encore, mais vous êtes un authentique pastafarien : un gourmand dévoué corps et âme à la pasta ! Apparue il y a une quinzaine d’années, l’église du pastafarisme se présente comme une religion un brin farfelue… et très engagée. Car en plus de valoriser la nouille dans tous ses états, la chapelle du spaghetti volant entend bien questionner les codes sur le ton de l'amusement.",
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
