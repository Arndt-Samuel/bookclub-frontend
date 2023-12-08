import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Flex, Spinner } from '@chakra-ui/react'
import { Text } from 'components/atoms'
import { CategoryCard, BookCard } from 'components/molecules'
import { getCategories, getBooksByCategory } from 'services/api/requests'

export const CategoryList = ({ title, categoryId }) => {
  const [selected, setSelected] = useState(categoryId)
  const { data } = useQuery('categories', getCategories)
  const {
    data: bookQuery,
    refetch,
    isLoading
  } = useQuery(
    [`booksById${selected}`, selected],
    () => getBooksByCategory(selected),
    {
      enabled: !!selected
    }
  )

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id)
    }
  }, [data])

  useEffect(() => {
    refetch()
  }, [categoryId])

  return (
    <Flex
      flexDir="column"
      mt="48px"
      paddingX={['24px', '48px', '80px', '112px']}
      h="520px"
    >
      <Text.ScreenTitle>{title || 'Categorias'}</Text.ScreenTitle>
      {!categoryId && (
        <Flex
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
          overflowX={['scroll', 'auto']}
          mt="12px"
          flexDir="row"
        >
          {data?.data &&
            data?.data.map((item) => (
              <CategoryCard
                key={`book_${item.id}`}
                selected={selected === item.id}
                onClick={() => setSelected(item.id)}
                {...item}
              />
            ))}
        </Flex>
      )}

      <Flex
        css={{
          '::-webkit-scrollbar': {
            display: 'none'
          }
        }}
        overflowX={['scroll', 'auto']}
        mt="12px"
        pb="48px"
        flexDir="row"
      >
        {isLoading && <Spinner />}
        {!isLoading && bookQuery && bookQuery?.data?.length === 0 && (
          <Flex alignItems='center' justifyContent='center' h='230px'>
            <Text>Nenhum livro encontrado</Text>
          </Flex>
        )}
        {bookQuery &&
          bookQuery?.data.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  )
}
