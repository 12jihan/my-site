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
                    <div className="columns is-multiline ">
                        {
                            git_data.map((item) => {
                                console.log(item.name);

                                return (
                                    <div className="column is-12">
                                        <div className="columns">
                                            <div className="column is-1 has-text-centered">
                                                <a href={`https://github.com/12jikan/${item.name}/archive/refs/heads/${item.default_branch}.zip`}>
                                                    <FontAwesomeIcon 
                                                        icon={faArrowCircleDown} 
                                                    />
                                                </a>
                                            </div>

                                            <div className="column is-3">
                                                    <p>{item.name}</p>
                                            </div>

                                            <div className="column is-3">
                                            </div>

                                            <div className="column is-3">
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <style jsx>{`
                .table-container {
                    position: relative;
                    width: auto;
                    height: 300px;
                    overflow-x: hidden;
                    overflow-y: scroll;
                };
            `}</style>
        </>
    );
}

export default GithubHomeComponent;