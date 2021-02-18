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
      <div className="hero has-background-dark is-medium is-primary">
        <div className="hero-body">
          <p className="title has-text-centered has-text-weight-light is-size-1">
            Jareem E. Hoff
          </p>          
          <TypewriterComponent  text={titles} />
        </div>
      </div>

      <div className="container">
        <div className="columns">
          <div className="column">
            <p>I tend to try and keep people up to date on whatever it is that I work on.</p>
          </div>
        </div>
      </div>
    </>
  )
}
