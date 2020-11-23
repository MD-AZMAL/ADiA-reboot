import React from 'react'

const StackChild = ({Component,position,top,bottom,left,right,zIndex,width}: any) => {

    const styleObj = {
        position: position ? position :  undefined,
        top: top || top == 0 ? top : undefined,
        left: left || left == 0 ? left : undefined,
        bottom: bottom || bottom == 0 ? bottom : undefined,
        right: right || right === 0 ? right : undefined,
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
