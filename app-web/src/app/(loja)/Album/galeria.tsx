import React from 'react';
import Album from './ft_buscar_fotos';

const AlbumGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Album
        title="Futsal Inter.cuité"
        location="Vidal de Negreiros, Cuité - PB"
        date="10 de Junho de 2024"
        imageUrl="https://d2hk32cswy6zx7.cloudfront.net/cc02a59dad297bbec51ab1e7ea4420a9/v2_1ccf1b60-63bb-4fff-b33e-e0718df1c371.jpg"
        link="/album/ae771-futsal-intercuite"
      />
      {/* Adicione mais álbuns conforme necessário */}
    </div>
  );
};

export default AlbumGallery;
