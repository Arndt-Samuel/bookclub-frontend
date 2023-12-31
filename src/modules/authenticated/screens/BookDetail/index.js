import { Flex, useToast } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import { NavBar, Text, Button, CategoryList } from 'components'
import {
  getBookDetail,
  addBookToFavorite,
  deleteBookFromFavorites
} from 'services/api/requests'

export const BookDetailScreen = () => {
  const toast = useToast()
  const { id } = useParams()
  const { data, refetch, isLoading } = useQuery(
    ['bookDetail', id],
    () => getBookDetail(id),
    {
      enabled: !!id
    }
  )

  const addFavoriteMutation = useMutation((data) => addBookToFavorite(data), {
    onError: (error) => {
      toast({
        title: 'Falha ao adiconar livro aos favoritos.',
        description:
          error?.response?.data?.error || 'Por favor, tente novamente.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      refetch()
    },
    onSuccess: () => {
      toast({
        title: 'Livro adicionado aos favoritos!',
        status: 'success',
        duration: 6000,
        isClosable: true
      })
      refetch()
    }
  })

  const deleteFavoriteMutation = useMutation(
    (data) => deleteBookFromFavorites(data),
    {
      onError: (error) => {
        toast({
          title: 'Falha ao remover livro aos favoritos.',
          description:
            error?.response?.data?.error || 'Por favor, tente novamente.',
          status: 'error',
          duration: 3000,
          isClosable: true
        })
        refetch()
      },
      onSuccess: () => {
        toast({
          title: 'Livro removido dos favoritos!',
          status: 'success',
          duration: 6000,
          isClosable: true
        })
        refetch()
      }
    }
  )

  const handleButtonClick = () => {
    if (data?.data?.favorite) {
      deleteFavoriteMutation.mutate(data?.data?.favorite?.id)
    } else {
      addFavoriteMutation.mutate({
        book_id: id
      })
    }
  }

  return (
    <Flex flexDir="column">
      <NavBar />
      <Flex
        flexDir={['column', 'row']}
        alignItems={['center', 'flex-start']}
        justifyContent={['center', 'flex-start']}
        mt={['24px', '48px']}
        w="100%"
        maxW="100vw"
        paddingX={['24px', '48px', '80px', '112px']}
      >
        <Flex
          w={['170px', '238px']}
          h={['256px', '358px']}
          backgroundImage={`url(${data?.data?.book?.cover_url})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius={['12px']}
        />
        <Flex
          mt={['24px', '0px']}
          w={['100%', '70%']}
          mx={['0px', '48px']}
          flexDir="column"
        >
          <Text.ScreenTitle fontSize="24px">
            {data?.data?.book?.name}
          </Text.ScreenTitle>
          <Text mt="4px" fontSize="16px" color="brand.greyDark">
            {data?.data?.book?.author?.name}
          </Text>
          <Text.ScreenTitle mt="16px">Informações</Text.ScreenTitle>
          <Flex
            mt="6px"
            w="100%"
            flexDir={['column', 'row']}
            justifyContent={['flex-start', 'space-between']}
          >
            <Text fontSize="14px" color="brand.greyDark">
              Categoria: {data?.data?.book?.category?.name}
            </Text>
            <Text mt={['10px', '0px']} fontSize="14px" color="brand.greyDark">
              Páginas: {data?.data?.book?.pages}
            </Text>
            <Text mt={['10px', '0px']} fontSize="14px" color="brand.greyDark">
              Ano de lançamento:{' '}
              {new Date(data?.data?.book?.release_date).getFullYear()}
            </Text>
          </Flex>
          <Text.ScreenTitle mt="16px">Sinopse</Text.ScreenTitle>
          <Text
            maxW={['80%', '100%']}
            mt="4px"
            fontSize="12px"
            color="brand.greyDark"
          >
            {data?.data?.book?.synopsis}
          </Text>
        </Flex>
        <Flex
          justifyContent={['center', 'flex-start']}
          alignItems={['center', 'flex-start']}
          w={['100%', 'auto']}
          mt={['24px', '0px']}
        >
          <Button
            isLoading={
              isLoading ||
              addFavoriteMutation.isLoading ||
              deleteFavoriteMutation.isLoading
            }
            secondary={data?.data?.favorite}
            onClick={() => handleButtonClick()}
          >
            {data?.data?.favorite
              ? 'Remover dos favoritos'
              : 'Adicionar aos favoritos'}
          </Button>
        </Flex>
      </Flex>
      <CategoryList
        title="Outros Livros"
        categoryId={data?.data?.book?.category?.id}
      />
    </Flex>
  )
}
