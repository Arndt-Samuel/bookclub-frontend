import { HomeScreen, BookDetailScreen, FavoriteScreen } from '../screens'

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
  }
]
