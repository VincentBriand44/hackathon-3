import Article from "../components/Article";
import Faq from "../components/Faq";

function Home() {
  const collapses = [
    {
      index: 0,
      title: "D'où viennent les reptiliens ?",
      content:
        "Avant toute chose, il faut définir ce qu’est un Reptilien. Le concept est simple : il s’agit d’un reptile à taille humaine agissant et parlant comme nous. Selon cette théorie du complot, les Reptiliens seraient des extraterrestres originaires de la galaxie Draco pouvant prendre forme humaine. Il existerait un autre peuple reptilien qui, lui, viendrait du centre de la Terre et qui rejoint une autre théorie, celle de la Terre creuse. Les Reptiliens évolueraient donc au milieu de nous dans l’objectif du nous gouverner pour leur propre survie.",
    },
    {
      index: 1,
      title: "Qui sont les reptiliens ?",
      content:
        "En effet, les Reptiliens seraient parmi nos politiques, comme Barack Obama, Elisabeth II ou encore notre président Emmanuel Macron. Le peuple reptilien serait venu sur Terre pour nous gouverner. En effet, ils se nourrissent de nos énergies négatives, comme la colère. De ce fait, ils auraient créé un système gouvernemental pour pouvoir nous manipuler plus facilement, ainsi que nos émotions. Certaines autres célébrités ont été accusées d’être des Reptiliens : Katy Perry, Madonna ou Angelina Jolie. Rien n’a été affirmé. Les Reptiliens dominent l’humanité grâce à des capacités magiques, une intelligence supérieure ou encore par la télépathie.",
    },
    {
      index: 2,
      title: "Comment les reconnaitres ?",
      content:
        "Comment reconnaître un reptilien ? Selon les « spécialistes », certains signes ne trompent pas. Si votre suspect a des yeux verts qui changent de taille, les paupičres qui remuent, qu’il sort la langue souvent, qu’il a le sentiment de ne pas appartenir ŕ la race humaine ou des cicatrices inexpliquées sur le corps, une passion pour l’espace et une bonne vue, aucun doute, c’est une créature imaginaire représentée sous la forme de reptiles à l'allure humaine connue sous différents noms : #reptiliens, #reptoïdes, #dinosauroïdes. et c’est aussi la plus grande conspiration politique jamais inventée…",
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
