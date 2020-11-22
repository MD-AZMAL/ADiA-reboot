import React from 'react'

const StackChild = ({Component,position,top,bottom,left,right,zIndex,width}: any) => {

    const styleObj = {
        position: position ? position :  undefined,
        top: top ? top : undefined,
        left: left ? left : undefined,
        bottom: bottom ? bottom : undefined,
        right: right ? right : undefined,
        width: width ? width : undefined,
        zIndex: zIndex ? zIndex : undefined,
    };

    return (
        <div style={styleObj}>
           <Component />
        </div>
    )
}

export default StackChild;
