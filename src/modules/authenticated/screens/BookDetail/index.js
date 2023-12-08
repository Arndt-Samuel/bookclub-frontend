import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { NavBar, Text, Button } from 'components'
import { getBookDetail } from 'services/api/requests'

export const BookDetailScreen = () => {
  const { id } = useParams()
  const { data } = useQuery(['bookDetail', id], () => getBookDetail(id), {
    enabled: !!id
  })
  console.log({ data })

  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        flexDir="row"
        mt={['24px', '48px']}
        w="100%"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex
          w={['238px']}
          h={['358px']}
          backgroundImage={`url(${data?.data?.book?.cover_url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius={['12px']}
        />
        <Flex w="70%" mx="48px" flexDir="column">
          <Text.ScreenTitle fontSize="24px">
            {data?.data?.book?.name}
          </Text.ScreenTitle>
          <Text mt="4px" fontSize="16px" color="brand.greyDark">
            {data?.data?.book?.author?.name}
          </Text>
          <Text.ScreenTitle mt="16px">Informações</Text.ScreenTitle>
          <Flex mt="6px" w="100%" flexDir="row" justifyContent="space-between">
            <Text fontSize="14px" color="brand.greyDark">
              Categoria: {data?.data?.book?.category?.name}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Páginas: {data?.data?.book?.pages}
            </Text>
            <Text fontSize="14px" color="brand.greyDark">
              Ano de lançamento:{' '}
              {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt="16px">Sinopse</Text.ScreenTitle>
          <Text mt="4px" fontSize="12px" color="brand.greyDark">
            {data?.data?.book?.synopsis}
          </Text>
        </Flex>
        <Flex>
          <Button>Adicionar aos Favoritos</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}