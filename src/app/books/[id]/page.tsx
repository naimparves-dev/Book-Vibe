import ReadButton from "@/component/BookDetails/readButton";
import WishListButton from "@/component/BookDetails/WishListButton";
import { Book } from "@/Type/books.type";
import Image from "next/image";

interface IbookDetailsPage {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise<Book[]> => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();

    return data;
};

const BookDetailsPage = async ({ params }: IbookDetailsPage) => {
    const { id } = await params;

    const bookData = await getBooks();

    const book = bookData.find(
        (book: Book) => book.bookId === Number(id)
    );

    if (!book) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-700">
                    Book not found
                </h2>
            </div>
        );
    }

    return (
        <div className="max-w-[1200px] mx-auto px-5 py-12">

            {/* Main Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Book Image */}
                <div className="bg-[#F3F3F3] rounded-2xl min-h-[520px] flex items-center justify-center p-10">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={320}
                        height={450}
                        className="max-h-[450px] w-auto object-contain rounded-lg"
                    />
                </div>

                {/* Book Information */}
                <div>

                    {/* Category */}
                    <span className="inline-block bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                        {book.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-5 leading-tight">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="text-lg text-gray-500 mt-3">
                        By{" "}
                        <span className="font-semibold text-gray-700">
                            {book.author}
                        </span>
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mt-5">
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-500 text-2xl">
                                ★
                            </span>

                            <span className="text-xl font-bold">
                                {book.rating}
                            </span>
                        </div>

                        <span className="text-gray-400">
                            •
                        </span>

                        <span className="text-gray-500">
                            {book.totalPages} Pages
                        </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="border border-green-200 text-green-600 px-4 py-2 rounded-lg text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-7"></div>

                    {/* Book Info */}
                    <div className="grid grid-cols-2 gap-y-5">

                        <div>
                            <p className="text-sm text-gray-400">
                                Publisher
                            </p>

                            <p className="font-semibold text-gray-800 mt-1">
                                {book.publisher}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Year of Publishing
                            </p>

                            <p className="font-semibold text-gray-800 mt-1">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Total Pages
                            </p>

                            <p className="font-semibold text-gray-800 mt-1">
                                {book.totalPages}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400">
                                Category
                            </p>

                            <p className="font-semibold text-gray-800 mt-1">
                                {book.category}
                            </p>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8">

                        <WishListButton book={book}></WishListButton>
                        <ReadButton book={book}></ReadButton>
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className="mt-16 bg-[#F8F8F8] rounded-2xl p-8">

                <h2 className="text-2xl font-bold text-gray-900">
                    About this book
                </h2>

                <p className="text-gray-600 leading-7 mt-4">
                    {book.review}
                </p>

            </div>

        </div>
    );
};

export default BookDetailsPage;