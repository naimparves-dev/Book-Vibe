"use client";

import {
    createContext,
    ReactNode,
    useState,
    Dispatch,
    SetStateAction,
} from "react";

import { Book } from "@/Type/books.type";


interface BooksContextType {
    readBooks: Book[];
    setReadBooks: Dispatch<SetStateAction<Book[]>>;

    wishList: Book[];
    setWishlist: Dispatch<SetStateAction<Book[]>>;
}


export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    setReadBooks: () => {},

    wishList: [],
    setWishlist: () => {},
});


const BooksProvider = ({ children }: { children: ReactNode }) => {

    const [readBooks, setReadBooks] = useState<Book[]>([]);

    const [wishList, setWishlist] = useState<Book[]>([]);


    const sharedData: BooksContextType = {
        readBooks,
        setReadBooks,
        wishList,
        setWishlist,
    };


    return (
        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};


export default BooksProvider;