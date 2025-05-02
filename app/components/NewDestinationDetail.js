import Image from 'next/image';

export default function NewDestinationDetail({ content }) {

  return (
  

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {console.log('This log happens during render',content)}
        {/* Image on the left */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
      {console.log('Looking for the image url', content.image.url)}
     <img src={content?.image?.url} className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-75"/> 
     


       </div>
       {/* Text content on the right */}
       <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">{content.header}</h2>
          <p className="text-gray-700">{content.description}  </p>
      

    </div>
    </div>
 
  );
}
