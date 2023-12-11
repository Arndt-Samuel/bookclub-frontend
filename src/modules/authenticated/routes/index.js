import { HomeScreen, BookDetailScreen, FavoriteScreen, SearchScreen } from '../screens'

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
    path: '/favorites',
    element: <FavoriteScreen />
  },
  {
    path: '/search',
    element: <SearchScreen />
  }
]
