import { Box } from "@chakra-ui/react"
import School from "./School"

const Schools = ({ schools }) => {
    return (
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            alignContent='center'
            marginTop='10vh'
        >
            {schools.map((school, i) => <School key={i} school={school}/>)}
        </Box>
    )
}

export default Schools