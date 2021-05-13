import React from 'react';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent(props) {
    let input = React.createRef();
    
    return (
        <>
            <div ref={input} className="typewriter-color is-size-4 has-text-weight-light has-text-centered">
                <Typewriter
                    options={{
                        strings: props.text,
                        autoStart: true,
                        loop: true,
                        pauseFor: 700,
                    }}
                />
            </div>

            <style jsx>{`
                .typewriter-color {
                    color: ${ props.color }
                };

            `}</style>
        </>
    )
}
