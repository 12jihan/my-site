import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypewriterComponent from '../components/TypewriterComponent';
import GithubHomeComponent from '../components/GithubHomeComponent';

export default function Home() {
  const titles = [
    'Software Engineer',
    'Content Creator',
    'Tech Enthusiast'
  ]

  return (
    <>
      <div className="hero has-background-dark is-medium is-primary">
        <div className="hero-body">
          <p className="title has-text-centered has-text-weight-light is-size-1">
            Jareem E. Hoff
          </p>
          <TypewriterComponent text={titles} />
        </div>
      </div>



      <div className="container-fluid">
        <div className="columns is-multiline is-centered mt-6">

          <div className="column is-6">
            <div className="has-text-centered mb-5">
              <p className="title">Photo Here</p>
            </div>

            <div className="mb-6">
              <p className="is-size-4">Hello My name is Jareem and I'm a software engineer based out of New York City.
              When I'm not busy working with other companies and really cool projects.
          I'm usually working on my own ideas. I have a very diverse skill set ranging from designer to full on Web engineer front to back, and take pleasure in learning new things everyday to expand my knowledge and further expand my capabilities as a software engineer.</p>
            </div>

            <div className="has-text-centered">
              <div className="mb-5">
                <p className="is-size-4 has-text-weight-light">If you're interested in working together go ahead and click the button below!</p>
              </div>

              <div className="">
                <button className="button is-medium is-outlined is-rounded is-primary"> Contact Me!</button>
              </div>
            </div>
          </div>

          <div className="column is-12">
            <div className="has-text-centered">
              <p className="Title">I tend to try and keep people up to date on whatever it is that I work on.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
