import { HomeScreen, BookDetailScreen } from '../screens'

export const authRoutes = [
  {
    path: '/Home',
    element: <HomeScreen />
  },
  {
    path: '/book-detail/:id',
    element: <BookDetailScreen />
  }
]
