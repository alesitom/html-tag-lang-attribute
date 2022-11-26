import React from "react";

const HtmlLangList = ({ list }) => {
    return (
        <div className="mx-auto text-slate-100 font-recursive px-2">
            <div className="lg:table-auto lg:mx-auto overflow-auto hidden md:block">
                <table class="text-left border-b border-emerald-200">
                <thead className="text-lg border-b hover:bg-slate-700 hover:cursor-pointer border-emerald-200 hover:text-emerald-300">
                    <tr>
                        <th className="px-6 py-3 tracking-wide w-4">#</th>
                        <th className="px-6 py-3 tracking-wide w-10">Culture</th>
                        <th className="px-6 py-3 tracking-wide w-52">Specific Culture</th>
                        <th className="px-6 py-3 tracking-wide">English Name</th>
                    </tr>
                </thead>
                {list.map((htmlLang, index) => (
                <tbody key={index} className="divide-y">
                    <tr className="hover:bg-slate-700 hover:cursor-pointer hover:text-emerald-300 hover:font-bold">
                        <td className="px-6 py-2 text-md w-4 whitespace-nowrap">{htmlLang.id}</td>
                        <td className="px-6 py-2 text-md w-10 whitespace-nowrap">{htmlLang.culture}</td>
                        <td className="px-6 py-2 text-md w-52 whitespace-nowrap">{htmlLang.specCulture}</td>
                        <td className="px-6 py-2 text-md whitespace-nowrap">{htmlLang.englishName}</td>
                    </tr>
                </tbody>
                ))}
            </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-8">
            {list.map((htmlLang, index) => (
                <div className="border border-emerald-200 hover:text-emerald-300 p-4 py-8 my-2 space-y-4 rounded-lg">
                    <div key={index} className="items-center space-x-2 text-md">
                        <div><span className="font-bold text-slate-400">#</span> {htmlLang.id}</div>
                        <div><span className="font-bold text-slate-400">Culture:</span> {htmlLang.culture}</div>
                        <div><span className="font-bold text-slate-400">Specific Culture:</span> {htmlLang.specCulture}</div>
                        <div><span className="font-bold text-slate-400">English Name:</span> {htmlLang.englishName}</div>
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
    );
};

export default HtmlLangList;