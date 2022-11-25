import React from "react";

const HtmlLangList = ({ list }) => {
    return (
        <div className="mx-auto text-slate-100 font-recursive">
                <table class="table-auto text-left border-b border-emerald-200 mx-auto">
                <thead className="text-lg border-b hover:bg-slate-700 hover:cursor-pointer border-emerald-200">
                    <tr>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Culture</th>
                        <th scope="col" className="px-6 py-3">Specific Culture</th>
                        <th scope="col" className="px-6 py-3">English Name</th>
                    </tr>
                </thead>
                {list.map((htmlLang, index) => (
                <tbody key={index}>
                    <tr className="hover:bg-slate-700 hover:cursor-pointer">
                        <td className="px-6 py-2">{htmlLang.id}</td>
                        <td className="px-6 py-2">{htmlLang.culture}</td>
                        <td className="px-6 py-2">{htmlLang.specCulture}</td>
                        <td className="px-6 py-2">{htmlLang.englishName}</td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
    );
};

export default HtmlLangList;