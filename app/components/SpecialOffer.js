
export default function SpecialOffer({ content }) {


  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
 {/* ----- HEADER & TEXT FROM CONTENTSTACK (I hope)----- */}
          <h5
            className="mt-8 text-2xl font-bold text-center tracking-widest text-neutral-700"
            {...content?.$?.single_line }
          >
            {content.single_line}
          </h5>
        </div>
      </div>
    </div>
  );
}
