"use client";

import React, { useContext, useState } from "react";
import { BooksContext } from "../Context/BooksContext";
import ListCard from "@/component/Shared/ListCard";

const ListedBooksPage = () => {
    const { readBooks, wishList } = useContext(BooksContext);

    const [sortBy, setSortBy] = useState<"rating" | "year" | "pages">("rating");

    // Sorting function
    const sortBooks = (books: typeof readBooks) => {
        return [...books].sort((a, b) => {
            if (sortBy === "rating") {
                return b.rating - a.rating;
            }

            if (sortBy === "year") {
                return b.yearOfPublishing - a.yearOfPublishing;
            }

            if (sortBy === "pages") {
                return b.totalPages - a.totalPages;
            }

            return 0;
        });
    };

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishList = sortBooks(wishList);

    return (
        <div className="w-[82%] mx-auto mt-8">

            {/* Page Heading */}
            <div className="bg-[#f5f5f5] rounded-2xl h-[180px] flex items-center justify-center">
                <h1 className="text-[40px] font-bold">
                    Books
                </h1>
            </div>


            {/* Sort */}
            <div className="flex justify-end mt-6">

                <select
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(
                            e.target.value as "rating" | "year" | "pages"
                        )
                    }
                    className="select select-success"
                >
                    <option value="rating">Rating</option>
                    <option value="year">Publish Year</option>
                    <option value="pages">Number of Pages</option>
                </select>

            </div>


            {/* Tabs */}
            <div className="tabs tabs-border mt-4">

                {/* ================= READ BOOKS ================= */}

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label="Read Books"
                    defaultChecked
                />

                <div className="tab-content border-base-300 bg-base-100 p-6">

                    {sortedReadBooks.length > 0 ? (
                        <div className="space-y-4">

                            {sortedReadBooks.map((book) => (
                                <ListCard
                                    key={book.bookId}
                                    book={book}
                                />
                            ))}

                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-10">
                            No read books found.
                        </p>
                    )}

                </div>


                {/* ================= WISHLIST ================= */}

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab"
                    aria-label="Wishlist"
                />

                <div className="tab-content border-base-300 bg-base-100 p-6">

                    {sortedWishList.length > 0 ? (
                        <div className="space-y-4">

                            {sortedWishList.map((book) => (
                                <ListCard
                                    key={book.bookId}
                                    book={book}
                                />
                            ))}

                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-10">
                            No books in wishlist.
                        </p>
                    )}

                </div>

            </div>
        </div>
    );
};

export default ListedBooksPage;