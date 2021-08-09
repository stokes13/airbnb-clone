import Image from "next/image";
import { MenuIcon, SearchIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from "react-date-range";
import { useState } from 'react'



export default function Header() {

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => {
        setSearchInput('');
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">

            {/* left - image */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left'
                />
            </div>

            {/* middle - search */}
            <div className="flex items-center rounded-full p-2 md:border-2 md:shadow-sm">
                <input
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                    type='text'
                    placeholder="Start your Search"
                    className='pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400' />

                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer drop-shadow-sm mx-auto md:mx-1.5" />
            </div>

            {/* right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5b61"]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className="text-2xl font-semibold flex-grow">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input
                            value={noOfGuests}
                            onChange={e => setNoOfGuests(e.target.value)}
                            type="number"
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                        />
                    </div>
                    <div className="flex ">
                        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                        <button className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}

        </header>
    );
}


