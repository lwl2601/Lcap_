import React, { useState } from "react";

interface AlbumFormProps {
  onSubmit: (album: {
    title: string;
    location: string;
    date: string;
    imageUrl: string;
    price: number;
  }) => void;
}

const AlbumForm: React.FC<AlbumFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    onSubmit({ title, location, date, imageUrl, price });
  };

  return (
    <div className="p-4 border rounded-md shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Criar Novo Álbum</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Título</label>
        <input
          type="text"
          className="w-full border rounded-md p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Localização</label>
        <input
          type="text"
          className="w-full border rounded-md p-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Data</label>
        <input
          type="date"
          className="w-full border rounded-md p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">URL da Imagem</label>
        <input
          type="text"
          className="w-full border rounded-md p-2"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium mb-1">Preço</label>
        <input
          type="number"
          className="w-full border rounded-md p-2"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Publicar Álbum
      </button>
    </div>
  );
};

const AlbumGallery: React.FC = () => {
  const [albums, setAlbums] = useState<
    {
      title: string;
      location: string;
      date: string;
      imageUrl: string;
      price: number;
    }[]
  >([]);

  const handleAddAlbum = (newAlbum: {
    title: string;
    location: string;
    date: string;
    imageUrl: string;
    price: number;
  }) => {
    setAlbums([...albums, newAlbum]);
  };

  return (
    <div className="space-y-4">
      <AlbumForm onSubmit={handleAddAlbum} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {albums.map((album, index) => (
          <div
            key={index}
            className="relative block overflow-hidden rounded-lg shadow-md"
          >
            <img
              className="object-cover w-full h-full"
              src={album.imageUrl}
              alt={album.title}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{album.title}</h3>
              <p className="text-sm">{album.location}</p>
              <p className="text-sm">{album.date}</p>
              <p className="text-lg font-bold">R$ {album.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumGallery;
