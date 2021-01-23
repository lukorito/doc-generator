import React from "react"
import {Flex, FlexProps} from "@chakra-ui/react"
import Helmet from "react-helmet"

type WrapperProps =  FlexProps & {
    title: string
}

const Wrapper: React.FC<WrapperProps> = ({children, title, ...rest}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Flex {...rest}>
                {children}
            </Flex>
        </>
    )
}

Wrapper.defaultProps = {
    p: 4,
    flex: 1,
    pt: 'calc(64px + 1rem)',
    bg: 'gray.100',
    height: '100%',
    flexDir: 'column',
    minHeight: '100vh',
    align: 'flex-start',
    justify: 'flex-start'
}

export default Wrapper;
