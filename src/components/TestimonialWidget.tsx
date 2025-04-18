import React from 'react'
import Image from 'next/image';

interface reviewProps{
    imageUrl : string,
    name : string,
    service : string,
    comment : string,
    stars : number
}

const TestimonialWidget = ({review} : {review : reviewProps}) => {
  return (
    <div className="rounded-lg border p-6">
    <div className="flex items-start gap-4">
      <div className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image src={review.imageUrl} alt="Client" fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-medium">{review.name}</h3>
        <p className="text-sm text-muted-foreground">{review.service}</p>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-muted-foreground">
        {review.comment}
      </p>
    </div>
    <div className="mt-4 flex text-primary">
      {[...Array(review.stars)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  </div>
  )
}

export default TestimonialWidget