"use client";

import { BooksContext } from "@/app/Context/BooksContext";
import { Book } from "@/Type/books.type";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface WishListButtonProps {
    book: Book;
}

const WishListButton = ({ book }: WishListButtonProps) => {
    const { wishList, setWishlist } = useContext(BooksContext);

    const handleWishlist = () => {
        const alreadyAdded = wishList.some(
            (wishBook) => wishBook.bookId === book.bookId
        );

        if (alreadyAdded) {
            toast.warning(`${book.bookName} is already in wishlist`);
            return;
        }

        setWishlist([...wishList, book]);

        toast.success(`${book.bookName} Added to wishlist`);
    };

    return (
        <button
            onClick={handleWishlist}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition"
        >
            Wishlist
        </button>
    );
};

export default WishListButton;