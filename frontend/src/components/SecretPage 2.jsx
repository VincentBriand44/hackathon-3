function SecretPage() {
  return (
    <>
      <div className="ml-4 text-3xl">
        <h1>A propos de nous ! 🤣❤️🥰</h1>
      </div>
      <div className="mt-12 ml-4 text-xl">
        <h2>Allez ! Petit fou rire ?</h2>
      </div>
      <div className="flex justify-around mt-8">
        <video
          className="rounded-3xl"
          autoPlay
          muted
          loop
          width="400"
          height="400"
        >
          <source
            src="https://cdn.discordapp.com/attachments/963712954681917459/1005045982561566792/f66f224a-6074-477e-8600-e1f18791a6c7.mp4"
            type="video/mp4"
          />
        </video>
        <video
          className="rounded-3xl"
          autoPlay
          muted
          loop
          width="400"
          height="400"
        >
          <source
            src="https://cdn.discordapp.com/attachments/963712954681917459/1004773556250480700/1659627016404.mp4"
            type="video/mp4"
          />
        </video>
        <video
          className="rounded-3xl"
          autoPlay
          muted
          loop
          width="400"
          height="400"
        >
          <source
            src="https://cdn.discordapp.com/attachments/963712954681917459/1004733263794941972/reface-2022-08-04-02-45-52.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="flex justify-around mt-9">
        <video
          className="rounded-3xl"
          autoPlay
          muted
          loop
          width="400"
          height="400"
        >
          <source
            src="https://cdn.discordapp.com/attachments/963712954681917459/1004719874070822942/reface-2022-08-04-01-58-00.mp4"
            type="video/mp4"
          />
        </video>
        <video
          className="rounded-3xl"
          autoPlay
          muted
          loop
          width="400"
          height="400"
        >
          <source
            src="https://cdn.discordapp.com/attachments/963712954681917459/1004465780856979486/reface-2020-10-06-07-16-13.mp4"
            type="video/mp4"
          />
        </video>
        <video
          className="rounded-3xl"
          autoPlay
          muted
          loop
          width="400"
          height="400"
        >
          <source
            src="https://cdn.discordapp.com/attachments/963712954681917459/1004464773401940078/1659553328134.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div />
    </>
  );
}

export default SecretPage;
