import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TypewriterComponent from '../components/TypewriterComponent';

export default function Home() {
  const titles = [
    'Software Engineer',
    'Content Creator',
    'Tech Enthusiast'
  ]

  return (
    <>
      <div className="hero has-background-dark is-medium is-primary hero-header">
        <div className="hero-body">
          <p className="title has-text-centered has-text-weight-light is-size-1">
            Jareem E. Hoff
          </p>
          <TypewriterComponent text={titles} />
        </div>
      </div>

      <div className="container mt-6">
        <div className="columns">
          
          <div className="column is-6">
            <div className="columns is-multiline is-centered">    
              <div className="column is-12">
                <h1 className="title has-text-weight-medium">About Jareem</h1>
              </div>

              <div className="column is-12">
                <p className="is-size-5">Jareem Hoff is a web and software engineer based out of New York City, New York. He is currently working as a contract developer at ABC News. In his spare time he tries to further build up his skills as a software engineer, by planning out future applications that come to mind or working on personal projects all while reading up on new technologies and systems. Even though he spends most of his time as a web developer, he does work in other languages such as Java, Python, C++ and Golang, to try and understand programming from a deeper level. His pronouns are he/him.</p>
              </div>

            </div>
          </div>

          <div className="column is-6">
            <div className="columns is-multiline is-centered">
              <div className="column is-12">
                <h1 className="title has-text-weight-medium">Current Projects</h1>
              </div>

              <div className="column is-12">
                (git hub stuff here)
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-header {
          background-image: url("https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png");
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}
      </style>
    </>
  )
}
