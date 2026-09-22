"use client";

import React, { useContext } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    LabelProps,
    BarShapeProps,
} from "recharts";

import { BooksContext } from "../Context/BooksContext";
import { Book } from "@/Type/books.type";


// Different color for each book
const colors = [
    "#3B82F6",
    "#14B8A6",
    "#FBBF24",
    "#FB923C",
    "#EF4444",
    "#8B5CF6",
];


// Curved bar shape
const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
) => {
    return `
        M ${x},${y + height}

        C ${x + width / 3},${y + height}
          ${x + width / 2},${y + height / 3}
          ${x + width / 2},${y}

        C ${x + width / 2},${y + height / 3}
          ${x + (2 * width) / 3},${y + height}
          ${x + width},${y + height}

        Z
    `;
};


// Custom curved bar
const CurvedBar = (props: BarShapeProps) => {
    const {
        x,
        y,
        width,
        height,
        index = 0,
    } = props;

    const color = colors[index % colors.length];

    return (
        <path
            d={getPath(
                Number(x),
                Number(y),
                Number(width),
                Number(height)
            )}
            fill={color}
        />
    );
};


// Label above each bar
const CustomLabel = (props: LabelProps) => {
    const index = props.index ?? 0;

    return (
        <text
            x={props.x}
            y={props.y}
            fill={colors[index % colors.length]}
            textAnchor="middle"
            fontSize={11}
            fontWeight="600"
        >
            {props.value}
        </text>
    );
};


const StatisticsPage = () => {

    const { readBooks } = useContext(BooksContext);


    // Chart data
    const chartData = readBooks.map((book: Book) => ({
        name:
            book.bookName.length > 14
                ? book.bookName.slice(0, 14) + "..."
                : book.bookName,

        pages: book.totalPages,
        rating: book.rating,
        year: book.yearOfPublishing,
    }));


    // Total pages
    const totalPages = readBooks.reduce(
        (total: number, book: Book) =>
            total + book.totalPages,
        0
    );


    // Average rating
    const averageRating =
        readBooks.length > 0
            ? (
                  readBooks.reduce(
                      (total: number, book: Book) =>
                          total + book.rating,
                      0
                  ) / readBooks.length
              ).toFixed(1)
            : "0";


    return (
        <div className="w-[82%] mx-auto my-10">

            {/* Heading */}
            <div className="bg-[#f5f5f5] rounded-2xl h-[180px] flex items-center justify-center mb-10">
                <h1 className="text-[40px] font-bold">
                    Statistics
                </h1>
            </div>


            {readBooks.length === 0 ? (

                <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold text-gray-700">
                        No Read Books Yet
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Add some books to see your reading statistics.
                    </p>
                </div>

            ) : (

                <>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

                        <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                            <p className="text-gray-500">
                                Read Books
                            </p>

                            <h2 className="text-3xl font-bold text-green-600 mt-2">
                                {readBooks.length}
                            </h2>
                        </div>


                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                            <p className="text-gray-500">
                                Total Pages
                            </p>

                            <h2 className="text-3xl font-bold text-blue-600 mt-2">
                                {totalPages}
                            </h2>
                        </div>


                        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6">
                            <p className="text-gray-500">
                                Average Rating
                            </p>

                            <h2 className="text-3xl font-bold text-yellow-600 mt-2">
                                ⭐ {averageRating}
                            </h2>
                        </div>

                    </div>


                    {/* Chart */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                        <h2 className="text-2xl font-bold text-center mb-2">
                            Pages Read Per Book
                        </h2>

                        <p className="text-gray-500 text-center mb-8">
                            A visual representation of your reading progress
                        </p>


                        <div className="w-full h-[450px]">

                            <ResponsiveContainer
                                width="100%"
                                height="100%"
                            >

                                <BarChart
                                    data={chartData}
                                    margin={{
                                        top: 30,
                                        right: 20,
                                        left: 0,
                                        bottom: 30,
                                    }}
                                    barCategoryGap="25%"
                                >

                                    <CartesianGrid
                                        strokeDasharray="2 3"
                                        vertical={true}
                                        opacity={0.4}
                                    />


                                    <XAxis
                                        dataKey="name"
                                        tick={{
                                            fontSize: 11,
                                            fill: "#555",
                                        }}
                                        tickLine={false}
                                        axisLine={false}
                                    />


                                    <YAxis
                                        tick={{
                                            fontSize: 11,
                                            fill: "#777",
                                        }}
                                        tickLine={false}
                                        axisLine={false}
                                    />


                                    <Tooltip
                                        cursor={{
                                            fill: "rgba(0,0,0,0.04)",
                                        }}
                                        contentStyle={{
                                            borderRadius: "10px",
                                            border: "none",
                                            boxShadow:
                                                "0 4px 15px rgba(0,0,0,0.1)",
                                        }}
                                        formatter={(value, name) => {

                                            if (name === "pages") {
                                                return [
                                                    `${value} Pages`,
                                                    "Total Pages",
                                                ];
                                            }

                                            return [value, name];
                                        }}
                                    />


                                    <Bar
                                        dataKey="pages"
                                        shape={CurvedBar}
                                        barSize={65}
                                    >

                                        <LabelList
                                            dataKey="pages"
                                            content={CustomLabel}
                                            position="top"
                                        />

                                    </Bar>

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </>

            )}

        </div>
    );
};

export default StatisticsPage;