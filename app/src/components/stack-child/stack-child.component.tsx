import React from 'react'

const StackChild = ({Component,position,top,bottom,left,right}: any) => {

    const styleObj = {
        position: position ? position :  'absolute',
        top: top ? top : undefined,
        left: left ? left : undefined,
        bottom: bottom ? bottom : undefined,
        right: right ? right : undefined,
    };

    console.log(styleObj)

    return (
        <div style={styleObj}>
           <Component />
        </div>
    )
}

export default StackChild;
