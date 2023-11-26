import React from 'react'
import Key from '../Key/Key.jsx'
import SpecialKey from '../SpecialKey/SpecialKey.jsx'
import Language from '../Language/Language.jsx'


function Keyboard(props) {
const style=[props.color,props.fontFamily,props.fontSize]
    return (<>
        <div>
            <Key keyInput={props.qwerty_mapping[0]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[1]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[2]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[3]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[4]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[5]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[6]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[7]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[8]} language={props.language}  style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[9]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
        </div>
        <div>
            <Key keyInput={props.qwerty_mapping[10]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[11]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[12]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[13]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[14]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[15]} language={props.language }style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[16]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[17]} language={props.language}  style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[18]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[19]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
        </div>
        <div>
            <Key keyInput={props.qwerty_mapping[20]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[21]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[22]} language={props.language}  style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[23]} language={props.language}style={style}  output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[24]} language={props.language}  style={style}output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[25]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[26]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[27]} language={props.language}style={style}  output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[28]} language={props.language} style={style} output={props.output} setoutput={props.setoutput}></Key>
            <Key keyInput={props.qwerty_mapping[29]} language={props.language}style={style}  output={props.output} setoutput={props.setoutput}></Key>
        </div>
        <Language type="HEBREW"  language={props.setlanguage} />
        <Language type="ENGLISH" language={props.setlanguage} />
        <Language type="UPCASE" language={props.setlanguage} />
        <Language type="LOWCASE" language={props.setlanguage} />
        <SpecialKey output={props.output} setoutput={props.setoutput} type="Delete"></SpecialKey>
        <SpecialKey output={props.output} setoutput={props.setoutput} type="EnterLine"></SpecialKey>
        <SpecialKey output={props.output} setoutput={props.setoutput} type="Space"></SpecialKey>
        <SpecialKey  setColor={props.setColor}  type="Red" ></SpecialKey>
        <SpecialKey  setColor={props.setColor} type="Green" ></SpecialKey>
        <SpecialKey  setfontSize={props.setSize}  type='12' ></SpecialKey>
        <SpecialKey  setfontSize={props.setSize}  type='20' ></SpecialKey>
        <SpecialKey setfontFamily={props.setfontFamily} type='Roboto Mono'></SpecialKey>

    </>
    )
}
export default Keyboard