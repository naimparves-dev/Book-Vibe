import { Book } from "@/Type/books.type";
import BookCard from "../Shared/bookCard";

const getBooks = async (): Promise<Book[]> => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/booksData.json`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch books");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error("Error fetching books:", error);

        return [];
    }
};

const Books = async () => {
    const bookData = await getBooks();

    return (
        <div className="max-w-[1200px] mx-auto my-10">

            <h2 className="text-3xl font-bold text-center mb-8">
                Popular Books
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookData.slice(0, 6).map((book) => (
                    <BookCard
                        key={book.bookId}
                        book={book}
                    />
                ))}
            </div>

        </div>
    );
};

export default Books;