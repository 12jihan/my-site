import React from 'react';
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function TypewriterComponent(props) {
    let input = React.createRef();
    
    function type() {
        console.log('hello world!')
    };

    return (
        <div ref={ input } className="has-text-black is-size-4 has-text-weight-light has-text-centered">
            <Typewriter 
                options={{
                    strings: props.text,
                    autoStart: true,
                    loop: true,
                    pauseFor: 800,
                }}
            />
        </div>
    )
}
