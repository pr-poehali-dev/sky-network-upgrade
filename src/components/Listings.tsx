export default function Listings() {
  const objects = [
    {
      id: 1,
      title: "Жилой дом",
      address: "г. Иловайск, ул. Коммунистическая",
      price: "2 100 000 ₽",
      phone: "+7 949 368-43-41",
      image: "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/cac8d067-62bc-4692-9c5b-eaad830715dc.jpg",
      tags: ["Дом", "Продажа"],
    },
  ];

  return (
    <section id="objects" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Актуальные предложения</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-12">Объекты в продаже</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objects.map((obj) => (
            <div key={obj.id} className="bg-white group overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="overflow-hidden h-64">
                <img
                  src={obj.image}
                  alt={obj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {obj.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-wide bg-neutral-100 text-neutral-600 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-1">{obj.title}</h3>
                <p className="text-neutral-500 text-sm mb-4">{obj.address}</p>
                <p className="text-2xl font-bold text-neutral-900 mb-6">{obj.price}</p>
                <a
                  href={`tel:${obj.phone.replace(/\s|-/g, "")}`}
                  className="block w-full text-center bg-black text-white py-3 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300"
                >
                  Позвонить: {obj.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
