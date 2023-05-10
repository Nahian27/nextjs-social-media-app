import Layout from "../components/Layout";
import Card from "../components/Card";
import {data} from "../contexts/data";
import {useState} from "react";

export default function Search() {

    const [search,setSearch]=useState('')
    return (
        <Layout hideNavigation={false}>
            <div className="sticky top-0 bg-gray-950 py-3">
                <h1 className="text-6xl mb-4 text-white-300">Search</h1>
                <h5 className="mb-4 ms-1 text-slate-500">Search for skills</h5>
                <div className="mb-3">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="relative m-0 -mr-0.5 block placeholder:text-slate-600 w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-400 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-slate-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none border-slate-600"
                            placeholder="php, react, creative, etc."
                            aria-label="Search"
                            aria-describedby="button-addon1"
                            onChange={(e)=>setSearch(e.target.value)}
                        />

                        <button
                            className="relative z-[2] flex items-center rounded-r bg-slate-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg"
                            type="button"
                            id="button-addon1"
                            data-te-ripple-color="light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fill-rule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Card noPadding={false}>
                <div className="flex flex-col">
                    <div className="overflow-x-scroll">
                        <div className="inline-block min-w-full py-2">
                            <div className="overflow-hidden">
                                <table className="text-left">
                                    <thead className="border-b-2 border-slate-500 font-medium">
                                    <tr>
                                        <th scope="col" className="px-4 py-5">#</th>
                                        <th scope="col" className="px-4 py-5">Full Name</th>
                                        <th scope="col" className="px-4 py-5">Skill</th>
                                        <th scope="col" className="px-4 py-5">Years of experience</th>
                                        <th scope="col" className="px-4 py-5">Education</th>
                                        <th scope="col" className="px-4 py-5">Phone No.</th>
                                        <th scope="col" className="px-4 py-5">Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.filter((item)=>{
                                            return search.toLowerCase()==='' ? item: item.Skills.toLowerCase().includes(search)
                                            }
                                        ).map(item => (
                                                <tr className="border-b border-slate-700 transition duration-300 ease-in-out hover:bg-slate-700" key={item.id}>
                                                    <td className="whitespace-nowrap px-4 py-5 font-medium">{item.id}</td>
                                                    <td className="whitespace-nowrap px-4 py-5 font-medium">{item.full_name}</td>
                                                    <td className="whitespace-nowrap px-4 py-5 font-medium">{item.Skills}</td>
                                                    <td className="whitespace-nowrap px-4 py-5 font-medium">{item.years_of_experience}</td>
                                                    <td className="whitespace-nowrap px-4 py-5 font-medium">{item.education}</td>
                                                    <td className="whitespace-nowrap px-4 py-5 font-medium">{item.phone_number}</td>
                                                    <td className="whitespace-nowrap px-4 py-5 font-medium">{item.email}</td>
                                                </tr>
                                            )
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Layout>
    );
}