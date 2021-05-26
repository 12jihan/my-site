import TypewriterComponent from '../components/TypewriterComponent';
import React, { useEffect } from 'react';
import Link from 'next';

import GithubHomeComponent from '../components/GithubHomeComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import axios from 'axios';



export const getStaticProps = async () => {
  const res = await axios.get('https://api.github.com/users/12jikan/repos');
  const data = await res.data

  return {
    props: {
      gitProfile: data
    }
  }
};

export default function Home(props) {
  const titles = [
    'Software Engineer',
    'Content Creator',
    'Tech Enthusiast'
  ];

  let github_data = props.gitProfile;

  const darkColor = '#363636';
  const lightColor = '#e0e0e0';

  {/* <TypewriterComponent text={titles} /> */ }

  {/* <div className="container">
        <Particles 
          params={Particle_Config} 
          // height="500px" 
          // width="500px" 
          style={canvas_style}
        />
      </div> */}

  return (
    <>
      <section className="hero is-halfheight hero-header hero-bg">
        <div className="hero-body">
          <div className="container has-text-centered">
            <img className="logoImage" src={`/nameLogoLight.png`} />
            <TypewriterComponent text={titles} color={'#e0e0e0'} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="columns">
            <div className="column is-12">
              <div className="columns is-multiline">

                <div className="column section-title-dark">
                  <h1 className="">About</h1>
                </div>

                <div className="column is-12">
                  <p className="is-size-5">Jareem Hoff is a web and software engineer based out of New York City, New York. He is currently working as a contract developer at ABC News. In his spare time he tries to further build up his skills as a software engineer, by planning out future applications that come to mind or working on personal projects, all while reading up on new technologies and systems. Even though he spends most of his time as a web developer, he does work in other languages such as Java, Python, C++ and Golang, to try and understand programming from a deeper level.</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="columns">
            <div className="column is-12">
              <div className="columns is-multiline">

                <div className="column section-title-dark">
                  <h1 className="">Projects</h1>
                </div>

                <div className="column is-12">
                  <GithubHomeComponent git={github_data} />
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="section social-media-section">
        <div className="container">
          <div className="columns is-multiline mt-6 mb-6">
            <div className="column is-12">
              <p className="has-text-centered is-size-5 light-text mb-5">Let's Connect</p>
            </div>

            <div className="column is-12 has-text-centered">
              <div className="columns is-multiline is-centered social-media-container">

                <div className="column is-12">
                  <div className="columns is-centered">

                    <div className="column is-1">
                      <a href="https://www.facebook.com/jareemh">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </div>

                    <div className="column is-1">
                      <a href="https://twitter.com/demigxod">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </div>

                    <div className="column is-1">
                      <a href="https://www.youtube.com/channel/UCpVjUcBeklDmisdtAt7lwQQ">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>

                    <div className="column is-1">
                      <a href="https://www.instagram.com/jxhoff/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>

                    <div className="column is-1">
                      <a href="https://github.com/12jikan/">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>

                    <div className="column is-1">
                      <a href="https://github.com/12jikan/">
                        <FontAwesomeIcon icon={faTiktok} />
                      </a>
                    </div>

                  </div>
                </div>

                <div className="column is-12 mt-6">
                  <div className="columns is-centered">
                    <div className="column is-3">
                      <button className="button is-small is-primary is-rounded is-outlined">Projects</button>
                    </div>
                    <div className="column is-3">
                      <Link href="/">
                        <button className="button is-small is-primary is-rounded is-outlined">Projects</button>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="section section-title-darker">
        <div className="container">
          <div className="columns is-centered">
            <div className="has-text-centered">
              <p>© 2021 by Jareem Hoff</p>
            </div>
          </div>
        </div>
      </section>







      <style jsx>{`
        .hero-bg {
          background-color: ${darkColor};
        };

        .name-title {
          font-family: Lombok;
          color: ${lightColor};
        };

        .about {
          background-color: ${darkColor};
        };

        .about-me {
          color: ${lightColor}
        };

        .section-title-dark {
          color: ${darkColor};
          font-size: 30px;
        };

        .section-title-darker {
          background-color: #131313;
        };

        .section-title-light {
          color: ${lightColor};
          font-size: 30px;
        };

        .social-media-section {
          background-color: ${darkColor};
        };

        .social-media-container a {
          position: relative;
          bottom: 0px;
          color: #999;
          font-size: 30px;
          transition: color 0.5s, bottom 0.2s;
          // transition: ;
        }
        .social-media-container a:hover {
          color: #e0e0e0;
          bottom: 10px;
        }

        .light-text {
          color: #e0e0e0;
        };

        
      `}
      </style>
    </>
  )
}
