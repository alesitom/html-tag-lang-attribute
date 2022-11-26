import React from "react";

const HtmlLangList = ({ list }) => {
    return (
        <div className="mx-auto text-slate-100 font-recursive">
                <table class="table-auto text-left border-b border-emerald-200 mx-auto">
                <thead className="text-lg border-b hover:bg-slate-700 hover:cursor-pointer border-emerald-200 hover:text-emerald-300 placeholder:">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Culture</th>
                    <th scope="col">Specific Culture</th>
                    <th scope="col">English Name</th>
                    </tr>
                </thead>
                {list.map((htmlLang, index) => (
                <tbody key={index}>
                    <tr>
                    <th scope="row">{htmlLang.id}</th>
                    <td data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip">{htmlLang.culture}</td>
                    <td>{htmlLang.specCulture}</td>
                    <td>{htmlLang.englishName}</td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
        </div>
        </div>
    );
};

export default HtmlLangList;