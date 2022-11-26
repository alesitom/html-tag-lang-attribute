import React from "react";

const HtmlLangList = ({ list }) => {
    return (
        <div className="container text-center">
            <div className="row">
            <div class="col-10  mx-auto">
            <table class="table table-dark table-hover">
                <thead>
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