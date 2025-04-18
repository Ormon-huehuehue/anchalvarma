import React from 'react'
import Image from 'next/image'

interface itemProps{
    imageUrl : string,
    title : string,
    caption : string
}

const PortfolioWidget = ({item} : {item : itemProps}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
    <div className="aspect-square w-full overflow-hidden">
    <Image
        src={item.imageUrl}
        alt={`Makeup portfolio item`}
        width={600}
        height={600}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    </div>
    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
      <div>
        <h3 className="font-medium text-white">{item.title} </h3>
        <p className="text-sm text-white/80">{item.caption}</p>
      </div>
    </div>
  </div>
  )
}

export default PortfolioWidget