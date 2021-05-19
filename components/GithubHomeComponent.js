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
                                    <th>Size</th>
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
                                                <td className="has-text-left">{Math.floor(item.size / 1000)}mb</td>
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