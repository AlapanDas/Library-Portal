'use client'
import React, { useEffect, useState } from "react";
import Loader from '@/app/components/Loader'
import loader from '@/public/loader.jpg'


export default function Card() {

  const [dataJson, setDataJson] = useState(null); // Initialize dataJson to null
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      try {
        const response = await fetch('https://library-management-system-atcq.onrender.com/books/getBooks');
        if (!response.ok) {
          throw new Error('API request failed');
        }
        const data = await response.json();
        setDataJson(data);
      } catch (err) {
        console.log("Error");
      } finally {
        setIsLoading(false); // Set loading state to false regardless of success/error
      }
    };

    fetchData(); // Call the fetch function within useEffect
  }, []);
  function addBook() {


  }
  function saveBook() {

  }

  return (
    <div className="ms-6 mt-6">
      {isLoading ? (
        <img width={500} className="mx-auto rounded-3xl"  src={loader.src} alt="" />
      ) : dataJson ? (
        <ul> {/* Use an unordered list for better presentation */}
          <div className=" grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center align-middle gap-y-4">
            {dataJson.map((testdata) => (

              <div className="border border-black w-60 p-2 shadow-xl align-middle rounded-2xl">

                <img src={testdata.url} className="shadow" alt="Cover Image" />
                <div className="flex flex-col gap-2 mt-2 ">
                  <p className="text-heading font-semibold text-xs">{testdata.Name}</p>
                  <p className="text-text font-semibold text-xs">{testdata.ISBN}</p>
                  <div className="flex justify-between">
                    <button onClick={addBook(testdata.ISBN)} className="p-1 rounded bg-heading font-poppins font-semibold text-text text-sm m-2 shadow-md">Add</button>
                    <button onClick={saveBook(testdata)} className="p-1 rounded bg-heading font-poppins font-semibold text-text text-sm m-2 shadow-md">Save</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ul>
      ) : (
        <img width={500} className="mx-auto rounded-3xl " src={loader.src} alt="" />
      )}
    </div>
  )
}