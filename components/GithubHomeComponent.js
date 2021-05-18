import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';



function GithubHomeComponent(props) {
    const git_data = props.git;

    useEffect(() => {
        console.log("git props: ", git_data);
    }, [])

    return (
        <>

            <div className="table-container">
                <div className="container-fluid">
                    {
                        <table className="table is-hoverable">
                            <thead className="">
                                <tr className="has-text-centered">
                                    <th>Index</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Size (kb)</th>
                                    <th>Language</th>
                                    <th>Forks</th>
                                    <th>Stars</th>
                                    <th>Download</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {
                                    git_data.map((item, index) => {
                                        console.log(item.name);
                                        return (
                                            <tr className="has-text-centered">
                                                <th>{index + 1}</th>
                                                <td className="has-text-left">{item.name}</td>
                                                <td className="has-text-left">{item.description}</td>
                                                <td className="has-text-left">{item.size / 1000}</td>
                                                <td className="has-text-left">{item.language}</td>
                                                <td>{item.forks}</td>
                                                <td>{item.stargazers_count}</td>
                                                <td>
                                                    <a className="download" href={`https://github.com/12jikan/${item.name}/archive/refs/heads/${item.default_branch}.zip`}>
                                                        <FontAwesomeIcon
                                                            icon={ faArrowCircleDown }
                                                        />
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        // return (
                        //     <div className="column is-12 table-item" key={index}>
                        //         <div className="columns">
                        //             <div className="column is-1">
                        //                 <p>{index + 1}.</p>
                        //             </div>

                        //             <div className="column is-3">
                        //                 <p>{item.name}</p>
                        //             </div>

                        //             <div className="column is-3">
                        //                 {item.language}
                        //             </div>

                        //             <div className="column is-3">
                        //             </div>

                        //             <div className="column is-1 has-text-centered">
                        //                 <a href={`https://github.com/12jikan/${item.name}/archive/refs/heads/${item.default_branch}.zip`}>
                        //                     <FontAwesomeIcon
                        //                         icon={faArrowCircleDown}
                        //                     />
                        //                 </a>
                        //             </div>
                        //         </div>
                        //     </div>
                        // );
                    }
                </div>
            </div>

            <style jsx>{`
                .table-container {
                    position: relative;
                    width: 100%;
                    height: 300px;
                    padding: 5px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    overflow-x: hidden;
                    overflow-y: scroll;
                };
                
                .table-container::-webkit-scrollbar {
                    display: none;
                };

                .table-item {
                    position: relative;

                };

                .table-item:hover {
                    background-color: #333;
                };

                .download {
                    color: #999;
                }
            `}</style>
        </>
    );
}

export default GithubHomeComponent;