import BookImage from "./BookImage";


const BookImageList = (props: {list: string[]}) => {
    return (
        <div className="ml-8 mr-8 mt-8 flex flex-row gap-4 flex-wrap" >
        {props.list.map((url, index) => {
            console.log(index,url);
            return (            
            <div key={index}>
                <BookImage url={url} />
            </div>)
            })}
        </div>
    );
}

export default BookImageList;