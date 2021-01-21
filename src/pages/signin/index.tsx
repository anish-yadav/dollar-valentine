import { Box, Text } from "@chakra-ui/react"
import { WithRouterProps } from "next/dist/client/with-router"
import { withRouter } from "next/router"
import Layout from "../../components/layouts/Layout"

interface Props extends WithRouterProps   {

}

const Signin = (props: Props)  => {
    console.log(props.router)
    return (
        <Layout>
            <Box w={500} height={500} shadow="lg">

            </Box>
        </Layout>

    )
}

export default withRouter(Signin)