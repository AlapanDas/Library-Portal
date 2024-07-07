'use client'
import React, { useEffect, useState } from "react";
import Loader from '@/app/components/Loader';

export default function Card() {
  const [dataJson, setDataJson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://library-management-system-atcq.onrender.com/books/getBooks');
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        setDataJson(data);
      } catch (err) {
        console.error("Error fetching data:", err); // Log the error details
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addBook = (isbn) => {
    // Implement addBook logic using isbn
  };

  const saveBook = (bookData) => {
    // Implement saveBook logic using bookData
  };

  return (
    <div className="ms-6 mt-6">
      {isLoading ? (
        <Loader /> // Use the Loader component for a more user-friendly experience
      ) : dataJson && (
        <div key="card-container" className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center align-middle gap-y-4">
          {dataJson.map((book, index) => (
            <div
              key={book.id || index} // Use a unique identifier (preferably book.id) for each book
              className="border border-black w-60 p-2 shadow-xl align-middle rounded-2xl"
            >
              <img src={book.url} className="shadow" alt="Cover Image" />
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-heading font-semibold text-xs">{book.Name}</p>
                <p className="text-text font-semibold text-xs">{book.ISBN}</p>
                <div className="flex justify-between">
                  <button onClick={() => addBook(book.ISBN)} className="p-1 rounded bg-heading font-poppins font-semibold text-text text-sm m-2 shadow-md">Add</button>
                  <button onClick={() => saveBook(book)} className="p-1 rounded bg-heading font-poppins font-semibold text-text text-sm m-2 shadow-md">Save</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
