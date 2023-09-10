import Image from 'next/image';

const BookImage = (props: { url: string }) => {
  return (
    <div className="border-2 mt-4">
      <Image src={props.url} alt="book-image" width={128} height={198} />
    </div>
  );
} ;

export default BookImage;