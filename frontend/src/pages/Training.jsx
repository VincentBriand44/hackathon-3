import Section from "../components/Section";
import TrainingCarousel from "../components/TrainingCarousel";
function Training() {
  const valid = true;

  const sections = [
    {
      index: 0,
      title: "Mode de Communications",
      content:
        "S’ils sont interrogés, ils ne répondent qu’à ce à quoi ils choisissent de répondre ou pas du tout. Ceci est très facilement reconnaissable dans les communications par courrier électronique. Ce sont des experts en projet. Quels qu’ils soient, ils accusent les autres d’être / de faire. c’est-à-dire que s’ils ont une liaison, ils accuseront leur partenaire d’avoir une liaison. Les gens qui sont en relation avec des reptiliens se sentent souvent fous.",
      image:
        "https://images.pexels.com/photos/10216383/pexels-photo-10216383.jpeg",
    },
    {
      index: 1,
      title: "Technique de Manipulation",
      content:
        "Ce sont des manipulateurs experts. Ils laissent souvent de côté des informations cruciales plutôt que de mentir carrément parce qu’ils peuvent alors revenir et sembler irréprochables plus tard.",
      image: "https://images.pexels.com/photos/818563/pexels-photo-818563.jpeg",
    },
    {
      index: 2,
      title: "Les milieux",
      content:
        "- Policiers - Administrateurs - Banquiers - avocats/juges - les administrateurs - scolaires et souvent les enseignants - clergé (où il y a hiérarchie) - Politiciens.",
      image: "https://images.pexels.com/photos/270220/pexels-photo-270220.jpeg",
    },
    {
      index: 4,
      title: "Consommation d'énergie",
      content:
        " Les enfants leur fournissent une source de nourriture pure (énergie) et peuvent être utilisés comme appât pour attirer et détruire la lumière en étant parents. Ils sont très sexuels, car ce sont des vampires énergétiques et le sexe est l’un des moyens les plus faciles de récolter le champ d’énergie humain. Lorsqu’ils consomment de la viande, ils dégagent une odeur corporelle nauséabonde (cela commence à se produire lorsque la pleine possession reptilienne se produit).",
      image:
        "https://images.pexels.com/photos/12489156/pexels-photo-12489156.jpeg",
    },
  ];
  if (valid) {
    return (
      <>
        <h1 className=" text-center text-4xl mb-8 md:text-6xl uppercase ">
          Reconnaitre un reptilien
        </h1>
        <h2 className="mt-8 text-xl font-bold text-center">
          Attention à ne pas les croiser.
        </h2>

        <TrainingCarousel />
        <Section />

        {sections.map((section, index) => (
          <div
            key={section.index}
            className={`flex flex-col my-8 ${
              index % 2 && "md:flex-row-reverse"
            }`}
          >
            <aside className="w-full md:w-2/3 text-center">
              <h2 className="mb-4 text-2xl font-bold text-center">
                {section.title}
              </h2>
              <p className="mx-4">{section.content}</p>
            </aside>
            <img
              src={section.image}
              alt={section.title}
              className="object-cover w-full md:w-1/3 h-56 rounded-xl"
            />
          </div>
        ))}
      </>
    );
  }
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-center">
        Formation de Combat
      </h1>
      <p>Vous n'avez pas accès à cette page.</p>
    </div>
  );
}

export default Training;
