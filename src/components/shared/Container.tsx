import {ReactNode} from 'react'

function Container(props: {children: ReactNode}) {
    return <div className={'container'} {...props}/>
}

export default Container
