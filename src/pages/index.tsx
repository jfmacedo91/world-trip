import { Box, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { api } from "../services/api";

export default function Home({continents}) {
  return (
    <Flex direction="column">
      <Header />
      <Box
        as="section"
        w="100%"
        p="20"
        bg="url('https://source.unsplash.com/fNUNt9w3m-Q')"
        bgSize="cover"
        bgPosition="0 -450px"
      >
        <Box pos="relative" maxW="1160px" mx="auto">
          <Flex flexDir="column">
            <Text color="light.500" fontSize="4xl" fontWeight="500">
              5 Continentes,<br /> infinitas possibilidades.
            </Text>
            <Text maxW="450px" color="light.100" mt="5">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>
          <Image
            position="absolute"
            right="0"
            bottom="-115px"
            src="./images/airplane.svg"
          />
        </Box>
      </Box>
      <Flex
        justify="space-between"
        as="section"
        w="100%"
        maxW="1160px"
        mx="auto"
        mt="28"
        mb="20"
      >
        <Stack spacing="6" align="center">
          <Image src="./images/cocktail.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">vida noturna</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/surf.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">praia</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/building.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">moderno</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/museum.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">clássico</Text>
        </Stack>
        <Stack spacing="6" align="center">
          <Image src="./images/earth.svg" h="85px" />
          <Text fontSize="2xl" fontWeight="600">e mais...</Text>
        </Stack>
      </Flex>
      <Box w="88px" mx="auto">
        <Divider borderWidth="1px" borderColor="dark.500" />
      </Box>
      <Box>
        <Text my="14" fontSize="4xl" fontWeight="500" textAlign="center">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Box>
      <Slider continents={ continents } />
    </Flex>
  )
}

export const getStaticProps = async () => {
  const response = await api.get(`continents`)

  const continents = response.data.map(continent => {
    return {
      slug: continent.slug,
      name: continent.name,
      image: continent.image,
      callToAction: continent.callToAction
    }
  })

  return {
    props: { continents }
  }
}