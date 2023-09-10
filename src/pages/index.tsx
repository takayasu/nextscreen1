import Image from 'next/image'
import HeaderTitle from '../components/HeaderTitle'
import SearchBox from '@/components/SearchBox';
import GuideColum from '@/components/GuideColum';
import SearchMethod from '@/components/SearchMethod';
import BookImage from '@/components/BookImage';
import BookImageList from '@/components/BookImageList';

const imageList = ['/book1.jpeg','/book1.jpeg','/book1.jpeg','/book1.jpeg',
        '/book1.jpeg','/book1.jpeg','/book1.jpeg','/book1.jpeg','/book1.jpeg'];

const IndexPage = () => {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <HeaderTitle />
      <SearchBox />
      <GuideColum />
      <SearchMethod />
      <BookImageList list={imageList}   />
    </div>
  );
}

export default IndexPage;

