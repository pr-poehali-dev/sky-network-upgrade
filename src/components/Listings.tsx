import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Property {
  id: number;
  title: string;
  address: string;
  price: string;
  phone: string;
  images: string[];
  tags: string[];
  features?: string[];
}

function PropertyCard({ obj }: { obj: Property }) {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="bg-white group overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden h-64">
        <img
          src={obj.images[activePhoto]}
          alt={obj.title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {obj.images.length > 1 && (
          <>
            <button
              onClick={() => setActivePhoto((p) => (p - 1 + obj.images.length) % obj.images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-8 h-8 flex items-center justify-center transition-colors"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>
            <button
              onClick={() => setActivePhoto((p) => (p + 1) % obj.images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-8 h-8 flex items-center justify-center transition-colors"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {obj.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === activePhoto ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {obj.tags.map((tag) => (
            <span key={tag} className="text-xs uppercase tracking-wide bg-neutral-100 text-neutral-600 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-1">{obj.title}</h3>
        <p className="text-neutral-500 text-sm mb-3">{obj.address}</p>
        {obj.features && (
          <ul className="text-neutral-500 text-xs mb-4 space-y-1">
            {obj.features.map((f) => (
              <li key={f} className="flex items-center gap-1">
                <Icon name="Check" size={12} />
                {f}
              </li>
            ))}
          </ul>
        )}
        <p className="text-2xl font-bold text-neutral-900 mb-6">{obj.price}</p>
        <a
          href={`tel:${obj.phone.replace(/\s|-/g, "")}`}
          className="block w-full text-center bg-black text-white py-3 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors duration-300"
        >
          Позвонить: {obj.phone}
        </a>
      </div>
    </div>
  );
}

export default function Listings() {
  const objects: Property[] = [
    {
      id: 1,
      title: "Жилой дом",
      address: "г. Иловайск, ул. Коммунистическая",
      price: "2 100 000 ₽",
      phone: "+7 949 368-43-41",
      images: [
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/cac8d067-62bc-4692-9c5b-eaad830715dc.jpg",
      ],
      tags: ["Дом", "Продажа"],
    },
    {
      id: 2,
      title: "Дом с автономным отоплением",
      address: "г. Иловайск, ул. Гвардейская",
      price: "2 600 000 ₽",
      phone: "+7 949 087-60-65",
      images: [
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/96831a18-d5fd-4ebe-976d-f085ad6312e2.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/92fcfc9d-2f37-4bb4-8e43-c2300e4a1422.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/d2133f03-f87b-40ba-985a-02b7fde0effa.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/85dd3599-a06c-434f-aeaa-946b354796c8.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/c6b78346-5a4e-4df3-8926-d08fafd58a69.jpg",
      ],
      tags: ["Дом", "Продажа", "Автономное отопление"],
      features: ["Зал, спальня, кухня, ванная, гардеробная", "Сауна, спортзал, котельная", "Просторный двор с мощением", "Автономное отопление"],
    },
    {
      id: 3,
      title: "Дом с ремонтом",
      address: "г. Иловайск, ул. Войкова",
      price: "5 000 000 ₽",
      phone: "+7 949 087-60-65",
      images: [
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/a32f0c5d-0138-4ba3-9856-52c3b4f83d78.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/4b579605-b304-4d8f-afb0-6e696a4fcf15.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/7d7b93f5-6461-4a0b-bcc7-1e71e92d4604.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/cdf19cdf-1148-467c-9852-e6e2648948ef.jpg",
        "https://cdn.poehali.dev/projects/8bb11961-3f52-49a1-b812-c28d483a307b/bucket/c2b206f0-3ac3-4a2f-be95-84d33665f62e.jpg",
      ],
      tags: ["Дом", "Продажа", "С ремонтом"],
      features: ["Евроремонт, новый ламинат, лепнина", "Зал с камином, спальня, ванная", "Современная сантехника", "Ухоженный двор"],
    },
  ];

  return (
    <section id="objects" className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-3">Актуальные предложения</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-12">Объекты в продаже</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {objects.map((obj) => (
            <PropertyCard key={obj.id} obj={obj} />
          ))}
        </div>
      </div>
    </section>
  );
}