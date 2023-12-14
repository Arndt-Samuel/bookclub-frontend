import {
  HomeScreen,
  BookDetailScreen,
  FavoriteScreen,
  SearchScreen,
  AuthorDetailScreen
} from '../screens'

export const authRoutes = [
  {
    path: '/Home',
    element: <HomeScreen />
  },
  {
    path: '/book-detail/:id',
    element: <BookDetailScreen />
  },
  {
    path: '/author-detail/:id',
    element: <AuthorDetailScreen />
  },
  {
    path: '/favorites',
    element: <FavoriteScreen />
  },
  {
    path: '/search',
    element: <SearchScreen />
  }
]
