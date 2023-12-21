import React from 'react'
function Size(props) {

    function setSize(func) {
        switch (func) {
            case 'increase':
                {
                    if (props.size < 100) {
                        props.addUndo(() => { props.setsize(props.size) })
                        props.setsize(parseInt(props.size) + 6)
                    }
                } break;

            case 'decrease':
                {
                    if (props.size > 8) {
                        props.addUndo(() => { props.setsize(props.size) })
                        props.setsize(parseInt(props.size) - 6)
                    }
                } break;
        }
    }
    return (<><button className='key' onClick={() => setSize('increase')}>increase Font Size</button>
        <button className='key' onClick={() => setSize('decrease')}>decrease Font Size</button></>)
}
export default Size;