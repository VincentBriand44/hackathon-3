const request = indexedDB.open("scr", 1);
let db;

request.onupgradeneeded = () => {
  db = request.result;
  const store = db.createObjectStore("cart", {
    keyPath: "id",
    autoIncrement: true,
  });
  db.createObjectStore("inventory", { keyPath: "id", autoIncrement: true });

  // const items = [
  //   {
  //     title: "Kit de combat",
  //     price: 100,
  //     link: "combat-kit",
  //   },
  //   {
  //     title: "Guide du parfait chasseur de reptiles",
  //     price: 20,
  //     link: "guide-hunter",
  //   },
  //   {
  //     title: "Liste des reptiliens connus",
  //     price: 15,
  //     link: "list-rep",
  //   },
  // ];

  // items.map((item, index) =>
  //   store.add({
  //     id: index,
  //     title: item.title,
  //     price: item.price,
  //     link: item.link,
  //   })
  // );
};

// eslint-disable-next-line no-return-assign
request.onsuccess = () => (db = request.result);

request.onblocked = () =>
  // eslint-disable-next-line no-alert
  alert("Please close all other tabs with this site open!");
