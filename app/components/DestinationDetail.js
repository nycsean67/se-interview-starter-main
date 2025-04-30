import Image from 'next/image';

const   DestinationDetail = ({destination }) => {
    const {
        image = '/paris.jpg', // Default image if none is provided
        title = 'Destination',
        description = 'No Description Available',
        highlights = [], 
    } = destination || {};

return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Image on the left */}
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Text content on the right */}
    <div className="space-y-4">
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      
      {highlights.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Highlights</h3>
          <ul className="list-disc pl-5 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);
};

export default DestinationDetail;