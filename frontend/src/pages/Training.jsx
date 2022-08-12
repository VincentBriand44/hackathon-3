import TrainingCarousel from "../components/TrainingCarousel";

function Training() {
  const valid = true;

  const sections = [
    {
      index: 0,
      title: "Introduction",
      content: "This is the first section of the training.",
      image: "https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2",
    },
    {
      index: 1,
      title: "Introzefduction",
      content: "This i<qszg<szs the first section of the training.",
      image: "https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2",
    },
  ];
  if (valid) {
    return (
      <>
        <h1 className="mt-8 text-xl font-bold text-center">
          Attention à ne pas les croiser.
        </h1>

        <TrainingCarousel />

        {sections.map((section, index) => (
          <div
            key={section.index}
            className={`flex my-8 ${index % 2 && "flex-row-reverse"}`}
          >
            <aside className="w-2/3 text-center">
              <h2 className="mb-4 text-2xl font-bold text-center">
                {section.title}
              </h2>
              <p className="mx-4">{section.content}</p>
            </aside>
            <img
              src={section.image}
              alt={section.title}
              className="object-cover w-1/3 h-56 rounded-xl"
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
