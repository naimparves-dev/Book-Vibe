"use client";

import { BooksContext } from "@/app/Context/BooksContext";
import { Book } from "@/Type/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface ReadButtonProps {
    book: Book;
}

const ReadButton = ({ book }: ReadButtonProps) => {
    const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadBooks = () => {
        const alreadyRead = readBooks.some(
            (readBook) => readBook.bookId === book.bookId
        );

        if (alreadyRead) {
            toast.warning(`${book.bookName} is already in Listed Books`);
            return;
        }

        setReadBooks([...readBooks, book]);

        toast.success(`${book.bookName} Added to the Listed Books`);
    };

    return (
        <button
            onClick={handleReadBooks}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
        >
            Read Book
        </button>
    );
};

export default ReadButton;